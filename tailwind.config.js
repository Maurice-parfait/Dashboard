/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "charts.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2fr-auto': '1fr 5fr',
        'grid-chart': '5fr 3fr',
      },

      fontFamily:{
        roboto: "Roboto"
      }
    },
  },
  plugins: [],
}

