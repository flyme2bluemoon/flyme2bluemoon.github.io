import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "topography-light": "url('/images/topography-light.svg')",
        "topography-dark": "url('/images/topography-dark.svg')",
      },
      fontFamily: {
        sans: ["Radio Canada", ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
