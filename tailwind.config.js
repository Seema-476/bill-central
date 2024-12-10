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
        'custom-xl': "32px",
        'custom-2xl': "38px",
        'custom-3xl': "64px",
      },
      lineHeight: {
        'custom-xl': "17.6px",
        'custom-2xl': "18.4px",
        'custom-3xl': "21px",
        'custom-4xl': "23px",
        'custom-5xl': "25.6px",
        'custom-6xl': "35.2px",
        'custom-7xl': "41.8px",
        'custom-8xl': "52.8px",
        'custom-9xl': "70.4px",
      },
      colors: {
        'sky-blue': "#00A8E8",
        'light-blue': "#EAF9FF",
        'deep-blue': "#003459",
        'dark-blue': "#00171f",
        'off-white': "#fefefe",
        'dusk-black': "#4B4B4B",
        'gray': "#0000001A",
      },
      boxShadow: {
        'custom-xl': "#0000001A",
      },
      backgroundImage: {
        'hero-bg': "url('/public/assets/images/webp/hero-bg.webp')",
      },
      fontFamily: {
        'helvetica': "'helvetica',sans serif",
      }
    },
  },
  plugins: [],
}