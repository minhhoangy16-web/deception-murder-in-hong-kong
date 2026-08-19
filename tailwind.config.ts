import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        means: {
          light: "#38bdf8",
          DEFAULT: "#0284c7",
          dark: "#0c4a6e",
          bg: "#071b2d"
        },
        clue: {
          light: "#fb7185",
          DEFAULT: "#e11d48",
          dark: "#881337",
          bg: "#2b0d16"
        },
        scene: {
          light: "#34d399",
          DEFAULT: "#059669",
          dark: "#064e3b",
          bg: "#0b281d"
        },
        accent: {
          gold: "#f59e0b",
          crimson: "#ef4444",
          cyber: "#06b6d4"
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'badge-slam': 'badgeSlam 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.7))' },
          '50%': { opacity: '.6', filter: 'drop-shadow(0 0 4px rgba(239, 68, 68, 0.3))' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(15px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        badgeSlam: {
          '0%': { transform: 'scale(2.5) rotate(-15deg)', opacity: '0' },
          '70%': { transform: 'scale(0.9) rotate(3deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
