"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-b border-line py-24 sm:py-32"
    >
      <div className="container-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 font-display text-clamp-h2 font-medium text-ink sm:mb-20"
        >
          My experience
        </motion.h2>

        <div className="relative border-l border-line pl-8 sm:pl-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative grid gap-2 pb-14 last:pb-0 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent sm:-left-[57px]" />
              <p className="font-mono text-xs uppercase tracking-wide text-muted">
                {job.period}
              </p>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {job.role}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-accent">
                  {job.company}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
