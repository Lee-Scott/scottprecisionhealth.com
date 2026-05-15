import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-8">
          <Activity className="h-10 w-10" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <Button asChild size="lg" className="font-semibold">
          <Link
            href="/"
            className="inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
