const defaultTheme = require("tailwindcss/defaultTheme");

// const yellow = "#f9e71c";
// const primary = "#5540af";
// const primaryRgbaFrom = "rgba(85, 64, 174, 0.95)";
// const primaryRgbaTo = "rgba(65, 47, 144, 0.90)";

const yellow = "#f1c40f";
const primary = "#3498db";
const primaryRgbaFrom = "rgba(52, 152, 219, 0.95)";
const primaryRgbaTo = "rgba(41, 128, 185, 0.90)";

const atomTheme = {
  fontFamily: {
    header: ["Raleway", "sans-serif"],
    body: ["Open Sans", "sans-serif"],
  },

  screens: {
    xs: "375px",
    ...defaultTheme.screens,
  },

  colors: {
    transparent: "transparent",
    primary,
    secondary: "#252426",
    white: "#ffffff",
    black: "#000000",
    yellow,
    lila: "#e6e5ec",
    "grey-10": "#6c6b6d",
    "grey-20": "#7c7c7c",
    "grey-30": "#919091",
    "grey-40": "#929293",
    "grey-50": "#f4f3f8",
    "grey-60": "#edebf6",
    "grey-70": "#d8d8d8",
    "hero-gradient-from": primaryRgbaFrom,
    "hero-gradient-to": primaryRgbaTo,
    "blog-gradient-from": "#8f9098",
    "blog-gradient-to": "#222222",
  },

  container: {
    center: true,
    padding: "1rem",
  },

  shadows: {
    default: "0 2px 18px rgba(0, 0, 0, 0.06)",
    md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
  },

  spacing: {
    13: "3.25rem",
    15: "3.75rem",
    17: "4.25rem",
    18: "4.5rem",
    19: "4.75rem",
    42: "10.5rem",
    76: "19rem",
    84: "21rem",
    88: "22rem",
    92: "23rem",
    100: "25rem",
    104: "26rem",
    108: "27rem",
    112: "28rem",
    116: "29rem",
    120: "30rem",
    124: "31rem",
    128: "32rem",
    132: "33rem",
    136: "34rem",
    140: "35rem",
    144: "36rem",
    148: "37rem",
    152: "38rem",
    156: "39rem",
    160: "40rem",
    164: "41rem",
    168: "42rem",
    172: "43rem",
    176: "44rem",
    180: "45rem",
    184: "46rem",
    188: "47rem",
    190: "48rem",
    194: "49rem",
    200: "50rem",
    204: "51rem",
  },
  zIndex: {
    "-1": "-1",
    60: "60",
    70: "70",
  },
  inset: {
    "2/5": "40%",
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      ...atomTheme,
      darkMode: false,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};
