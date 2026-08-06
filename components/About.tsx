"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative border-b border-line py-24 sm:py-32">
      <div className="container-wrap">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-clamp-h2 font-medium leading-tight text-ink text-balance"
        >
          I believe in a{" "}
          <span className="text-muted">user-centered</span> design approach —
          every project I touch is built around the people who&apos;ll
          actually use it.
        </motion.p>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-[280px_1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="eyebrow">This is me</span>
            <div className="relative mt-4 aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-3xl border border-line bg-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-mint/20" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-6xl font-semibold text-ink/15">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5 text-base leading-relaxed text-muted sm:text-lg"
          >
            <p>
              Hi, I&apos;m {profile.name} — a frontend developer dedicated to
              turning ideas into interfaces people enjoy using. I specialize
              in seamless, intuitive experiences that feel considered down to
              the last transition.
            </p>
            <p>
              My approach centers on building scalable, high-performing
              products that serve both user needs and business goals. By
              prioritizing performance, accessibility, and responsiveness, I
              aim to ship work that engages people and moves the needle.
            </p>
            <div className="mt-2 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-xs uppercase tracking-wide text-muted">
              <span>
                Based in <span className="text-ink">{profile.location}</span>
              </span>
              <span>
                Email <span className="text-ink">{profile.email}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
