module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        colors: {
          'market-green': '#009900',
          'market-red': '#EE0000',
        },
        fontSize: {
          14: '14px',
          36: '36px',
          40: '40px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
          1000: '1000px'
        },
        maxWidth: {
          800: '800px',
          chat: '66.666667%',
        },
        minHeight: {
          590: '590px',
          400: '400px',
          300: '300px',
          200: '200px',
          100: '100px',
          50: '50px',
          75: '75px',
          25: '25px',
        },
        maxHeight: {
          590: '590px',
          400: '400px',
          300: '300px',
          200: '200px',
          pop: '95vh',
          popScroll: '70vh',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        },
        "overflow-y":{
          scroll: 'scroll',
        },
      },
    },
    plugins: [],
  };