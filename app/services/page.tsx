import type { Metadata } from "next";
import PricingCard from "@/components/services/pricing-card";
import { Button } from "@/components/ui/button";
import { Calendar, Stethoscope, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — HRT, Functional Medicine & Peptide Therapy San Diego",
  description:
    "Explore our precision health services: HRT programs ($399), functional medicine ($289), peptide therapy ($350), and in-house lab testing ($59). Evidence-based care in San Diego.",
};

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ZtZF15rZZIXamTrTGhVbEftUmPG_QiKc4RjEvcBAJyTNll00bOGKIUKrgfaxSDDhbThEqZksF";

const services = [
  {
    title: "HRT Program",
    price: 399,
    description:
      "Hormone replacement therapy for men and women. Comprehensive initial consult, baseline labs, and follow-up review to optimize your hormonal health.",
    features: [
      "Initial consultation & health history review",
      "Comprehensive hormone panel (blood draw)",
      "Personalized treatment protocol",
      "30-day follow-up & lab review",
      "Ongoing protocol adjustments",
    ],
    popular: true,
  },
  {
    title: "Functional Medicine",
    price: 289,
    description:
      "60-minute deep dive into root causes. We explore gut health, metabolic function, hormonal balance, and environmental factors affecting your health.",
    features: [
      "60-minute comprehensive consultation",
      "Advanced diagnostic assessment",
      "Gut, metabolic & hormone analysis",
      "Personalized nutrition & lifestyle plan",
      "Targeted supplementation protocol",
    ],
    badge: "Deep Dive",
  },
  {
    title: "Peptide Programs",
    price: 350,
    description:
      "Advanced peptide therapy for tissue repair, cognitive enhancement, immune modulation, and metabolic optimization. Custom protocols based on your biomarkers.",
    features: [
      "Initial peptide consultation & assessment",
      "Biomarker & peptide panel analysis",
      "Custom peptide protocol design",
      "Administration training & support",
      "Follow-up & progress monitoring",
    ],
    badge: "Regenerative",
  },
  {
    title: "In-House Testing",
    price: 59,
    description:
      "Blood draws available at Remedy or convenient at-home testing kits for stool, urine, and saliva analysis. Uncover what standard panels miss.",
    features: [
      "Blood draw at Remedy location",
      "At-home stool analysis kit",
      "Urine & saliva testing options",
      "Comprehensive lab interpretation",
      "Results reviewed with your provider",
    ],
    badge: "Diagnostics",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Precision Health{" "}
            <span className="text-gradient">Services</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Evidence-based protocols, transparent pricing, and a systematic
            approach to optimizing your health from the inside out.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <PricingCard
                key={service.title}
                title={service.title}
                price={service.price}
                description={service.description}
                features={service.features}
                popular={service.popular}
                badge={service.badge}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-16 md:py-24 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Additional Services
            </h2>
            <p className="mt-3 text-muted-foreground">
              Quick access to follow-up visits and telemedicine appointments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Calendar className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Follow-Up Visit
              </h3>
              <p className="text-sm text-muted-foreground">
                Schedule your follow-up appointment to review progress and adjust your protocol.
              </p>
            </a>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Monitor className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Telemedicine
              </h3>
              <p className="text-sm text-muted-foreground">
                Virtual consultations available for follow-ups and lab reviews from the comfort of home.
              </p>
            </a>

            <a
              href="https://yourslongevitylab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Stethoscope className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Lab Work
              </h3>
              <p className="text-sm text-muted-foreground">
                Visit Yours Longevity Lab for comprehensive lab testing and blood analysis.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Book a free 15-minute discovery call to discuss your goals and find
            the right program for you.
          </p>
          <div className="mt-8">
            <Button asChild size="xl" className="font-semibold">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Discovery Call
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
