/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
              bgColor : "#f7f7f7"
          }
      },
    },
    plugins: [
      // Example: require('@tailwindcss/forms'),
      // Example: require('@tailwindcss/typography'),
    ],
  }