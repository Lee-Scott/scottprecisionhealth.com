import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDir, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");

    // Parse frontmatter manually (simple approach)
    const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!frontmatterMatch) return null;

    const frontmatter: Record<string, string> = {};
    frontmatterMatch[1].split("\n").forEach((line) => {
      const [key, ...rest] = line.split(":");
      if (key && rest.length) {
        frontmatter[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
      }
    });

    return {
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || "",
      author: frontmatter.author || "Scott Precision Health",
      excerpt: frontmatter.excerpt || "",
      content: frontmatterMatch[2].trim(),
    };
  } catch {
    return null;
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  return posts;
}
