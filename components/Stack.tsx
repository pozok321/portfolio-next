"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="relative border-b border-line py-24 sm:py-32">
      <div className="container-wrap">
        <div className="mb-14 flex items-end justify-between gap-6 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-clamp-h2 font-medium text-ink"
          >
            My stack
          </motion.h2>
          <span className="hidden font-mono text-xs uppercase tracking-wide text-muted sm:block">
            Tools I reach for daily
          </span>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <p className="eyebrow mb-5">{group.category}</p>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-3 border-b border-line/70 pb-3 font-body text-sm text-ink transition-colors"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-colors group-hover:bg-mint" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
