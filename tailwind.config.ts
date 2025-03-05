import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        line: {
          "0%": { height: "0" },
          "100%": { height: "calc(100% - 10px)" },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 10s ease-out",
        fadeInLeft: "fadeInLeft 10s ease-out",
        line: "line 10s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
