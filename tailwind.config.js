/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}", "./src/*"],
  theme: {
    
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
