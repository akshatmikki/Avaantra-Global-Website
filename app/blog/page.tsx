"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DEFAULT_BLOG_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80";
const WORDPRESS_POSTS_ENDPOINT =
  "https://darkred-wolverine-323829.hostingersite.com/wp-json/wp/v2/posts";

type BlogCard = {
  id: string;
  slug: string;
  title: string;
  featuredImage: string;
  authorName: string;
  tags: string[];
};

const normalizeBlog = (item: unknown, index: number): BlogCard => {
  const raw = (item ?? {}) as {
    id?: unknown;
    Id?: unknown;
    slug?: unknown;
    Slug?: unknown;
    title?: unknown;
    Title?: unknown;
    _embedded?: unknown;
    featuredImage?: unknown;
    FeaturedImage?: unknown;
    authorName?: unknown;
    AuthorName?: unknown;
    tags?: unknown;
    Tags?: unknown;
  };
  const wpTitleObject =
    raw.title && typeof raw.title === "object" ? (raw.title as { rendered?: unknown }) : null;
  const wpEmbedded =
    raw._embedded && typeof raw._embedded === "object"
      ? (raw._embedded as {
          author?: Array<{ name?: unknown }>;
          ["wp:featuredmedia"]?: Array<{ source_url?: unknown }>;
          ["wp:term"]?: Array<Array<{ name?: unknown }>>;
        })
      : null;
  const wpTerms =
    wpEmbedded?.["wp:term"]?.flatMap((group) =>
      Array.isArray(group) ? group.map((term) => term?.name) : []
    ) ?? [];

  const title =
    (wpTitleObject && typeof wpTitleObject.rendered === "string" && wpTitleObject.rendered.trim()) ||
    (typeof raw.title === "string" && raw.title.trim()) ||
    (typeof raw.Title === "string" && raw.Title.trim()) ||
    "Untitled";
  const slug =
    (typeof raw.slug === "string" && raw.slug.trim()) ||
    (typeof raw.Slug === "string" && raw.Slug.trim()) ||
    title.toLowerCase().replace(/\s+/g, "-");

  return {
    id: String(raw.id ?? raw.Id ?? index),
    slug,
    title,
    featuredImage:
      (typeof wpEmbedded?.["wp:featuredmedia"]?.[0]?.source_url === "string" &&
        wpEmbedded["wp:featuredmedia"][0].source_url.trim()) ||
      (typeof raw.featuredImage === "string" && raw.featuredImage.trim()) ||
      (typeof raw.FeaturedImage === "string" && raw.FeaturedImage.trim()) ||
      DEFAULT_BLOG_IMAGE,
    authorName:
      (typeof wpEmbedded?.author?.[0]?.name === "string" && wpEmbedded.author[0].name.trim()) ||
      (typeof raw.authorName === "string" && raw.authorName.trim()) ||
      (typeof raw.AuthorName === "string" && raw.AuthorName.trim()) ||
      "Avaantra Team",
    tags: wpTerms
      .map((value) => (typeof value === "string" ? value.trim() : ""))
      .filter(Boolean),
  };
};

const extractList = (data: unknown): unknown[] => {
  if (Array.isArray(data)) return data;
  if (data && typeof data === "object") {
    const obj = data as {
      blogs?: unknown;
      content?: unknown;
      data?: unknown;
    };
    if (Array.isArray(obj.blogs)) return obj.blogs;
    if (Array.isArray(obj.content)) return obj.content;
    if (Array.isArray(obj.data)) return obj.data;
  }
  return [];
};

const getPostsEndpoint = () => `${WORDPRESS_POSTS_ENDPOINT}?_embed=1&per_page=100`;

const normalizeTags = (item: unknown): string[] => {
  const raw = (item ?? {}) as { tags?: unknown; Tags?: unknown };
  if (Array.isArray(raw.tags)) return raw.tags.map(String).filter(Boolean);
  if (Array.isArray(raw.Tags)) return raw.Tags.map(String).filter(Boolean);
  return [];
};

const normalizeBlogWithFallbackTags = (item: unknown, index: number): BlogCard => {
  const normalized = normalizeBlog(item, index);
  if (normalized.tags.length > 0) return normalized;
  return {
    ...normalized,
    tags: normalizeTags(item),
  };
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(getPostsEndpoint())
      .then((res) => res.json())
      .then((data) => {
        const list = extractList(data);
        setBlogs(
          list.map((item: unknown, index: number) =>
            normalizeBlogWithFallbackTags(item, index)
          )
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="py-40 text-center">Loading blogs...</div>;
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-10 text-3xl font-bold">Blogs</h1>

        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="overflow-hidden rounded-xl border transition hover:shadow-lg"
            >
              <img src={blog.featuredImage} alt={blog.title} className="h-48 w-full object-cover" />

              <div className="p-5">
                <h2 className="mb-2 text-lg font-semibold">{blog.title}</h2>

                <p className="text-sm text-slate-500">By {blog.authorName}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {blog.tags?.map((tag) => (
                    <span key={tag} className="rounded bg-slate-100 px-2 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
