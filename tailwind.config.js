module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.15), 0 20px 60px rgba(13, 17, 29, 0.65)',
      },
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ece7ff',
          200: '#d9d0ff',
          300: '#bdaeff',
          400: '#9a87ff',
          500: '#7f67ff',
          600: '#6d52f6',
          700: '#5a44d8',
          800: '#4839ad',
          900: '#3e3294',
        },
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
