/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 5s ease infinite',
      },
      colors: {
        customLight: '#F2F2F2',
        customLight2: '#FFFFFF',
        customLight3: '#BFBFBF',
        customDark: '#002244',
        customDark2: '#012169',
        customDark3: '#0E3386',
        customBlack: 'black',
        customWhite: 'white',
        customBlue: '#1E90FF',
        customBlue2: '#0039a6',
        customBlue3: '#1A1A1A',
        customLightBlue: '#00BFFF',
      },
    },
  },
  plugins: [],
}

