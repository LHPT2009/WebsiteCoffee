module.exports = {
  mode: "jit",
  //rem = 16px
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //Responsive breakpoint
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px', 
    },

    //color
    colors: {
      'primary': '#3d685e',
      'primary-cont': '#CCFFF3',
      'on-primary-cont': '#093830',
      'secondary': '#3E4A48',
      'secondary-cont': '#D6E7E1',
      'on-secondary-cont': '#28332F',
      'tertiary': '#384954',
      'tertiary-cont': '#C6DFF0',
      'on-tertiary-cont': '#1B2D39',
      'background': '#F5F5F5',
      'black': '#1F1F1F',
      'white': '#F9F9F9',
      's1': '#eff1f0',
      's2': '#e9ecec',
      's3': '#e3e8e7',
      's4': 'e2e7e6',
      's5': 'dee4e2',
      'on-surface': '#07221B',
      'insurface': '#222524',
      'on-insurface': '#FCFDFD',
      'outline': '#5E6E6A',
      'outline-var': 'rgba(115, 130, 126, 0.6);',
      'warning': '#E6B91A',
      'error': '#DB2450',
      'success': '#45B163',
      'link': '#527BCB',

    },

    //extend
    extend: {
      fontFamily: {
        GoogleSansThin: ["GoogleSans-Thin", "san-serif"],
        GoogleSansLight: ["GoogleSans-Light", "san-serif"],
        GoogleSansRegular: ["GoogleSans-Regular", "san-serif"],
        GoogleSansMedium: ["GoogleSans-Medium", "san-serif"],
        GoogleSansBold: ["GoogleSans-Bold", "san-serif"],
        GoogleSansBlack: ["GoogleSans-Black", "san-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
