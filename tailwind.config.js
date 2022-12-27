/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      custom: [
        "YuGothL",
        "YuGothR",
        "YuGothB",
        "HelveticaL",
        "HelveticaR",
        "HelveticaB",
        "Noto Sans JP",
      ],
    },
  },
  plugins: [],
};
