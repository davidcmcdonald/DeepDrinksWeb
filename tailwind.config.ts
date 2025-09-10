import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        card: "#0f1520",
        ink: "#0b0f14"
      },
      backgroundImage: {
        'drip': 'radial-gradient(80rem 40rem at 50% -10%, rgba(255,255,255,0.06), transparent 60%)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;
