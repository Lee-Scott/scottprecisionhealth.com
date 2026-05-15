import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2, MapPin, Syringe } from "lucide-react";

export const metadata: Metadata = {
  title: "The Shot Studio | Scott Precision Health",
  description:
    "Targeted wellness injections at Remedy in San Diego to support energy, performance, recovery, immune resilience, and cellular optimization.",
};

const BOOKING_URL =
  "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?s=69f3d03c99565d508284d4b8&step=date";

const menuSections = [
  {
    title: "Energy Protocols",
    shots: [
      {
        name: "Essential Energy",
        price: "$25",
        description: "B12 2,000 mcg to support focus and overall vitality.",
      },
      {
        name: "Energy Plus",
        price: "$45",
        description:
          "High-dose B12 4,000 mcg for recovery and peak performance support.",
      },
    ],
  },
  {
    title: "Metabolic Activation",
    shots: [
      {
        name: "Metabolic Boost",
        price: "$50",
        description:
          "MIC + B12 to support metabolism and energy production.",
      },
      {
        name: "Metabolic Detox",
        price: "$55",
        description:
          "MIC + glutathione to support metabolic function and cellular detoxification pathways.",
      },
    ],
  },
  {
    title: "Recovery & Immune Defense",
    shots: [
      {
        name: "Recovery Boost",
        price: "$55",
        description:
          "B12 + glutathione to support oxidative stress balance and physical recovery.",
      },
      {
        name: "Immune Elite",
        price: "$65",
        description:
          "B12 + vitamin C + glutathione to support immune resilience and cellular defense.",
      },
    ],
  },
  {
    title: "Cellular Vitality",
    shots: [
      {
        name: "NAD+ Reset: 50 mg",
        price: "$55",
        description: "Premium cellular optimization support.",
      },
      {
        name: "NAD+ Performance: 100 mg",
        price: "$85",
        description: "Premium cellular optimization support.",
      },
      {
        name: "NAD+ Intensive: 150 mg",
        price: "$115",
        description: "Premium cellular optimization support.",
      },
      {
        name: "Glow Elite",
        price: "$95",
        description:
          "NAD+ + glutathione + vitamin C to support systemic repair, visible radiance, skin, cells, and immune health.",
      },
    ],
  },
];

export default function ShotStudioPage() {
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
              The <span className="text-gradient">Shot Studio</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Targeted wellness injections delivered in a quick, in-person
              visit to support energy, performance, recovery, immune
              resilience, and cellular optimization.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-semibold">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book The Shot Studio Visit
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold"
              >
                <Link href="/services/scott-precision-health-at-remedy">
                  Scott Precision Health x Remedy
                </Link>
              </Button>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border bg-card p-6 md:p-8">
            <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Schedule Detail
            </div>
            <div className="pt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold text-foreground">
                    The Shot Studio on Saturdays
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Walk-ins encouraged
                  </p>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Syringe className="h-6 w-6" />
                </div>
              </div>
              <dl className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <dt className="font-semibold text-foreground">Hours</dt>
                    <dd>10:30 AM - 2:30 PM</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <dt className="font-semibold text-foreground">Location</dt>
                    <dd>
                      320 W Cedar Street, Suite 103
                      <br />
                      San Diego, California 92101
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-card/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                The Shot Studio
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">
                Wellness Shot Injection Menu
              </h2>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/10 px-5 py-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Starting at $25</p>
              <p>Clinical screening required before injection therapy.</p>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {menuSections.map((section) => (
              <section key={section.title}>
                <h3 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h3>
                <div className="mt-4 grid gap-5 lg:grid-cols-2">
                  {section.shots.map((shot) => (
                    <article
                      key={shot.name}
                      className="rounded-[1.5rem] border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground">
                            {shot.name}
                          </h4>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                            {shot.description}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-3">
                          <span className="text-xl font-semibold text-primary">
                            {shot.price}
                          </span>
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
          <article className="rounded-[2rem] border border-primary/20 bg-card p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Booking
            </p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">
                Visit The Shot Studio on Saturdays at Remedy
              </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
              Book ahead through Practice Better or stop in during The Shot
              Studio on Saturdays. Walk-ins are encouraged.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="font-semibold">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book The Shot Studio Visit
                </a>
              </Button>
              <Button asChild variant="ghost" className="text-primary">
                <Link
                  href="/services/scott-precision-health-at-remedy"
                  className="inline-flex items-center gap-2"
                >
                  View Remedy services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-border bg-card p-8">
            <p className="text-sm leading-7 text-muted-foreground">
              Injection therapies are provided after clinical screening and may
              not be appropriate for every individual. Information on this page
              is educational and is not a substitute for medical advice.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
