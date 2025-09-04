/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/@frostui/tailwindcss/**/*.js",
    'node_modules/preline/dist/*.js',
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      base: ["Inter", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#3073F1",

        secondary: "#68625D",

        success: "#1CB454",

        warning: "#E2A907",

        info: "#0895D8",

        danger: "#E63535",

        light: "#eef2f7",
        dark: "#313a46",
      },
    },
  },
  safelist:[
      'bg-sky-500/25',
      'bg-amber-500/25',
      'text-amber-500',
      'bg-pink-500/25',
      'text-cyan-500',
      'bg-cyan-500/25',
  ],
  plugins: [
    require('preline/plugin'),
    require("@frostui/tailwindcss/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
