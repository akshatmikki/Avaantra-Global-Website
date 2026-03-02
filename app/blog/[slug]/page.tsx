"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, MessageSquare, Users } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const DEFAULT_BLOG_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80";
const WORDPRESS_POSTS_API =
  "https://darkred-wolverine-323829.hostingersite.com/wp-json/wp/v2/posts";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  authorName: string;
  tags: string[];
  createdAt?: string;
}

const normalizeBlog = (item: unknown, index: number): Blog => {
  const raw = (item ?? {}) as {
    id?: unknown;
    Id?: unknown;
    title?: unknown;
    Title?: unknown;
    slug?: unknown;
    Slug?: unknown;
    content?: unknown;
    Content?: unknown;
    featuredImage?: unknown;
    FeaturedImage?: unknown;
    authorName?: unknown;
    AuthorName?: unknown;
    tags?: unknown;
    Tags?: unknown;
    createdAt?: unknown;
    CreatedAt?: unknown;
    date?: unknown;
    _embedded?: unknown;
  };

  const wpTitle =
    raw.title && typeof raw.title === "object"
      ? (raw.title as { rendered?: unknown }).rendered
      : undefined;
  const wpContent =
    raw.content && typeof raw.content === "object"
      ? (raw.content as { rendered?: unknown }).rendered
      : undefined;
  const wpEmbedded =
    raw._embedded && typeof raw._embedded === "object"
      ? (raw._embedded as {
          author?: Array<{ name?: unknown }>;
          ["wp:featuredmedia"]?: Array<{ source_url?: unknown }>;
          ["wp:term"]?: Array<Array<{ name?: unknown }>>;
        })
      : undefined;

  const title =
    (typeof raw.title === "string" && raw.title) ||
    (typeof wpTitle === "string" && wpTitle) ||
    (typeof raw.Title === "string" && raw.Title) ||
    "Untitled";
  const slugValue =
    (typeof raw.slug === "string" && raw.slug) ||
    (typeof raw.Slug === "string" && raw.Slug) ||
    title.toLowerCase().replace(/\s+/g, "-");
  const wpFeaturedImage =
    typeof wpEmbedded?.["wp:featuredmedia"]?.[0]?.source_url === "string"
      ? wpEmbedded["wp:featuredmedia"][0].source_url
      : "";
  const wpAuthorName =
    typeof wpEmbedded?.author?.[0]?.name === "string" ? wpEmbedded.author[0].name : "";
  const wpTags = Array.isArray(wpEmbedded?.["wp:term"]?.[1])
    ? wpEmbedded?.["wp:term"]?.[1]
        .map((tag) => (typeof tag?.name === "string" ? tag.name : ""))
        .filter(Boolean)
    : [];

  return {
    id: String(raw.id ?? raw.Id ?? index),
    title,
    slug: slugValue,
    content:
      (typeof raw.content === "string" && raw.content) ||
      (typeof wpContent === "string" && wpContent) ||
      (typeof raw.Content === "string" && raw.Content) ||
      "",
    featuredImage:
      (typeof raw.featuredImage === "string" && raw.featuredImage) ||
      (typeof raw.FeaturedImage === "string" && raw.FeaturedImage) ||
      wpFeaturedImage ||
      DEFAULT_BLOG_IMAGE,
    authorName:
      (typeof raw.authorName === "string" && raw.authorName) ||
      (typeof raw.AuthorName === "string" && raw.AuthorName) ||
      wpAuthorName ||
      "Avaantra Team",
    tags: Array.isArray(raw.tags)
      ? raw.tags.map(String)
      : Array.isArray(raw.Tags)
        ? raw.Tags.map(String)
        : wpTags,
    createdAt:
      (typeof raw.createdAt === "string" && raw.createdAt) ||
      (typeof raw.CreatedAt === "string" && raw.CreatedAt) ||
      (typeof raw.date === "string" && raw.date) ||
      undefined,
  };
};

