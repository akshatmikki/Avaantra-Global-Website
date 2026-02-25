"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ImagePlus, PenTool, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_API_BASE, DEFAULT_BLOG_IMAGE } from "@/lib/blogs";

const ADMIN_AUTH_KEY = "avaantra_admin_auth";

type ContentBlock = {
  id: string;
  text: string;
  image: string;
};

export default function CreateBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([
    { id: crypto.randomUUID(), text: "", image: "" },
  ]);
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tags, setTags] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem(ADMIN_AUTH_KEY) !== "true") {
      router.replace("/admin/login");
    }
  }, [router]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleContentBlockImageUpload = (
    blockId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = typeof reader.result === "string" ? reader.result : "";
      if (!dataUrl) return;
      setContentBlocks((prev) =>
        prev.map((block) => (block.id === blockId ? { ...block, image: dataUrl } : block))
      );
    };

    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const handleContentBlockTextChange = (blockId: string, value: string) => {
    setContentBlocks((prev) =>
      prev.map((block) => (block.id === blockId ? { ...block, text: value } : block))
    );
  };

  const handleAddContentBlock = () => {
    setContentBlocks((prev) => [...prev, { id: crypto.randomUUID(), text: "", image: "" }]);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const safeSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const tagList = tags
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    const mergedContent = contentBlocks
      .map((block) => {
        const parts: string[] = [];
        if (block.image) parts.push(`![Content image](${block.image})`);
        if (block.text.trim()) parts.push(block.text.trim());
        return parts.join("\n\n");
      })
      .filter(Boolean)
      .join("\n\n");

    if (!safeSlug || !mergedContent.trim() || tagList.length === 0) {
      setError("Title, content, and at least one tag are required.");
      setSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Title", title.trim());
      formData.append("Slug", safeSlug);
      formData.append(
        "Content",
        JSON.stringify({
          body: mergedContent,
          image: image || DEFAULT_BLOG_IMAGE,
        })
      );
      formData.append("AuthorName", "Avaantra Team");
      formData.append("Status", "Published");
      formData.append("FeaturedImage", image || DEFAULT_BLOG_IMAGE);
      if (imageFile) formData.append("Image", imageFile);
      tagList.forEach((tag) => formData.append("Tags", tag));

      const res = await fetch(`${BLOG_API_BASE}/CreateStructuredBlog`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(`Error saving blog (${res.status})`);

      router.push(`/blog/${safeSlug}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to create blog.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-b from-orange-50 to-white pb-16 pt-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            <PenTool className="h-4 w-4" />
            Create New Blog
          </div>

          <h1 className="mb-4 text-4xl font-bold text-slate-900">Publish a New Article</h1>
          <p className="text-lg text-slate-600">
            Share insights, guides, and updates with your audience.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Blog Title</label>
                <input
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter blog title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Content</label>
                <div className="space-y-6">
                  {contentBlocks.map((block, index) => {
                    const inputId = `contentImageUpload-${block.id}`;
                    return (
                      <div key={block.id} className="rounded-2xl border border-slate-200 p-4">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Section {index + 1}
                        </p>
                        <div className="mb-4">
                          <label
                            htmlFor={inputId}
                            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:border-primary-400 hover:text-primary-600"
                          >
                            <ImagePlus className="h-4 w-4" />
                            Upload Image
                          </label>
                          <input
                            id={inputId}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(event) => handleContentBlockImageUpload(block.id, event)}
                          />
                          {block.image && (
                            <img
                              src={block.image}
                              alt={`Content section ${index + 1}`}
                              className="mt-3 h-40 w-full rounded-xl border border-slate-200 object-cover"
                            />
                          )}
                        </div>

                        <textarea
                          rows={6}
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                          placeholder="Write your content..."
                          value={block.text}
                          onChange={(event) => handleContentBlockTextChange(block.id, event.target.value)}
                        />
                      </div>
                    );
                  })}

                  <div className="flex justify-start">
                    <Button
                      type="button"
                      onClick={handleAddContentBlock}
                      className="bg-primary hover:bg-[#E76A32]"
                    >
                      Add Section
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Tag className="h-4 w-4 text-primary-500" />
                  Tags
                </label>
                <input
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                  placeholder="strategy, growth, engineering"
                  value={tags}
                  onChange={(event) => setTags(event.target.value)}
                />
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <ImagePlus className="h-4 w-4 text-primary-500" />
                  Featured Image
                </label>
                <div className="rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center transition hover:border-primary-400">
                  <input type="file" onChange={handleImageUpload} className="hidden" id="imageUpload" />
                  <label htmlFor="imageUpload" className="cursor-pointer">
                    <p className="font-medium text-slate-600">Click to upload image</p>
                    <p className="mt-1 text-xs text-slate-400">JPG, PNG recommended</p>
                  </label>
                </div>

                {image && (
                  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <img src={image} alt="Preview" className="h-60 w-full object-cover" />
                  </div>
                )}
              </div>

              {error && (
                <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {error}
                </p>
              )}

              <div className="flex justify-end pt-4">
                <Button size="lg" className="bg-primary px-10 hover:bg-[#E76A32]" disabled={submitting}>
                  {submitting ? "Publishing..." : "Publish Blog"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
