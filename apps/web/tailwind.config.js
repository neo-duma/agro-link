/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2C2C2A',
        sand: '#F1EFE8',
        coral: '#D85A30',
        'coral-light': '#FAECE7',
        muted: '#5F5E5A',
        line: '#D3D1C7',
      },
    },
  },
  plugins: [],
};
