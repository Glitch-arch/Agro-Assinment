/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-base": "#CCCBC9",
        "background-secondary": "#DAD8D8",
        "text-base": "#000000",
        "text-secondary": "#bbb7b7",
      },
    },
  },

  plugins: [],
};
