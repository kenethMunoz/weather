/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    colors: {
      night: "#252850 ",
      sky: "#82AAE3",
      secundaryNight: "#678983",
      secundarysky: "#91D8E4",
      fontNight: "#F0E9D2",
      fontSky: "#EAFDFC",
      hoverNight: "#485F5B",
    },
    extend: {
      transitionProperty: {
        height: "height 4s",
      },
    },
  },
  plugins: [],
};
