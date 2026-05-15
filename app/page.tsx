import Hero from "@/components/home/hero";
import Philosophy from "@/components/home/philosophy";
import CTASection from "@/components/home/cta-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Heart, Brain, Microscope } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "HRT Program",
    description:
      "Hormone optimization for men and women, comprehensive labs, personalized protocols, and ongoing monitoring.",
    price: "$399",
  },
  {
    icon: Heart,
    title: "Functional Medicine",
    description:
      "60-minute deep dive into root causes: gut health, metabolic function, and hormonal balance.",
    price: "$289",
  },
  {
    icon: Brain,
    title: "Peptide Therapy",
    description:
      "Advanced regenerative peptides for tissue repair, cognitive enhancement, and immune modulation.",
    price: "$350",
  },
  {
    icon: Microscope,
    title: "Advanced Lab Testing",
    description:
      "In-house blood analysis, stool, urine, and saliva testing, uncover what standard panels miss.",
    price: "$59+",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative bg-card/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Evidence-based protocols designed to optimize every system in your
              body.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <Link href="/services" className="inline-flex items-center gap-2">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Philosophy />
      <CTASection />
    </>
  );
}
