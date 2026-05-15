"use client";

import { motion } from "framer-motion";
import { Stethoscope, Code2, ArrowRight } from "lucide-react";

export default function SynergySection() {
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
            Where Medicine Meets Engineering
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The Scott Precision Health difference is the convergence of clinical
            expertise and data-driven systems thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-right"
          >
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Stethoscope className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">
              Clinical Excellence
            </h3>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground md:ml-auto">
              Dr. Jordan Scott brings years of naturopathic training, advanced
              diagnostic interpretation, and expertise in peptide therapy and
              hormone optimization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Code2 className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">
              Data-Driven Systems
            </h3>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground md:mr-auto">
              Lee Scott&apos;s software engineering background ensures every
              protocol is built on clean data, systematic tracking, and
              continuous optimization.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto inline-block max-w-2xl rounded-2xl border border-border bg-card p-8">
            <p className="text-lg font-medium leading-relaxed text-foreground">
              &ldquo;Better labs, better life.&rdquo;
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              This isn&apos;t just a tagline, it&apos;s the engineering
              principle behind everything we do. Measure precisely. Analyze
              rigorously. Optimize continuously.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
