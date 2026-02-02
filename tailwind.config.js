/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#128ef3', // Bleu (logo)
        secondary: '#75c6fc', // Bleu clair (logo)
        accent: '#2fbf71', // Vert (logo)
        ink: '#0b2f55', // Texte principal
        background: '#f6fbff', // Fond
        surface: '#ffffff', // Surfaces/cartes
      },
    },
    screens: {
      xs: '331px',
      sm: '480px',
      md: '768px',
      lg: '1124px',
      xl: '1440px',
    },
  },
  plugins: [],
};
