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
        'custom-lg': "15.6px",
        'custom-llg': "16.8px",
        'custom-xl': "17.6px",
        'custom-2xl': "18.4px",
        'custom-3xl': "21px",
        'custom-4xl': "23px",
        'custom-5xl': "25.6px",
        'custom-6xl': "26.4px",
        'custom-7xl': "35.2px",
        'custom-8xl': "41.8px",
        'custom-9xl': "52.8px",
        'custom-10xl': "70.4px",
      },
      colors: {
        'sky-blue': "#00A8E8",
        'light-blue': "#EAF9FFF0",
        'deep-blue': "#003459",
        'dark-blue': "#00171f",
        'off-white': "#fefefe",
        'dusk-black': "#4B4B4B",
        'z-black': "#010101",
        'gray': "#0000001A",
        'silver-gray': "#00171F1A",
        'green': "#026070",
        'light-green': "#56E3CB",
      },
      boxShadow: {
        'custom-xl':"0px 0px 13.9px 0px #0000001A",
        'custom-2xl': "8px 8px 13.9px 2px #0000001A",
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