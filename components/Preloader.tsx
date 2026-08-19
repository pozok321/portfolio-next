"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { profile } from "@/lib/data";

export default function Preloader() {
  const nameWrapRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
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
    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
    const counterObj = { value: 0 };

    // Safety net: never trap the user behind the loader for more than 6s.
    const safety = window.setTimeout(finish, 6000);

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        window.clearTimeout(safety);
        finish();
      },
    });

    tl.to(letters ?? [], {
      yPercent: 0,
      duration: 0.9,
      stagger: 0.045,
      ease: "power4.out",
    })
      .to(
        counterObj,
        {
          value: 100,
          duration: 1.05,
          ease: "power2.inOut",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = String(
                Math.round(counterObj.value)
              ).padStart(3, "0");
            }
          },
        },
        "<"
      )
      .to(
        letters ?? [],
        {
          yPercent: -120,
          duration: 0.55,
          stagger: 0.03,
          ease: "power3.in",
        },
        "+=0.2"
      )
      .to(
        panels,
        {
          yPercent: -100,
          duration: 0.9,
          stagger: 0.09,
          ease: "power4.inOut",
        },
        "-=0.25"
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
    <div className="fixed inset-0 z-[100]" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          ref={(el) => {
            panelRefs.current[i] = el;
          }}
          className={
            i === 0
              ? "absolute inset-0 z-[3] bg-bg"
              : i === 1
              ? "absolute inset-0 z-[2] bg-surface"
              : "absolute inset-0 z-[1] bg-surface-2"
          }
        />
      ))}

      <div className="absolute inset-0 z-[4] flex flex-col items-center justify-center px-6">
        <div
          ref={nameWrapRef}
          className="flex overflow-hidden leading-none"
          style={{ height: "clamp(2.5rem, 9vw, 6rem)" }}
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="pl-letter inline-block translate-y-[120%] font-display text-[clamp(2.5rem,9vw,6rem)] font-semibold leading-none text-ink"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          <span>Loading</span>
          <span ref={counterRef} className="text-ink">
            000
          </span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
}