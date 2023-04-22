/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#404145",
        "super-dark": "#222325",
        "light": "#74767e",
        "super-light": "#62646a",
        "extra-light": "#b5b6ba",
        "primary-teal": "#1dbf73",
        "primary-pink": "#ff62ad",
        "background-light": "#fafafa",
        "top-rated": "#ffbe5b",
        verified: "#02c2a9"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
