import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - The Library",
  description:
    "Explore articles on precision medicine, longevity, hormone optimization, peptide therapy, and functional medicine from Scott Precision Health.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="Medical journal and research materials"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070&auto=format&fit=crop")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            The <span className="text-gradient">Library</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Insights on precision medicine, longevity, and the science of
            optimizing health from the inside out.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Calendar className="h-8 w-8" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">
                Coming Soon
              </h2>
              <p className="mx-auto max-w-md text-muted-foreground">
                We&apos;re building our library of articles on precision
                medicine, hormone optimization, and longevity. Check back soon
                for in-depth insights.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-2xl border border-border bg-card p-6 md:p-8"
                >
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Scott Precision Health
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-6">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary transition-colors hover:text-accent"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
