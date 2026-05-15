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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Where Medicine Meets Engineering
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The Scott Precision Health difference is the convergence of clinical
            expertise and data-driven systems thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Medical Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-right"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
              <Stethoscope className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Clinical Excellence
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto md:ml-auto">
              Dr. Jordan Scott brings years of naturopathic training, advanced
              diagnostic interpretation, and expertise in peptide therapy and
              hormone optimization.
            </p>
          </motion.div>

          {/* Center Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative flex items-center justify-center w-20 h-20 rounded-full border-2 border-primary/30 bg-card">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Engineering Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
              <Code2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Data-Driven Systems
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto md:mr-auto">
              Lee Scott&apos;s software engineering background ensures every
              protocol is built on clean data, systematic tracking, and
              continuous optimization.
            </p>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-2xl border border-border bg-card p-8 max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-medium leading-relaxed">
              &ldquo;Better labs, better life.&rdquo;
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              This isn&apos;t just a tagline — it&apos;s the engineering
              principle behind everything we do. Measure precisely. Analyze
              rigorously. Optimize continuously.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
