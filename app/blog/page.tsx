"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DEFAULT_BLOG_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80";

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
  };

  const title =
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
      (typeof raw.featuredImage === "string" && raw.featuredImage.trim()) ||
      (typeof raw.FeaturedImage === "string" && raw.FeaturedImage.trim()) ||
      DEFAULT_BLOG_IMAGE,
    authorName:
      (typeof raw.authorName === "string" && raw.authorName.trim()) ||
      (typeof raw.AuthorName === "string" && raw.AuthorName.trim()) ||
      "Avaantra Team",
    tags: Array.isArray(raw.tags)
      ? raw.tags.map(String).filter(Boolean)
      : Array.isArray(raw.Tags)
        ? raw.Tags.map(String).filter(Boolean)
        : [],
  };
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admin.urest.in:8089/api/blogs/GetAllBlogs")
      .then((res) => res.json())
      .then((data) => {
        const list: unknown[] = Array.isArray(data)
          ? data
          : Array.isArray(data?.blogs)
            ? data.blogs
            : Array.isArray(data?.content)
              ? data.content
              : Array.isArray(data?.data)
                ? data.data
                : [];
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
