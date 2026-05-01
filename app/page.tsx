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
    description: "Hormone optimization for men and women — comprehensive labs, personalized protocols, and ongoing monitoring.",
    price: "$399",
  },
  {
    icon: Heart,
    title: "Functional Medicine",
    description: "60-minute deep dive into root causes: gut health, metabolic function, and hormonal balance.",
    price: "$289",
  },
  {
    icon: Brain,
    title: "Peptide Therapy",
    description: "Advanced regenerative peptides for tissue repair, cognitive enhancement, and immune modulation.",
    price: "$350",
  },
  {
    icon: Microscope,
    title: "Advanced Lab Testing",
    description: "In-house blood analysis, stool, urine, and saliva testing — uncover what standard panels miss.",
    price: "$59+",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Services Preview */}
      <section className="relative py-24 md:py-32 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Evidence-based protocols designed to optimize every system in your body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="font-semibold">
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
