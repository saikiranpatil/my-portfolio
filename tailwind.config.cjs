
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#50E5C8",
        srimary: "#25ECAA",
        dimWhite: "#E5FFFA",
        dullGray: "#607175",
        darkGreen: "#010F0A",
        solidBlue: "#111827",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        jbMono: ["JetBrains Mono","monospace"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};