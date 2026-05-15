import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Clock3,
  MapPin,
  Monitor,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Scott Precision Health at Remedy | Scott Precision Health",
  description:
    "In-person care at Remedy in San Diego with Dr. Jordan Scott, ND, including functional medicine, lab review, hormone, peptide, weight loss, and The Shot Studio on Saturdays.",
};

const BOOKING_URL =
  "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?r=69fd1d6b6134cb51ba771a5e";

const remedyServices = [
  {
    title: "Functional Medicine Visits",
    description:
      "Evaluate root contributors to symptoms and build a focused optimization plan.",
  },
  {
    title: "Lab Panel Review & Optimization",
    description:
      "Review biomarkers and identify practical next steps to support better function.",
  },
  {
    title: "Peptide Programs",
    description:
      "Evaluate whether peptide protocols fit your goals, history, and clinical context.",
  },
  {
    title: "Hormone Replacement Therapy Programs",
    description:
      "Assess hormone patterns and support carefully monitored optimization programs.",
  },
  {
    title: "Weight Loss Programs",
    description:
      "Support metabolic health with structured planning, labs, and ongoing review.",
  },
  {
    title: "Medication & Supplement Optimization",
    description:
      "Review current regimens for fit, duplication, interactions, and goal alignment.",
  },
  {
    title: "Lab Access / Blood Draw Support",
    description:
      "Coordinate lab access and blood draw support for appropriate clinical panels.",
  },
  {
    title: "Wellness Injection Support",
    description:
      "Targeted injection support after screening for energy, recovery, and vitality goals.",
  },
];

const telemedicineServices = [
  "Functional Medicine Visits",
  "Lab Panel Review & Optimization",
  "Peptide Programs",
  "Hormone Replacement Therapy Programs",
  "Weight Loss Programs",
];

export default function RemedyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-0 top-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_380px] lg:px-8 lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Scott Precision Health x Remedy
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Scott Precision Health at{" "}
              <span className="text-gradient">Remedy</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              In-person naturopathic and functional medicine care at Remedy
              Holistic Pharmacy in San Diego, with scheduled patient visits on
              Tuesdays and The Shot Studio on Saturdays for targeted
              wellness injections.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-semibold">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold"
              >
                <Link href="/services/shot-studio">View The Shot Studio Menu</Link>
              </Button>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border bg-card p-6 md:p-8">
            <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Location
            </div>
            <div className="pt-6">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground">
                    Remedy Holistic Pharmacy
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    320 W Cedar Street, Suite 103
                    <br />
                    San Diego, California 92101
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              In-Person Care at Remedy
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Dr. Jordan Scott, ND sees scheduled patients in person at Remedy
              Holistic Pharmacy for focused naturopathic and functional medicine
              visits, lab review, medication and supplement optimization,
              hormone and peptide programs, weight loss support, and targeted
              wellness planning.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Remedy Schedule
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Tuesday care and The Shot Studio on Saturdays
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[1.75rem] border border-border bg-card p-8">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-2xl font-semibold text-foreground">
                Tuesday In-Person Care
              </h3>
              <p className="mt-2 text-lg font-semibold text-primary">
                9:00 AM - 6:00 PM
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Scheduled visits for broader Scott Precision Health services,
                including functional medicine, lab review, hormone, peptide,
                weight loss, and optimization visits.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-primary/20 bg-card p-8">
              <Sparkles className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-2xl font-semibold text-foreground">
                The Shot Studio on Saturdays
              </h3>
              <p className="mt-2 text-lg font-semibold text-primary">
                10:30 AM - 2:30 PM
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-full border border-border px-3 py-1">
                  4 hours
                </span>
                <span className="rounded-full border border-border px-3 py-1">
                  In-person
                </span>
                <span className="rounded-full border border-border px-3 py-1">
                  Walk-ins encouraged
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Targeted wellness injections delivered in a quick, in-person
                visit to support energy, performance, and overall cellular
                optimization.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Services Offered at Remedy
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Focused in-person support
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {remedyServices.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
              >
                <Stethoscope className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/50 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
          <article className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-3">
              <Monitor className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Scott Precision Health Telemedicine
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-foreground">
                  Virtual consultations available throughout California
                </h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Hours
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Monday: 10:00 AM - 4:00 PM
                  <br />
                  Tuesday: 9:00 AM - 6:00 PM
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Services Offered
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {telemedicineServices.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild className="font-semibold">
                <a
                  href="https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?r=69fd14a46915db39b9affc01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Telemedicine Visit
                </a>
              </Button>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-primary/20 bg-card p-8">
            <Clock3 className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-2xl font-semibold text-foreground">
              Book your appointment
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Book your appointment through Practice Better or speak with the
              Remedy team if you are visiting the pharmacy.
            </p>
            <div className="mt-8">
              <Button asChild className="w-full font-semibold">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="text-primary">
            <Link href="/services/shot-studio" className="inline-flex items-center gap-2">
                  View The Shot Studio menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
