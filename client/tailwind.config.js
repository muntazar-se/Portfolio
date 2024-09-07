/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#f97316",
        tertiary: "#54D6BB",
      },
    },
    screens: {
      sm: {max:'1000px'},
      // => @media (min-width: 640px) { ... }

      lg: {max: '1024px'},
      // => @media (min-width: 1024px) { ... }

    }
  },
  plugins: [],
};
