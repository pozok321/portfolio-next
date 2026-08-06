"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <div className="container-wrap relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Got something in mind?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 max-w-2xl font-display text-clamp-h2 font-medium leading-tight text-ink text-balance"
        >
          Let&apos;s build something worth shipping.
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-mono text-sm uppercase tracking-wider text-bg transition-transform hover:-translate-y-0.5"
        >
          {profile.email}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>
      </div>
    </section>
  );
}
