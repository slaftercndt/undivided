import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Undivided brand tokens
        ink: "#1C2224", // deep slate — primary text, dark sections
        gold: "#B38E3D", // warm gold accent — rules, accents, links
        parchment: "#F5F1E8", // parchment / off-white — background
        stone: "#6B6E70", // neutral mid-gray — secondary text
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
