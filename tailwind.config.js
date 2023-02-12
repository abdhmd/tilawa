/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Alexandria", "Arial", "sans-serif"],
      },
      colors: {
        skin: {
          primary : "var(--color-primary)",
          text: "var(--color-text)",
          background: "var(--color-background)",
          "layout-background": "var(--color-layout-background)",
        },
      },
    },
  },
  plugins: [],
};
