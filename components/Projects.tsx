"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative border-b border-line py-24 sm:py-32">
      <div className="container-wrap">
        <div className="mb-14 flex items-end justify-between gap-6 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-clamp-h2 font-medium text-ink"
          >
            Selected projects
          </motion.h2>
          <span className="hidden font-mono text-xs uppercase tracking-wide text-muted sm:block">
            {projects.length} works
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => {
            const isExternal = project.link.startsWith("http");

            return (
            <motion.a
              key={project.slug}
              href={project.link}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div
                className="absolute inset-0 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.1]"
                style={{
                  backgroundImage:
                    "linear-gradient(#EDEDF2 1px, transparent 1px), linear-gradient(90deg, #EDEDF2 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between gap-16">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted">
                    _{project.index}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-bg/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
