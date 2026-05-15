import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Clock3,
  MapPin,
  Monitor,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Services - HRT, Functional Medicine, Peptides, Weight Optimization & Remedy San Diego",
  description:
    "Explore Scott Precision Health services in San Diego: HRT, functional medicine, peptides, weight optimization, biomarker optimization, lab access, lab review, and in-person Remedy care.",
};

const GENERAL_BOOKING_URL =
  "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?r=69fd1d6b6134cb51ba771a5e";

const REMEDY_LOCATION = {
  name: "Remedy Holistic Pharmacy",
  street: "320 W Cedar St, Suite 103",
  city: "San Diego, CA 92101",
  full: "320 W Cedar St, Suite 103, San Diego, CA, 92101, US",
};

const telemedicinePrograms = [
  {
    title: "HRT Program",
    price: "$399",
    detail: "Initial visit",
    description:
      "Bio-identical hormone replacement therapy evaluation and ongoing optimization for eligible men and women.",
    badges: ["Telemedicine", "Hormone evaluation"],
  },
  {
    title: "Functional Medicine",
    price: "$289",
    detail: "Initial visit",
    description:
      "A comprehensive root-cause visit focused on nutrition, metabolic health, hormones, digestion, lifestyle, and targeted lab strategy.",
    badges: ["Telemedicine", "Root-cause strategy"],
  },
  {
    title: "Peptide Programs",
    price: "$350",
    detail: "Initial visit",
    description:
      "Personalized peptide therapy evaluation and monitoring when clinically appropriate.",
    badges: ["Telemedicine", "Clinical evaluation"],
  },
  {
    title: "Weight Optimization",
    price: "Book",
    detail: "Pricing confirmed at booking",
    description:
      "A personalized program focused on metabolic health, body composition, lab-guided strategy, nutrition, lifestyle, and medication options when appropriate.",
    badges: ["Telemedicine", "Metabolic health"],
  },
  {
    title: "Biomarker Optimization",
    price: "Book",
    detail: "Pricing confirmed at booking",
    description:
      "Lab-guided optimization for hormones, metabolic markers, inflammation, nutrient status, recovery, and performance-focused health goals.",
    badges: ["Telemedicine", "Lab-guided"],
  },
];

