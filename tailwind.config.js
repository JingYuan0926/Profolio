/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          epilogue: ['Poppins', 'sans-serif'],
        },
        boxShadow: {
          secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
        },
      },
    },
    plugins: [],
  }
  
  