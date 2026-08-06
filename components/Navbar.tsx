"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-wrap">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ${
            scrolled
              ? "border-line bg-bg/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#home"
            className="font-display text-sm font-semibold tracking-widest text-ink"
          >
            RP<span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  active === link.href
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-2"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${profile.email}`}
            className="group hidden items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-accent/50 hover:text-accent md:inline-flex"
          >
            Get in touch
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="container-wrap md:hidden"
          >
            <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-line bg-bg/95 p-3 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wider text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-accent px-4 py-3 text-center font-mono text-sm uppercase tracking-wider text-bg"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
