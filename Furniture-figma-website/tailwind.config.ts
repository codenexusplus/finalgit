import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('/assets/imgs/img9.jpeg')", // Add your custom image path
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
    },
  },
  plugins: [],
} satisfies Config;