const decodeContent = (content: string) => {
  const normalizeText = (value: string) => value.replace(/\r\n/g, "\n");

  const extractFromObject = (parsed: unknown): string | null => {
    if (!parsed || typeof parsed !== "object") return null;

    const objectContent = parsed as {
      content?: unknown;
      markdown?: unknown;
      text?: unknown;
      body?: unknown;
      value?: unknown;
      sections?: unknown;
      rendered?: unknown;
    };

    if (Array.isArray(objectContent.sections)) {
      const sectionMarkdown = objectContent.sections
        .map((item) => {
          const section = (item ?? {}) as {
            imageUrl?: unknown;
            text?: unknown;
          };
          const image = typeof section.imageUrl === "string" ? section.imageUrl.trim() : "";
          const text = typeof section.text === "string" ? section.text.trim() : "";
          const parts: string[] = [];
          if (image) parts.push(`![Section image](${image})`);
          if (text) parts.push(text);
          return parts.join("\n\n");
        })
        .filter(Boolean)
        .join("\n\n");
      if (sectionMarkdown) return sectionMarkdown;
    }

    const candidate =
      objectContent.content ??
      objectContent.markdown ??
      objectContent.text ??
      objectContent.body ??
      objectContent.value ??
      objectContent.rendered;

    return typeof candidate === "string" ? candidate : null;
  };

  const decodeValue = (value: unknown, depth = 0): string => {
    if (depth > 3) return typeof value === "string" ? value : "";
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return decodeValue(parsed, depth + 1);
      } catch {
        return value;
      }
    }
    const extracted = extractFromObject(value);
    if (extracted) return decodeValue(extracted, depth + 1);
    return "";
  };

  const decoded = decodeValue(content);
  return normalizeText(decoded || content);
};

