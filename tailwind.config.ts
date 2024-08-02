import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
        caption: ["Space Mono", "monospace"],
      },
    },
    fontSize: {
      header: ["67px", { lineHeight: "110%" }],
      headerSec: ["51px", { lineHeight: "110%" }],
      subtitle: ["38px", { lineHeight: "110%" }],
      subtitleSec: ["28px", { lineHeight: "120%" }],
      textBig: ["22px", { lineHeight: "130%" }],
      base: ["16px", { lineHeight: "140%" }],
    },
    screens: {
      sm: "375px",
      md: "834px",
      xl: "1200px",
      xxl: "1600px",
    },
  },
  plugins: [],
};
export default config;
