import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        brand: "var(--color-brand)",
        "brand-soft": "var(--color-brand-soft)",
        bio: "var(--subject-bio)",
        quim: "var(--subject-quim)",
        hist: "var(--subject-hist)",
        filo: "var(--subject-filo)",
        lit: "var(--subject-lit)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "14px" },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.03)",
        "card-hover": "0 4px 14px rgba(16,24,40,0.06)",
        lift: "0 10px 40px rgba(16,24,40,0.10)",
      },
      maxWidth: { content: "1120px" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both" },
    },
  },
  plugins: [],
};
export default config;
