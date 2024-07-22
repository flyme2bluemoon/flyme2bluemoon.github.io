import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

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
        sans: ["var(--font-next-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-next-serif)", ...defaultTheme.fontFamily.serif],
        mono: ["var(--font-next-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
