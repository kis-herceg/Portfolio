/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      "comfortaa":  ['Comfortaa', 'sans-serif'],
      "kanit": ['Kanit', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'dark-invert-lb': '0 -25px 0 0 rgba(31, 41, 55, 1)',
        'dark-invert-lb-2': '0 25px 0 0 rgba(31, 41, 55, 1)',
      },
      backgroundImage: {
        'contour-svg': `url('${process.env.REACT_APP_PUBLIC_URL}/assets/images/ContourLine2.svg')`,
        'contour-3-svg': `url('${process.env.REACT_APP_PUBLIC_URL}/assets/images/ContourLine4.svg')`,
        'neon': `url('${process.env.REACT_APP_PUBLIC_URL}/assets/images/neon.jpg')`,
        'neon-1': `url('${process.env.REACT_APP_PUBLIC_URL}/assets/images/neon1.jpg')`,
      },
    },
  },
  plugins: [],
}

