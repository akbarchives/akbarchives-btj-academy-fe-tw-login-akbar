/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f28705",
          50: "#fef3e6",
          500: "#f28705",
        },
        black: {
          DEFAULT: "#1A1A1A",
        },
        gray: {
          10: "#1C1C1C",
          20: "#0000ff",
          custom: "#C0C0C0",
        },
        // Other color definitions...
      },
    },
  },
  plugins: [],
};
