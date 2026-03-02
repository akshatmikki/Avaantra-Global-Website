"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DEFAULT_BLOG_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80";

const WORDPRESS_POSTS_API =
  "https://darkred-wolverine-323829.hostingersite.com/wp-json/wp/v2/posts?_embed";

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
    featuredImage?: unknown;
    FeaturedImage?: unknown;
    authorName?: unknown;
    AuthorName?: unknown;
    tags?: unknown;
    Tags?: unknown;
    _embedded?: unknown;
  };

  const wpTitle =
    raw.title && typeof raw.title === "object"
      ? (raw.title as { rendered?: unknown }).rendered
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
    (typeof raw.title === "string" && raw.title.trim()) ||
    (typeof wpTitle === "string" && wpTitle.trim()) ||
    (typeof raw.Title === "string" && raw.Title.trim()) ||
    "Untitled";
  const slug =
    (typeof raw.slug === "string" && raw.slug.trim()) ||
    (typeof raw.Slug === "string" && raw.Slug.trim()) ||
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
    slug,
    title,
    featuredImage:
      (typeof raw.featuredImage === "string" && raw.featuredImage.trim()) ||
      (typeof raw.FeaturedImage === "string" && raw.FeaturedImage.trim()) ||
      wpFeaturedImage ||
      DEFAULT_BLOG_IMAGE,
    authorName:
      (typeof raw.authorName === "string" && raw.authorName.trim()) ||
      (typeof raw.AuthorName === "string" && raw.AuthorName.trim()) ||
      wpAuthorName ||
      "Avaantra Team",
    tags: Array.isArray(raw.tags)
      ? raw.tags.map(String).filter(Boolean)
      : Array.isArray(raw.Tags)
        ? raw.Tags.map(String).filter(Boolean)
        : wpTags,
  };
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(WORDPRESS_POSTS_API)
      .then((res) => res.json())
      .then((data) => {
        const list: unknown[] = Array.isArray(data) ? data : [];
        setBlogs(list.map((item: unknown, index: number) => normalizeBlog(item, index)));
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
