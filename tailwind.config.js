module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Azo-Sans': ['azo-sans-web', 'sans-serif'],
        'Bello': ['bello-pro'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('tailwindcss-hero-patterns'),
  ],
}
