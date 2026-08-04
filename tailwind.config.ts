import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B1F5E",
          50: "#EEF1FA",
          100: "#DDE3F5",
          200: "#B4C0E8",
          300: "#8B9DDB",
          400: "#4C63BC",
          500: "#0B1F5E",
          600: "#0A1C55",
          700: "#08174A",
          800: "#06123B",
          900: "#040D2C",
        },
        accent: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          glow: "rgba(37,99,235,.15)",
        },
        background: "#FFFFFF",
        surface: "#F8FAFC",
        border: "#E5E7EB",
        text: {
          DEFAULT: "#0F172A",
          sub: "#475569",
        },
        success: "#22C55E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.06)",
        card: "0 8px 30px -8px rgba(11, 31, 94, 0.12)",
        "card-hover": "0 20px 50px -12px rgba(11, 31, 94, 0.22)",
        glow: "0 0 0 8px rgba(37,99,235,.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
