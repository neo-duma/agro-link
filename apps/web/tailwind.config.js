/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2C2C2A',      // texto / neutro escuro
        sand: '#F1EFE8',     // fundo
        coral: '#D85A30',    // destaque / ação
        'coral-light': '#FAECE7', // destaque claro (badges, tags)
        muted: '#5F5E5A',    // texto secundário
        line: '#D3D1C7',     // bordas
      },
    },
  },
  plugins: [],
};
