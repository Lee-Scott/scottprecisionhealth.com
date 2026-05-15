import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-4 text-center">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Activity className="h-10 w-10" />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-foreground md:text-8xl">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="mx-auto mb-8 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <Button asChild size="lg" className="font-semibold">
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
