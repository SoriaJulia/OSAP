module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['trade-gothic-next-condensed', 'sans-serif'],
      sans: ['trade-gothic-next', 'ui-sans-serif', 'Roboto'],
    },
    extend: {
      colors: {
        yellow: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcd80',
          300: '#ffb84d',
          400: '#ffa826',
          500: '#ff9900',
          600: '#fb8d00',
          700: '#f57d00',
          800: '#ef6d00',
          900: '#e65200',
        },
        orange: {
          25: '#ffebe6',
          50: '#ffd6cc',
          100: '#ffad99',
          200: '#ff8566',
          300: '#ff5c33',
          400: '#ff4719',
          500: '#ff3300',
          600: '#e62e00',
          700: '#cc2900',
          800: '#991f00',
          900: '#661400',
        },
        blue: {
          100: '#ebf3f6',
          200: '#b0cfd9',
          300: '#9dc3d0',
          400: '#4e93aa',
          500: '#3A87A1',
          600: '#347a91',
          700: '#295f71',
          800: '#1d4451',
          900: '#112930',
        },
        grey: {
          50: '#f4f4f5',
          100: '#e9e9eb',
          200: '#bcbec2',
          300: '#8f9299',
          400: '#626670',
          500: '#1e2533',
          600: '#1b212e',
          700: '#181e29',
          800: '#151a24',
          900: '#12161f',
        },
      },
      gridTemplateColumns: {
        'footer-lg': '13% 1.3fr repeat(2, 1fr)',
        'footer-md': '18% repeat(2, 1fr)',
        'footer': 'repeat(2, 1fr)',
      },
      screens: {
        xs: '380px',
      },
      backgroundImage: {
        '404img': "url('/img/404.svg')",
      },
    },
  },
  plugins: [],
};
