/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: "#fff0e6", // Light orange for hover effect
          500: "#fb6831", // Your custom orange color
        },
      },
    },
  },
  plugins: [],
};
