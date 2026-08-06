"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircleDot } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { profile, stats } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden border-b border-line pt-28"
    >
      <div className="absolute inset-0">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-mint/10 blur-[140px]" />
      </div>

      <div className="container-wrap relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 backdrop-blur-sm"
          >
            <CircleDot size={12} className="text-mint" />
            <span className="eyebrow">Available for full-time opportunities</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-clamp-hero font-semibold leading-[0.98] tracking-tight text-ink text-balance"
          >
            Frontend
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_#EDEDF2]">
              Developer
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Hi, I&apos;m {profile.name}. {profile.tagline}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-bg transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              Let&apos;s talk
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8 sm:mt-28"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
