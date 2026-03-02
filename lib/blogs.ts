export const BLOG_API_BASE =
  process.env.NEXT_PUBLIC_BLOG_API_BASE?.trim() || "https://admin.urest.in:8089/api/blog";

export const DEFAULT_BLOG_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80";

export type BlogRecord = {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  authorName: string;
  tags: string[];
  status: string;
  createdAt?: string;
};

type UnknownRecord = Record<string, unknown>;

const readString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const readObject = (value: unknown) =>
  value && typeof value === "object" ? (value as UnknownRecord) : null;

const readNestedString = (value: unknown, key: string) => {
  const objectValue = readObject(value);
  if (!objectValue) return "";
  return readString(objectValue[key]);
};

const pickString = (obj: UnknownRecord, keys: string[]) => {
  for (const key of keys) {
    const value = readString(obj[key]);
    if (value) return value;
  }
  return "";
};

const slugFromTitle = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export function decodeContent(rawValue: unknown): string {
  if (typeof rawValue !== "string") {
    if (!rawValue || typeof rawValue !== "object") return "";
    const objectValue = rawValue as UnknownRecord;
    const candidate =
      objectValue.rendered ??
      objectValue.content ??
      objectValue.Content ??
      objectValue.body ??
      objectValue.Body ??
      objectValue.markdown ??
      objectValue.text;
    return decodeContent(candidate);
  }

  const raw = rawValue.trim();
  if (!raw) return "";
  try {
    return decodeContent(JSON.parse(raw));
  } catch {
    return rawValue;
  }
}

export function normalizeBlog(item: unknown, index: number): BlogRecord {
  const raw = (item || {}) as UnknownRecord;
  const title =
    pickString(raw, ["title", "Title"]) ||
    readNestedString(raw.title, "rendered") ||
    readNestedString(raw.Title, "rendered") ||
    "Untitled";
  const slug = pickString(raw, ["slug", "Slug"]) || slugFromTitle(title) || `blog-${index + 1}`;
  const content = decodeContent(raw.content ?? raw.Content ?? "");
  const wpFeaturedMedia = Array.isArray((raw._embedded as UnknownRecord | undefined)?.["wp:featuredmedia"])
    ? (((raw._embedded as UnknownRecord)["wp:featuredmedia"] as unknown[])[0] as UnknownRecord | undefined)
    : undefined;
  const wpAuthor = Array.isArray((raw._embedded as UnknownRecord | undefined)?.author)
    ? (((raw._embedded as UnknownRecord).author as unknown[])[0] as UnknownRecord | undefined)
    : undefined;
  const featuredImage =
    pickString(raw, ["featuredImage", "FeaturedImage"]) ||
    readString(wpFeaturedMedia?.source_url) ||
    DEFAULT_BLOG_IMAGE;
  const authorName = pickString(raw, ["authorName", "AuthorName"]) || readString(wpAuthor?.name) || "Avaantra Team";
  const status = pickString(raw, ["status", "Status"]) || "Published";
  const createdAt = pickString(raw, ["createdAt", "CreatedAt", "date", "date_gmt"]) || undefined;

  const tagsCandidate = raw.tags ?? raw.Tags;
  const embeddedTerms = ((raw._embedded as UnknownRecord | undefined)?.["wp:term"] ?? []) as unknown[];
  const wpTags =
    Array.isArray(embeddedTerms) && embeddedTerms.length > 1 && Array.isArray(embeddedTerms[1])
      ? (embeddedTerms[1] as unknown[])
          .map((tag) => readString((tag as UnknownRecord)?.name))
          .filter(Boolean)
      : [];
  const tags = Array.isArray(tagsCandidate)
    ? tagsCandidate.map((tag) => String(tag).trim()).filter(Boolean)
    : wpTags;

  return {
    id: String(raw.id ?? raw.Id ?? index),
    title,
    slug,
    content,
    featuredImage,
    authorName,
    tags,
    status,
    createdAt,
  };
}

export function extractTextPreview(content: string, maxLength = 170) {
  const withoutImages = content.replace(/!\[[^\]]*]\(([^)]+)\)/g, " ");
  const compact = withoutImages.replace(/\s+/g, " ").trim();
  if (compact.length <= maxLength) return compact;
  return `${compact.slice(0, maxLength).trim()}...`;
}

export function parseContentBlocks(content: string) {
  const chunks = content
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);

  return chunks.map((chunk) => {
    const imageMatch = chunk.match(/^!\[[^\]]*]\(([^)]+)\)$/);
    if (imageMatch?.[1]) return { type: "image" as const, value: imageMatch[1] };
    return { type: "text" as const, value: chunk };
  });
}

export async function getAllBlogs(): Promise<BlogRecord[]> {
  const isWp = BLOG_API_BASE.includes("/wp-json/wp/v2/posts");
  const endpoints = isWp
    ? [`${BLOG_API_BASE}${BLOG_API_BASE.includes("?") ? "&" : "?"}_embed`]
    : [`${BLOG_API_BASE}/GetAllBlogs`, BLOG_API_BASE];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, { cache: "no-store" });
      if (!res.ok) continue;

      const data = await res.json();
      const list: unknown[] = Array.isArray(data)
        ? data
        : Array.isArray(data?.blogs)
          ? data.blogs
          : Array.isArray(data?.content)
            ? data.content
            : Array.isArray(data?.data)
              ? data.data
              : [];

      return list
        .map((item: unknown, index: number) => normalizeBlog(item, index))
        .sort((a: BlogRecord, b: BlogRecord) => {
          const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return bTime - aTime;
        });
    } catch {
      continue;
    }
  }

  return [];
}

export async function getBlogBySlug(slug: string): Promise<BlogRecord | null> {
  const encoded = encodeURIComponent(slug);
  const isWp = BLOG_API_BASE.includes("/wp-json/wp/v2/posts");
  const endpoints = isWp
    ? [`${BLOG_API_BASE}${BLOG_API_BASE.includes("?") ? "&" : "?"}slug=${encoded}&_embed`]
    : [`${BLOG_API_BASE}/GetBlog/${encoded}`];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, { cache: "no-store" });
      if (!res.ok) continue;
      const data = await res.json();
      if (Array.isArray(data)) {
        const match = data.find((item) => {
          const raw = item as UnknownRecord;
          return readString(raw.slug) === slug;
        });
        return match ? normalizeBlog(match, 0) : null;
      }
      return normalizeBlog(data, 0);
    } catch {
      continue;
    }
  }

  const blogs = await getAllBlogs();
  return blogs.find((blog) => blog.slug === slug) || null;
}
