module.exports = {
  mode: 'jit',
  //rem = 16px
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //Responsive breakpoint
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },

    //color
    colors: {
      //primary
      primary: '#3d685e',
      'primary-cont': '#ECFEFA',
      'on-primary-cont': '#093830',
      //secondary
      secondary: '#3E4A48',
      'secondary-cont': '#D6E7E1',
      'on-secondary-cont': '#28332F',
      //tertiary
      tertiary: '#384954',
      'tertiary-cont': '#C6DFF0',
      'on-tertiary-cont': '#1B2D39',
      //background and text
      background: '#F5F5F5',
      black: '#1F1F1F',
      white: '#F9F9F9',
      grey: '#888888',
      //surface
      s1: '#eff1f0',
      s2: '#e9ecec',
      s3: '#e3e8e7',
      s4: 'e2e7e6',
      s5: 'dee4e2',
      'on-surface': '#07221B',
      insurface: '#222524',
      'on-insurface': '#FCFDFD',
      //outline
      outline: '#5E6E6A',
      'outline-var': 'rgba(115, 130, 126, 0.6);',
      //others
      warning: '#E6B91A',
      error: '#DB2450',
      success: '#45B163',
      link: '#527BCB',
      disable: '#E8E8E8',
    },

    //extend
    extend: {
      fontFamily: {
        googleSansThin: ['GoogleSans-Thin', 'Arial', 'san-serif'],
        googleSansLight: ['GoogleSans-Light', 'Arial', 'san-serif'],
        googleSansRegular: ['GoogleSans-Regular', 'Arial', 'san-serif'],
        googleSansMedium: ['GoogleSans-Medium', 'Arial', 'san-serif'],
        googleSansBold: ['GoogleSans-Bold', 'Arial', 'san-serif'],
        googleSansBlack: ['GoogleSans-Black', 'Arial', 'san-serif'],
        roboto: ['Roboto', 'Arial'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
