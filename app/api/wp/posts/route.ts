import { NextRequest, NextResponse } from "next/server";

const DEFAULT_WORDPRESS_API_BASE =
  "https://darkred-wolverine-323829.hostingersite.com/wp-json/wp/v2";

const getWordpressApiBase = () =>
  (process.env.WORDPRESS_API_BASE || DEFAULT_WORDPRESS_API_BASE).replace(/\/+$/, "");

const getWordpressAuthHeader = () => {
  const username = process.env.WORDPRESS_USERNAME?.trim();
  const appPassword = process.env.WORDPRESS_APP_PASSWORD?.trim();
  if (!username || !appPassword) return null;
  const encoded = Buffer.from(`${username}:${appPassword}`).toString("base64");
  return `Basic ${encoded}`;
};

const normalizeStatus = (status: string) => {
  const normalized = status.trim().toLowerCase();
  if (normalized === "draft") return "draft";
  if (normalized === "private") return "private";
  return "publish";
};

const normalizeTagNames = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item).trim())
      .filter(Boolean);
  }
  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

async function wpFetch(path: string, init?: RequestInit) {
  const base = getWordpressApiBase();
  const authHeader = getWordpressAuthHeader();
  const headers = new Headers(init?.headers);
  if (authHeader) headers.set("Authorization", authHeader);
  headers.set("Content-Type", "application/json");
  return fetch(`${base}${path}`, {
    ...init,
    headers,
    cache: "no-store",
  });
}

async function resolveTagIdByName(name: string): Promise<number | null> {
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  if (!slug) return null;

  const searchRes = await wpFetch(`/tags?search=${encodeURIComponent(name)}&per_page=100`);
  if (!searchRes.ok) return null;

  const candidates = (await searchRes.json()) as Array<{
    id?: unknown;
    name?: unknown;
    slug?: unknown;
  }>;
  const found = candidates.find((tag) => {
    const tagName = typeof tag.name === "string" ? tag.name.trim().toLowerCase() : "";
    const tagSlug = typeof tag.slug === "string" ? tag.slug.trim().toLowerCase() : "";
    return tagName === name.toLowerCase() || tagSlug === slug;
  });
  if (typeof found?.id === "number") return found.id;

  const createRes = await wpFetch("/tags", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  if (createRes.ok) {
    const created = (await createRes.json()) as { id?: unknown };
    return typeof created.id === "number" ? created.id : null;
  }

  const errorBody = await createRes.json().catch(() => null);
  const termId =
    errorBody && typeof errorBody === "object" && "data" in errorBody
      ? ((errorBody.data as { term_id?: unknown })?.term_id ?? null)
      : null;
  return typeof termId === "number" ? termId : null;
}

async function resolveTagIds(tagNames: string[]) {
  const ids = await Promise.all(tagNames.map((name) => resolveTagIdByName(name)));
  return ids.filter((id): id is number => typeof id === "number");
}

type IncomingPostPayload = {
  title?: string;
  slug?: string;
  content?: string;
  status?: string;
  excerpt?: string;
  metaDescription?: string;
  tags?: string[] | string;
};

export async function GET() {
  const res = await fetch(`${getWordpressApiBase()}/posts?_embed=1&per_page=100`, {
    cache: "no-store",
  });
  const text = await res.text();
  return new NextResponse(text, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: NextRequest) {
  const authHeader = getWordpressAuthHeader();
  if (!authHeader) {
    return NextResponse.json(
      { error: "Missing WordPress credentials. Set WORDPRESS_USERNAME and WORDPRESS_APP_PASSWORD." },
      { status: 500 }
    );
  }

  const body = (await request.json()) as IncomingPostPayload;
  const title = (body.title || "").trim();
  const slug = (body.slug || "").trim();
  const content = (body.content || "").trim();
  const excerpt = (body.excerpt || body.metaDescription || "").trim();
  const tags = normalizeTagNames(body.tags);

  if (!title || !content) {
    return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
  }

  const tagIds = await resolveTagIds(tags);
  const wpPayload = {
    title,
    slug: slug || undefined,
    content,
    excerpt: excerpt || undefined,
    status: normalizeStatus(body.status || "publish"),
    tags: tagIds.length ? tagIds : undefined,
  };

  const res = await wpFetch("/posts", {
    method: "POST",
    body: JSON.stringify(wpPayload),
  });

  const text = await res.text();
  return new NextResponse(text, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
