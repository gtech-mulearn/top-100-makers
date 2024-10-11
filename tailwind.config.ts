import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg1: "#000000",
        bg2: "#A3A7A4",
        bg3: "#707070",
        bg4: "#E1E4EA",
        bg5: "#1E1E1E",
      },
      fontFamily: {
        nats: "var(--font-nats)",
        ndot: "var(--font-ndot)",
      },
    },
  },
  plugins: [],
};
export default config;
