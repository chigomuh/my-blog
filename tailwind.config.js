/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        walking: {
          "0%": {
            transform: "translate(-300px)",
          },
          "100%": {
            transform: "translate(100vw)",
          },
        },
      },
      animation: {
        walking: "walking 20s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
