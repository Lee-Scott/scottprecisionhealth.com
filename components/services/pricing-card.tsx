"use client";

import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ZtZF15rZZIXamTrTGhVbEftUmPG_QiKc4RjEvcBAJyTNll00bOGKIUKrgfaxSDDhbThEqZksF";

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
  index?: number;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  badge,
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group ${
        popular ? "lg:-mt-4 lg:mb-4" : ""
      }`}
    >
      <div
        className={`relative rounded-2xl border p-6 md:p-8 h-full flex flex-col transition-all duration-300 ${
          popular
            ? "border-primary/50 bg-card shadow-xl shadow-primary/10 hover:shadow-primary/20"
            : "border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        }`}
      >
        {/* Popular Badge */}
        {popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge variant="default" className="px-4 py-1 text-xs font-semibold">
              Most Popular
            </Badge>
          </div>
        )}

        {/* Badge */}
        {badge && !popular && (
          <Badge variant="secondary" className="mb-4 w-fit text-xs">
            {badge}
          </Badge>
        )}

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-bold text-foreground">
              ${price}
            </span>
            <span className="text-sm text-muted-foreground">/ initial visit</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div
                  className={`rounded-full p-0.5 ${
                    popular ? "bg-primary/20" : "bg-primary/10"
                  }`}
                >
                  <Check
                    className={`h-3.5 w-3.5 ${
                      popular ? "text-primary" : "text-primary"
                    }`}
                  />
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          asChild
          variant={popular ? "default" : "outline"}
          size="lg"
          className="w-full font-semibold"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Book Now
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
