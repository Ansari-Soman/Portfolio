/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // for Vite root file
    "./src/**/*.{js,ts,jsx,tsx}", // for all React components
  ],
  theme: {
    extend: {
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
        "black-1": "6px 6px 0 #000",
      },
    },
  },
  plugins: [],
};
