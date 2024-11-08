/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pj_blk: "#161C2D",
        pj_blue: "#473BF0",
        pj_offwhite: "#E7E9ED",
        pj_white: "#f5f5f5",
        pj_green: "#68D585",
        pj_red: "#F64B4B",
        pj_bgreen: "#56CD5D",
        pj_lblue: "#34B3F2",
        pj_whited: "#FfFfFf",
        pj_whitedark: "#F4F7FA",
        pj_dark: "#7D818D",
      },
      fontFamily: {
        gilroy_regular: ["Gilroy_Regular", "sans-serif"],
        gilroy_medium: ["Gilroy_Medium", "sans-serif"],
        gilroy_semibold: ["Gilroy_Semibold", "sans-serif"],
        gilroy_bold: ["Gilroy_Bold", "sans-serif"],
        gilroy_black: ["Gilroy_Black", "sans-serif"],
        gilroy_light: ["Gilroy_Light", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      padding: {
        section: "10rem"
      },
      backgroundImage: {
        gradient_bg: "linear-gradient(to bottom, #473BF066, #34B3F266)",
        gradient_bgh: "linear-gradient(to bottom, #473BF0, #34B3F2)",
        gradient_bgru: "linear-gradient(to right, #f00, #0f0, #00f)",
      }
    },
  },
  plugins: [],
}

