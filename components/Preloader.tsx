"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { profile } from "@/lib/data";

export default function Preloader() {
  const nameWrapRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finish = () => {
      document.body.style.overflow = "";
      setHidden(true);
      (window as Window & { __appLoaded?: boolean }).__appLoaded = true;
      window.dispatchEvent(new Event("app:loaded"));
    };

    if (prefersReduced) {
      finish();
      return;
    }

    document.body.style.overflow = "hidden";

    const letters = nameWrapRef.current?.querySelectorAll<HTMLElement>(
      ".pl-letter"
    );

    const safety = window.setTimeout(finish, 3400);

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        window.clearTimeout(safety);
        finish();
      },
    });

    tl.fromTo(
      letters ?? [],
      { opacity: 0, yPercent: 140 },
      { opacity: 1, yPercent: 0, duration: 0.7, stagger: 0.045 }
    ).to(
      letters ?? [],
      {
        opacity: 0,
        yPercent: -40,
        duration: 0.45,
        stagger: 0.03,
        ease: "power3.in",
      },
      "+=0.2"
    );

    return () => {
      tl.kill();
      window.clearTimeout(safety);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  const name = profile.name.toUpperCase();

  return (
    <div className="fixed inset-0 z-[100] bg-bg" aria-hidden="true">
      <div className="absolute inset-0 z-[4] flex items-center justify-center px-6">
        <div
          ref={nameWrapRef}
          className="flex overflow-hidden leading-none"
          style={{ height: "clamp(2.5rem, 9vw, 6rem)" }}
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="pl-letter inline-block font-display text-[clamp(2.5rem,9vw,6rem)] font-semibold leading-none text-ink"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}