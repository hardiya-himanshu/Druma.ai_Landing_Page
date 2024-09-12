/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLight: '#F2F2F2',
        customLight2: '#FFFFFF',
        customDark: '#333333',
        customDark2: '#4D4D4D',
        customBlack: 'black',
        customWhite: 'white',
        customBlue: '#1E90FF',
        customLightBlue: '#00BFFF',
      },
    },
  },
  plugins: [],
}