const remedyServices = [
  {
    title: "The Shot Studio",
    practiceTitle: "The Shot Studio at Remedy",
    schedule: "Saturday 10:30 AM - 2:30 PM",
    duration: "4 hours",
    price: "Menu pricing varies",
    format: "In-person",
    description:
      "Targeted wellness injections delivered in a quick, in-person visit to support energy, performance, and overall cellular optimization.",
    badges: ["In-person at Remedy", "Saturday"],
    href: "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=69f3d03c99565d508284d4b8",
    cta: "Book Shot Studio",
    icon: Syringe,
    menuHref: "/services/shot-studio",
  },
  {
    title: "Bio Identical Hormone Replacement Therapy",
    practiceTitle: "BHRT New Patient Visit",
    schedule: "Tuesday 9:30 AM - 5:00 PM",
    duration: "1 hour",
    price: "US$299.00",
    format: "In-person",
    description:
      "Comprehensive new patient visit focused on root-cause evaluation and personalized care to initiate bio-identical hormone optimization programs for men and women.",
    badges: ["In-person at Remedy", "Tuesday"],
    href: "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=6a078e3711298c3e496d6306",
    cta: "Book at Remedy",
    icon: Stethoscope,
  },
  {
    title: "Weight Optimization Program",
    practiceTitle: "Weight Optimization New Patient Visit",
    schedule: "Tuesday 9:30 AM - 5:00 PM",
    duration: "1 hour",
    price: "US$299.00",
    format: "In-person",
    description:
      "Comprehensive new patient visit focused on root-cause evaluation and personalized care for weight optimization.",
    badges: ["In-person at Remedy", "Tuesday"],
    href: "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=6a078ef411298c3e496d6752&step=date",
    cta: "Book at Remedy",
    icon: Sparkles,
  },
  {
    title: "Peptide Program",
    practiceTitle: "Peptide Program New Patient Visit",
    schedule: "Tuesday 9:30 AM - 5:00 PM",
    duration: "1 hour",
    price: "US$299.00",
    format: "In-person",
    description:
      "Comprehensive new patient visit focused on preventative medicine and personalized care to establish candidacy and treatment with popular longevity peptides.",
    badges: ["In-person at Remedy", "Tuesday"],
    href: "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=6a078fc39032ead57b1dea26&step=date",
    cta: "Book at Remedy",
    icon: Sparkles,
  },
  {
    title: "Precision Functional Medicine",
    practiceTitle: "Precision Functional Medicine, New Patient",
    schedule: "Tuesday 9:30 AM - 5:00 PM",
    duration: "1 hour",
    price: "US$299.00",
    format: "In-person, Online/Video chat",
    description:
      "A deep-dive functional medicine intake with root-cause analysis for gut health, metabolism, longevity, and more.",
    note: "Be sure to complete your Functional Medicine Intake Form before your appointment.",
    badges: ["In-person at Remedy", "Online/Video available", "Tuesday"],
    href: "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=69f66b10ff1bd2ff3a426302&step=date",
    cta: "Book at Remedy",
    icon: Monitor,
  },
  {
    title: "Rapid Wellness Consult",
    practiceTitle: "Rapid Wellness Consult",
    schedule: "Tuesday 9:30 AM - 5:00 PM",
    duration: "15 minutes",
    price: "US$69.00",
    format: "In-person",
    description:
      "Expert direction for acute needs, supplement audits, or practical action steps for labs received from other providers.",
    badges: ["In-person at Remedy", "Tuesday"],
    href: "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=69f669fdff1bd2ff3a424e4a&step=date",
    cta: "Book at Remedy",
    icon: Clock3,
  },
  {
    title: "Medication Optimization",
    practiceTitle: "Medication Optimization",
    schedule: "Tuesday 9:30 AM - 5:00 PM",
    duration: "30 minutes",
    price: "US$149.00",
    format: "In-person, Online/Video chat",
    description:
      "A comprehensive review to identify drug-nutrient depletions and help ensure medications, supplements, and herbs are working together safely and appropriately.",
    note: "Be sure to fill out the medication and supplement intake form prior to your visit.",
    badges: ["In-person at Remedy", "Online/Video available", "Tuesday"],
    href: "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=69f66a8cff1bd2ff3a42583e&step=date",
    cta: "Book at Remedy",
    icon: Stethoscope,
  },
  {
    title: "Lab Access Consult",
    practiceTitle: "Lab Access Consult",
    schedule: "Tuesday 9:30 AM - 5:00 PM",
    duration: "30 minutes",
    price: "US$59.00",
    format: "In-person, Online/Video chat",
    description:
      "Direct access to professional-grade diagnostics with consultation and clinical oversight for lab orders and professional in-house blood draw where applicable.",
    additional:
      "Clinical Order & Blood Draw. Skip the traditional hurdles. Order the tests you know you want. Includes consultation, clinical oversight for lab orders, and a professional in-house draw where applicable.",
    popularPanels:
      "Popular panels: NAD+ Profiles, Vitamin D, Micronutrients, Microbiome Analysis, Food Sensitivities, and Cardiometabolic Markers.",
    badges: ["In-person at Remedy", "Online/Video available", "Tuesday"],
    href: "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=69f66986ff1bd2ff3a4245fc&step=date",
    cta: "Book at Remedy",
    icon: Stethoscope,
  },
  {
    title: "Lab Review & Optimization",
    practiceTitle: "Lab Review & Optimization, In-person, Initial Visit",
    schedule: "Tuesday 9:30 AM - 5:00 PM",
    duration: "45 minutes",
    price: "US$259.00",
    format: "In-person",
    description:
      "Detailed review of laboratory results from a previous lab order with personalized interpretation and targeted recommendations for optimization, including lifestyle, supplementation, and treatment options when appropriate.",
    badges: ["In-person at Remedy", "Tuesday"],
    href: "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=69fd222e5072ea0efb27bbc1&step=date",
    cta: "Book at Remedy",
    icon: Stethoscope,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          role="img"
          aria-label="Modern clinical care environment"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Precision Health <span className="text-gradient">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Evidence-based, data-driven care with clear booking options for
            telemedicine and in-person care at Remedy.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Some services are available virtually, while select clinical visits
            and the Saturday Shot Studio are offered in person at Remedy in San
            Diego.
          </p>
        </div>
      </section>

      <section className="relative py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Virtual Care
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Telemedicine Programs
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                Structured programs for patients who want personalized,
                clinically guided care with convenient booking access.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {telemedicinePrograms.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-wrap gap-2">
                  {service.badges.map((badge) => (
                    <Badge key={badge} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-3xl font-bold text-foreground">
                    {service.price}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.detail}
                  </p>
                </div>
                <Button asChild className="mt-6 w-full font-semibold">
                  <a
                    href={GENERAL_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book telemedicine for ${service.title}`}
                  >
                    Book Telemedicine
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-border bg-card/50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                In-Person Care
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Scott Precision Health x Remedy
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                In-person care at Remedy in San Diego, with Saturday Shot
                Studio availability and Tuesday clinical appointments.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="default" className="px-4 py-1.5">
                  Shot Studio: Saturdays, 10:30 AM - 2:30 PM
                </Badge>
                <Badge variant="secondary" className="px-4 py-1.5">
                  Clinical appointments: Tuesdays, 9:30 AM - 5:00 PM
                </Badge>
              </div>
            </div>

            <aside className="rounded-2xl border border-primary/20 bg-background/60 p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    {REMEDY_LOCATION.name}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {REMEDY_LOCATION.street}
                    <br />
                    {REMEDY_LOCATION.city}
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {remedyServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold leading-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {service.practiceTitle}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  {service.additional && (
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {service.additional}
                    </p>
                  )}

                  {service.popularPanels && (
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {service.popularPanels}
                    </p>
                  )}

                  {service.note && (
                    <p className="mt-4 rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm leading-6 text-muted-foreground">
                      {service.note}
                    </p>
                  )}

                  <dl className="mt-6 grid gap-4 border-t border-border pt-5 text-sm">
                    <div>
                      <dt className="font-semibold text-foreground">
                        Schedule
                      </dt>
                      <dd className="mt-1 text-muted-foreground">
                        {service.schedule}
                      </dd>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <dt className="font-semibold text-foreground">
                          Duration
                        </dt>
                        <dd className="mt-1 text-muted-foreground">
                          {service.duration}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-foreground">
                          Price
                        </dt>
                        <dd className="mt-1 text-muted-foreground">
                          {service.price}
                        </dd>
                      </div>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Format</dt>
                      <dd className="mt-1 text-muted-foreground">
                        {service.format}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">
                        Location
                      </dt>
                      <dd className="mt-1 text-muted-foreground">
                        {REMEDY_LOCATION.name}
                        <br />
                        {REMEDY_LOCATION.full}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-auto flex flex-col gap-3 pt-6">
                    <Button asChild className="w-full font-semibold">
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${service.cta}: ${service.title}`}
                      >
                        {service.cta}
                      </a>
                    </Button>
                    {service.menuHref && (
                      <Button asChild variant="outline" className="w-full">
                        <Link
                          href={service.menuHref}
                          className="inline-flex items-center gap-2"
                        >
                          View Injection Menu
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a discovery call to discuss your goals and choose the most
            appropriate next step.
          </p>
          <div className="mt-8">
            <Button asChild size="xl" className="font-semibold">
              <a
                href={GENERAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="Schedule a discovery call with Scott Precision Health"
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
