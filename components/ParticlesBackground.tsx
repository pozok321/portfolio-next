"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let mouse = { x: -9999, y: -9999 };
    let animationFrame = 0;

    const ACCENT = "124, 92, 255";
    const MINT = "51, 230, 184";

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const count = Math.min(90, Math.max(28, Math.round(area / 22000)));

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const linkDistance = 130;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dxm = p.x - mouse.x;
        const dym = p.y - mouse.y;
        const distMouse = Math.sqrt(dxm * dxm + dym * dym);
        if (distMouse < 140) {
          const force = (140 - distMouse) / 140;
          p.vx += (dxm / distMouse) * force * 0.015;
          p.vy += (dym / distMouse) * force * 0.015;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.6) {
          p.vx = (p.vx / speed) * 0.6;
          p.vy = (p.vy / speed) * 0.6;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${i % 3 === 0 ? MINT : ACCENT}, 0.55)`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            const opacity = (1 - dist / linkDistance) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${ACCENT}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => setup();

    setup();

    if (!prefersReduced) {
      animationFrame = requestAnimationFrame(draw);
    } else {
      draw();
      cancelAnimationFrame(animationFrame);
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
