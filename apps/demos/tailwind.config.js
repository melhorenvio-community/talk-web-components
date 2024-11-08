const { createTheme, Theme } = require("@melhorenvio/unbox-theme");

const { config } = createTheme(Theme.ME);

/** @type {import('tailwindcss').Config} */
export default {
  presets: [config],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
    "!./src/**/node_modules/**/*.{html,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "green-wc": "#CDE12B",
      },
    },
  },
  plugins: [],
};
