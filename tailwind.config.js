/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fly-1': 'fly 15s linear infinite',
        'fly-2': 'fly 18s linear infinite',
        'fly-3': 'fly 21s linear infinite',
        'fly-4': 'fly 24s linear infinite',
        'fly-5': 'fly 27s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fly: {
          '0%': {
            left: '-50px',
            transform: 'translateY(0) scale(0.8)'
          },
          '10%': {
            transform: 'translateY(-20px) scale(1)'
          },
          '20%': {
            transform: 'translateY(10px) scale(0.9)'
          },
          '30%': {
            transform: 'translateY(-10px) scale(1.1)'
          },
          '40%': {
            transform: 'translateY(15px) scale(1)'
          },
          '50%': {
            transform: 'translateY(-15px) scale(0.9)'
          },
          '75%': {
            transform: 'translateY(10px) scale(1)'
          },
          '100%': {
            left: 'calc(100% + 50px)',
            transform: 'translateY(0) scale(0.8)'
          },
        },
      },
      boxShadow: {
        'custom': 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
      
      },
      
    },
  },
  plugins: [],
}