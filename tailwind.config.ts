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
        'fadeIn': 'fadeIn 2s ease-in-out',
        fade: 'fade 3s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fadeIn': {
          '0%': { transform: 'translateY(-120px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
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
