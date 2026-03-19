export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c1a05f",
        dark: "#0f0f0f",
        light: "#ffffff",
      },
      fontFamily: {
        heading: ["'MADE Sunflower'", "serif"],
        body: ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
