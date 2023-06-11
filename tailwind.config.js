/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        salmon: {
          light: "#ff2865",
          DEFAULT: "#ff084e",
        },
        shellfish: {
          DEFAULT: "#f4f4f4",
        },
        carbon: {
          DEFAULT: "#363636",
          light: "#d4d4d8 ",
        },
      },
      height: {
        120: "35rem",
        124: "37.5rem",
        126: "40rem",
        128: "41rem",
        139: "42rem",
      },
      screens: {
        xsm: { max: "20rem" },
      },
      fontSize: {
        md: "1.1rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
    },
  },
  plugins: [],
};
