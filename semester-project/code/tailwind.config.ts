import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        abeezee: ["var(--font-abeezee)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
        inter: ["var(--font-inter)"],

      },
      colors: {
        "brand-green": {
          50: "#ebf1ed",
          300: "#79a388",
          500: "#37754e",
          600: "#275337"
        },
        "brand-black": {
          500: "#161615",
          600: "#0e0e0e",
        },
        "brand-yellow": {
          500: "#F7CB14",
          600: "#d9a10b",
        },
        "brand-blue": {
          500: "#255DA8",
          600: "#1f4c84",
        },
        "brand-brown": {
          500: "#3A2404",
          600: "#2c1b03",
        },
        "brand-grey": {
          50: "#D9D9D9",
          100: "#92A4A8",
          500: "#92A4A8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