export default function BlogDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!slug) return;
    fetch(`${WORDPRESS_POSTS_API}?_embed`)
      .then((res) => res.json())
      .then((response) => {
        const list: unknown[] = Array.isArray(response) ? response : [];
        const normalized = list.map((item, index) => normalizeBlog(item, index));
        const filtered = normalized
          .filter((b) => b.slug !== slug)
          .sort((a, b) => {
            const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return bTime - aTime;
          })
          .slice(0, 5);
        setRecentBlogs(filtered);
      })
      .catch(() => null);
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      try {
        const detailRes = await fetch(`${WORDPRESS_POSTS_API}?slug=${encodeURIComponent(slug)}&_embed`);
        if (detailRes.ok) {
          const detailData = await detailRes.json();
          if (Array.isArray(detailData) && detailData.length > 0) {
            const matched =
              detailData.find((item) => {
                const raw = (item ?? {}) as { slug?: unknown };
                return typeof raw.slug === "string" && raw.slug === slug;
              }) || detailData[0];
            setBlog(normalizeBlog(matched, 0));
            return;
          }
        }

        const res = await fetch(`${WORDPRESS_POSTS_API}?_embed`);
        if (!res.ok) throw new Error("Blog not found");
        const response = await res.json();
        const list: unknown[] = Array.isArray(response) ? response : [];
        const normalized = list.map((item, index) => normalizeBlog(item, index));
        const selected = normalized.find((item) => item.slug === slug);
        if (!selected) throw new Error("Blog not found");
        setBlog(selected);
      } catch {
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  useEffect(() => {
    if (!activeImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage]);

  const markdownContent = useMemo(() => (blog ? decodeContent(blog.content) : ""), [blog]);
  const normalizedMarkdownContent = useMemo(
    () =>
      markdownContent
        .replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm, "")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/(^|[^*])\*(?!\s)(.+?)(?<!\s)\*(?!\*)/gm, "$1<em>$2</em>"),
    [markdownContent]
  );

  if (loading) {
    return <div className="py-40 text-center text-slate-500">Loading blog...</div>;
  }

  if (error || !blog) {
    return <div className="py-40 text-center text-red-600">{error || "Blog not found"}</div>;
  }

  const featuredImage = blog.featuredImage || DEFAULT_BLOG_IMAGE;

  return (
    <>
      <section
        className="relative flex h-[420px] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${featuredImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{blog.title}</h1>
          <p className="text-sm text-slate-200">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            {" > "}
            <Link href="/blog" className="hover:underline">
              Blogs
            </Link>{" "}
            {" > "} <span className="text-primary-400">{blog.title}</span>
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
              <button
                type="button"
                onClick={() => setActiveImage({ src: featuredImage, alt: blog.title || "Featured image" })}
                className="block w-full cursor-zoom-in"
                aria-label="View full image"
              >
                <img src={featuredImage} alt={blog.title} className="max-h-[560px] w-full object-contain object-center" />
              </button>
            </div>

            <div className="mb-6 flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary-500" />
                {blog.authorName}
              </span>
              {blog.createdAt && (
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary-500" />
                  {new Date(blog.createdAt).toDateString()}
                </span>
              )}
              <span className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary-500" />0 Comments
              </span>
            </div>

            <h2 className="mb-8 text-3xl font-bold text-slate-900">{blog.title}</h2>

            <div
              className="
                prose prose-slate max-w-none
                prose-p:leading-7 prose-p:my-3
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-14 prose-h2:mb-6
                prose-ul:my-6 prose-ul:pl-6 prose-li:my-2
                prose-blockquote:my-8 prose-blockquote:border-l-4 prose-blockquote:border-primary-500
                prose-blockquote:bg-slate-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:italic
              "
              style={{ lineHeight: 1.8 }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  div: ({ node, ...props }) => {
                    const divProps = props as React.HTMLAttributes<HTMLDivElement> & {
                      align?: "left" | "center" | "right";
                    };
                    const align = divProps.align;
                    return (
                      <div
                        {...divProps}
                        style={{
                          ...(divProps.style || {}),
                          ...(align ? { textAlign: align } : {}),
                        }}
                      />
                    );
                  },
                  p: ({ node, ...props }) => {
                    const pProps = props as React.HTMLAttributes<HTMLParagraphElement> & {
                      align?: "left" | "center" | "right";
                    };
                    const align = pProps.align;
                    return (
                      <p
                        {...pProps}
                        style={{
                          ...(pProps.style || {}),
                          whiteSpace: "pre-wrap",
                          ...(align ? { textAlign: align } : {}),
                        }}
                      />
                    );
                  },
                  span: ({ node, ...props }) => {
                    const spanProps = props as React.HTMLAttributes<HTMLSpanElement>;
                    return (
                      <span
                        {...spanProps}
                        style={{
                          ...(spanProps.style || {}),
                          verticalAlign: "baseline",
                          ...(spanProps.style?.fontSize ? { lineHeight: 1.5 } : {}),
                        }}
                      />
                    );
                  },
                  img: ({ node, ...props }) => {
                    const imgProps = props as React.ImgHTMLAttributes<HTMLImageElement>;
                    const srcValue = typeof imgProps.src === "string" ? imgProps.src : "";
                    const altValue = typeof imgProps.alt === "string" ? imgProps.alt : "Blog section image";
                    if (!srcValue) return null;
                    return (
                      <figure className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImage({
                              src: srcValue,
                              alt: altValue,
                            })
                          }
                          className="block w-full cursor-zoom-in"
                          aria-label="View full image"
                        >
                          <img
                            {...imgProps}
                            src={srcValue}
                            alt={altValue}
                            className="max-h-[560px] w-full object-contain object-center"
                            loading="lazy"
                          />
                        </button>
                      </figure>
                    );
                  },
                  ul: ({ node, ...props }) => (
                    <ul className="my-6 list-disc list-inside space-y-2 pl-0" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="my-6 list-decimal list-inside space-y-2 pl-0" {...props} />
                  ),
                  hr: ({ node, ...props }) => <hr {...props} className="my-8 border-0 border-t border-slate-300" />,
                }}
              >
                {normalizedMarkdownContent}
              </ReactMarkdown>
            </div>

            {blog.tags?.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-slate-100 px-4 py-1.5 text-sm text-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>

          <aside className="space-y-12">
            <div className="rounded-xl border bg-slate-50 p-6">
              <h3 className="mb-4 text-lg font-bold">Search</h3>
              <input
                className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary-500"
                placeholder="Search blogs..."
              />
            </div>

            <div className="rounded-xl border bg-slate-50 p-6">
              <h3 className="mb-4 text-lg font-bold">Recent Posts</h3>
              {recentBlogs.length === 0 ? (
                <p className="text-sm text-slate-500">No recent posts.</p>
              ) : (
                <ul className="space-y-4">
                  {recentBlogs.map((b) => (
                    <li key={b.id}>
                      <Link href={`/blog/${b.slug}`} className="block font-medium text-slate-700 hover:text-primary-600">
                        {b.title}
                      </Link>
                      {b.createdAt && (
                        <div className="mt-1 text-xs text-slate-400">
                          {new Date(b.createdAt).toDateString()}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="rounded-xl border bg-slate-50 p-6">
              <h3 className="mb-4 text-lg font-bold">Comments</h3>
              <p className="text-sm text-slate-500">No comments yet.</p>
            </div>
          </aside>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 rounded-md border border-white/30 bg-black/40 px-3 py-1.5 text-sm text-white hover:bg-black/60"
          >
            Close
          </button>
          <div className="max-h-[90vh] max-w-[95vw]" onClick={(event) => event.stopPropagation()}>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[88vh] max-w-[95vw] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
