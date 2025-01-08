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
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'darkBlue-600': "#3A4563",
      },
    },
  },
  plugins: [],
} satisfies Config;
