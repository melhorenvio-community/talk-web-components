/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
    "!./src/**/node_modules/**/*.{html,js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
