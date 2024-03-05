import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

export default withUt({
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          secondary: "var(--accent-secondary)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          background: "var(--destructive-background)",
        },
        success: {
          DEFAULT: "var(--success)",
          background: "var(--success-background)",
        },
      },
      minHeight: {
        minusNavHeight: "var(--minus-nav-height)",
      },
    },
  },
  plugins: [],
});
