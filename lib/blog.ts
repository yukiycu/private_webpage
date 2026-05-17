import fs from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

const blogDir = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return {
      data: {},
      content: source
    };
  }

  const data = match[1].split("\n").reduce<Record<string, string>>((acc, row) => {
    const [key, ...values] = row.split(":");

    if (!key || values.length === 0) {
      return acc;
    }

    acc[key.trim()] = values.join(":").trim().replace(/^["']|["']$/g, "");
    return acc;
  }, {});

  return {
    data,
    content: match[2].trim()
  };
}

export function getBlogSlugs() {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = [".md", ".mdx"]
    .map((ext) => path.join(blogDir, `${slug}${ext}`))
    .find((candidate) => fs.existsSync(candidate));

  if (!filePath) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontmatter(source);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    content
  };
}

export function getAllPosts() {
  return getBlogSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => b.date.localeCompare(a.date));
}
