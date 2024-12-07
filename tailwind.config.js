/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
      },
      colors: {
        'sky-blue': "#00A8E8",
        'deep-blue': "#003459",
        'dark-blue': "#00171f",
      },
      boxShadow: {
      },
      backgroundImage: {
        'hero-bg': "url('./assets/images/png/hero-bg.png')",
      },
      fontFamily: {
        'helvetica': "'helvetica',sans serif",
      }
    },
  },
  plugins: [],
}