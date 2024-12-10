/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFA500',
        'secondary': '#1E1E1E',
        'secondary-light': '#333333',
        'success': '#28A745',
      },

    },
  },
  plugins: [],
}

