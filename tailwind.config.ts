import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#b07050",
          50: "#faf5f2",
          100: "#f2e8df",
          200: "#e5d0bf",
          300: "#d4b099",
          400: "#c08e73",
          500: "#b07050",
          600: "#9a5c3f",
          700: "#7f4a33",
          800: "#663d2c",
          900: "#533328",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
