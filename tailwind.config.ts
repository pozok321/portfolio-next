import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B12",
        surface: "#131320",
        "surface-2": "#1B1B2B",
        line: "rgba(237,237,242,0.09)",
        ink: "#EDEDF2",
        muted: "#8B8B9E",
        accent: {
          DEFAULT: "#7C5CFF",
          soft: "#9B82FF",
          dim: "rgba(124,92,255,0.14)",
        },
        mint: {
          DEFAULT: "#33E6B8",
          dim: "rgba(51,230,184,0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      fontSize: {
        "clamp-hero": "clamp(2.75rem, 7vw, 6.5rem)",
        "clamp-h2": "clamp(2rem, 4.2vw, 3.25rem)",
      },
      maxWidth: {
        wrap: "1280px",
      },
      backgroundImage: {
        "grain": "url('/grain/noise.svg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};

export default config;
