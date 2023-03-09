/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-banner": "url('banner.png')",
      },
    },
    container: {
      width: "100%",
      maxWidth: {
        DEFAULT: "100%",
        sm: "100%",
        lg: "1280px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
  },
  plugins: [],
};
