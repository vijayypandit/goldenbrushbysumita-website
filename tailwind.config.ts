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
        ivory: "#FFFDFD",
        champagne: "#FBECEF",
        "champagne-deep": "#F2D7DE",
        gold: {
          DEFAULT: "#C96F86",
          light: "#E8AABD",
          dark: "#9F4C64",
        },
        espresso: {
          DEFAULT: "#3A242B",
          soft: "#4D3039",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
