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
        primary: "#EC8205",
        lightBrown: '#EFEAE4',
        brown: '#3E2810',
        darkBrown: '#120C05',
        lightGray: "#F0F2F2",
      },
      backgroundImage: {
        heroMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/bg-hero.jpg") 1x, url("/bg-hero.jpg") 2x)',
        heroTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/bg-hero.jpg") 1x, url("/bg-hero.jpg") 2x)',
        heroDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.7), rgba(2, 15, 8, 0.5)), image-set(url("/bg-hero.jpg") 1x, url("/bg-hero.jpg") 2x)',
      },
      spacing: {
        '26': '5.8rem',
      },
    },
  },
  plugins: [],
};
export default config;
