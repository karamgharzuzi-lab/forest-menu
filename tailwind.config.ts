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
        cream: "#F7F1E8",
        tan: "#E8DCC4",
        charcoal: "#1F1A14",
        "tan-dark": "#C8B898",
        "cream-dark": "#EDE5D4",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        heebo: ["var(--font-heebo)", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.15em",
        widest3: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
