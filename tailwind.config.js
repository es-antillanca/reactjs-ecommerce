const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        light: {

          colors: {
            primary: {
              DEFAULT: "#0E793C",
              foreground: "#000000",
            },
            focus: "#0E793C"

          },
        },
        dark: {

          colors: {},
        },
      }
    }
  )],
}
