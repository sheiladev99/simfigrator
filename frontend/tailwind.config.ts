import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        race: ["var(--font-race-sport)"],
      },
      colors: {
        app: {
          red: { DEFAULT: "#FF000066", error: "#FF473D" },
          green: "#5CEEA8",
          blue: { neon: "#6F8EFF", DEFAULT: "#4D9FFF", light: "#58A5FF66" },
          violet: { neon: "#B500E2", DEFAULT: "#C85CEE66" },
          gray: { light: "#B2B2B2", DEFAULT: "#808080", bg: "#FFFFFF1A" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
