import type { Metadata } from "next";
import FounderCard from "@/components/about/founder-card";
import SynergySection from "@/components/about/synergy-section";

export const metadata: Metadata = {
  title: "About — Dr. Jordan Scott ND & Lee Scott",
  description:
    "Meet the founders of Scott Precision Health. Dr. Jordan Scott ND brings naturopathic expertise in peptide therapy and hormone optimization. Lee Scott brings data-driven software engineering.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          role="img"
          aria-label="Medical professionals collaborating in a modern clinic"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Meet the{" "}
            <span className="text-gradient">Founders</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Two disciplines. One mission. Clinical naturopathic expertise meets
            data-driven engineering to deliver precision health that actually
            works.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          <FounderCard
            name="Dr. Jordan Scott, ND"
            title="Naturopathic Doctor"
            description={'Dr. Jordan Scott is a licensed naturopathic doctor based in San Diego, California, dedicated to results-driven care that goes beyond surface-level symptoms. With advanced training in peptide therapy, hormone optimization, and functional medicine, Dr. Scott specializes in identifying the root causes of chronic health issues.\n\nHis philosophy is simple: "Better labs, better life." By leveraging comprehensive diagnostic testing — including advanced hormone panels, gut microbiome analysis, and metabolic markers — he builds precision protocols that address each patient\'s unique biochemistry.\n\nDr. Scott\'s approach is rooted in evidence-based naturopathic medicine, combining the best of conventional diagnostics with targeted natural therapeutics. He believes that true health optimization requires looking at the whole picture: hormones, gut health, mitochondrial function, and beyond.'}
            imageUrl="/images/JordanScottHeadShot.png"
            index={0}
          />

          <FounderCard
            name="Lee Scott"
            title="Software Engineer & Wellness Enthusiast"
            description="Lee Scott is a software developer and the founder of Family First Software, a company dedicated to building technology that strengthens families. His background in systems architecture, data analysis, and user experience design brings a unique engineering perspective to the Scott Precision Health mission.\n\nA lifelong wellness enthusiast, Lee combines his passion for surfing the California coast with a deep interest in culinary arts and nutritional science. He believes that optimal health is a systems problem — one that requires clean data, rigorous analysis, and continuous iteration.\n\nLee's role at Scott Precision Health is to ensure that every protocol, every tracking system, and every patient interaction is backed by solid data infrastructure. He bridges the gap between clinical expertise and technological precision."
            imageUrl="/images/Lee.jpg"
            index={1}
          />
        </div>
      </section>

      <SynergySection />
    </>
  );
}
