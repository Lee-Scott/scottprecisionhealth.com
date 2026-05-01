"use client";

import { motion } from "framer-motion";
import { Search, Target, Route, Activity } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Identify Root Causes",
    description:
      "We go beyond surface-level symptoms using advanced diagnostics — comprehensive hormone panels, gut microbiome analysis, and metabolic markers.",
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How Precision Health Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to optimizing human performance — from
            diagnosis through treatment and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
