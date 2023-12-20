/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#227fb4",
        "light-Gray": "#9ca3af",
        "dark-Gray": "#202020",
      }
    },
  },
  plugins: [],
}

