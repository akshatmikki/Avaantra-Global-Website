"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogRecord, getAllBlogs } from "@/lib/blogs";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs()
      .then((data) => setBlogs(data))
      .finally(() => setLoading(false));
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
