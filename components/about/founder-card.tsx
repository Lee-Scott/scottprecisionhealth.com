"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FounderCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  index?: number;
}

export default function FounderCard({
  name,
  title,
  description,
  imageUrl,
  index = 0,
}: FounderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center rounded-2xl border border-border bg-card p-6 md:p-10 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
        {/* Image */}
        <div className="md:col-span-2">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary tracking-wider uppercase">
              {title}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {name}
          </h3>
          <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            {description.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
