import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'mallySemibold': ['MallySemibold', 'sans-serif'],
      'mally': ['Mally', 'sans-serif'],
      'vayu': ['Vayu', 'sans-serif'],
      'headingNow': ['HeadingNow', 'sans-serif'],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'darkBlue-600': "#3A4563",
      },
    },
  },
  plugins: [],
} satisfies Config;
