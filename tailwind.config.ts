import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      notMd: { max: "767.98px" },
      md: "768px",
      lg: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1.25rem",
        md: "2rem",
        lg: "1.5rem",
      },
    },
    extend: {
      colors: {
        primary: "#FF5757",
        "gray-900": "#010A05",
      },
      spacing: {
        '26': '5.8rem',
      },
    },
  },
  plugins: [],
};
export default config;
