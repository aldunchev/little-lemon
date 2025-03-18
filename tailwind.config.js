/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      text: "rgb(var(--color-text) / <alpha-value>)",
      error: "rgb(var(--color-error) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
      transparent: "var(--color-transparent)",
      "coral-pink": {
        500: "#EE9972", // You can adjust this hex color to match your exact needs
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      // strategy: 'class', // only generate classes
    }),
  ],
};
