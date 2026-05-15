"use client";

import { motion } from "framer-motion";
import { Search, Target, Route, Activity } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Identify Root Causes",
    description:
      "We go beyond surface-level symptoms using advanced diagnostics, comprehensive hormone panels, gut microbiome analysis, and metabolic markers.",
  },
  {
    icon: Target,
    title: "Remove the Noise",
    description:
      "Filter out what doesn't matter. Our data-driven approach isolates the signal from the noise, giving you clarity on what's actually driving your health.",
  },
  {
    icon: Route,
    title: "Build a Clear Plan",
    description:
      "A personalized, evidence-based protocol combining nutrition, lifestyle, targeted supplementation, and advanced therapies like peptides and HRT.",
  },
  {
    icon: Activity,
    title: "Track & Optimize",
    description:
      "Continuous monitoring with follow-up labs and symptom tracking ensures your protocol evolves with you. Precision is a process, not a destination.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            How Precision Health Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A systematic approach to optimizing human performance, from
            diagnosis through treatment and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
