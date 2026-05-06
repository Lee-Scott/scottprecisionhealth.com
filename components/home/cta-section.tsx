"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ZtZF15rZZIXamTrTGhVbEftUmPG_QiKc4RjEvcBAJyTNll00bOGKIUKrgfaxSDDhbThEqZksF";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="Person practicing yoga or meditation for wellness"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Ready to Take Control of
            <br />
            <span className="text-gradient">Your Health?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your first consultation is the beginning of a data-driven
            partnership. No cookie-cutter protocols. Just precision medicine
            tailored to your biology, your goals, and your life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="xl" className="font-semibold w-full sm:w-auto">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book Your Consultation
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="font-semibold w-full sm:w-auto"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2"
              >
                Meet Our Team
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
