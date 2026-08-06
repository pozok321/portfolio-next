"use client";

import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="container-wrap flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold tracking-widest text-ink">
          {profile.name.toUpperCase()}
          <span className="text-accent">.</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-ink"
          >
            <Instagram size={18} />
          </a>
        </div>

        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-ink"
        >
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>

      <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-wide text-muted/70">
        Designed &amp; built by {profile.name} — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
