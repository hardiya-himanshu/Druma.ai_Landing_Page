/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
        fadeInDown: 'fadeInDown 1s ease-out',
        gradientMove: 'gradientMove 5s ease infinite',
      },
      
      keyframes: {
        gradientMove: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    
      colors: {
        customLight: '#F2F2F2',
        customLight2: '#FFFFFF',
        customLight3: '#BFBFBF',
        customDark: '#002244',
        customDark2: '#012169',
        customDark3: '#0E3386',
        customDark4: '#000033',
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

