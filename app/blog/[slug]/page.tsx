import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs } from "@/lib/mdx";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const runtime = "nodejs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Back Link */}
      <section className="relative pt-32 pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Library
            </Link>
          </Button>
        </div>
      </section>

      {/* Post Content */}
      <article className="relative pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n").map((line, i) => {
              // Headings
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-foreground mt-12 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              // Bold
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <p key={i} className="text-lg font-bold text-foreground my-4">
                    {line.replace(/\*\*/g, "")}
                  </p>
                );
              }
              // Blockquote
              if (line.startsWith("> ")) {
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-primary/50 pl-6 my-6 italic text-muted-foreground"
                  >
                    {line.replace("> ", "").replace(/"/g, "")}
                  </blockquote>
                );
              }
              // List items
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-muted-foreground ml-6 list-disc">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.match(/^\d+\. /)) {
                return (
                  <li key={i} className="text-muted-foreground ml-6 list-decimal">
                    {line.replace(/^\d+\. /, "")}
                  </li>
                );
              }
              // Horizontal rule
              if (line.startsWith("---")) {
                return <hr key={i} className="my-12 border-border" />;
              }
              // Empty line
              if (line.trim() === "") {
                return <div key={i} className="h-4" />;
              }
              // Regular paragraph
              return (
                <p key={i} className="text-muted-foreground leading-relaxed my-4">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}
