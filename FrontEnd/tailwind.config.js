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
      xxl: '1920px',
    },

    //color
    colors: {
      transparent: 'transparent',
      //primary
      primary: '#3d685e',
      'primary-cont': '#D8FDF4',
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
      s4: '#e2e7e6',
      s5: '#dee4e2',
      'on-surface': '#07221B',
      insurface: '#272B2A',
      'on-insurface': '#FCFDFD',
      //shadowcolor
      sd1: 'rgba(115, 130, 126, 0.6);',
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

    //font size
    fontSize: {
      //body
      body: [
        '16px',
        {
          lineHeight: '28px',
          letterSpacing: '0.04em',
          fontWeight: '400',
        },
      ],
      //display
      d1: [
        '60px',
        {
          lineHeight: '115%',
          letterSpacing: '-0.04em',
          fontWeight: '700',
        },
      ],
      d2: [
        '54px',
        {
          lineHeight: '120%',
          letterSpacing: '0.04em',
          fontWeight: '300',
        },
      ],
      //heading
      h1: [
        '42px',
        {
          lineHeight: '65px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      h2: [
        '32px',
        {
          lineHeight: '142%',
          letterSpacing: '0.02em',
          fontWeight: '500',
        },
      ],
      //title
      t1: [
        '24px',
        {
          lineHeight: '135%',
          letterSpacing: '0.015em',
          fontWeight: '700',
        },
      ],
      t2: [
        '16px',
        {
          lineHeight: '145%',
          letterSpacing: '0.04em',
          fontWeight: '600',
        },
      ],
      //label
      l1: [
        '22px',
        {
          lineHeight: '28px',
          letterSpacing: '0.02em',
          fontWeight: '700',
        },
      ],
      l2: [
        '16px',
        {
          lineHeight: '20px',
          letterSpacing: '0.03em',
          fontWeight: '500',
        },
      ],
      //caption
      caption: [
        '14px',
        {
          lineHeight: '145%',
          letterSpacing: '0.05em',
          fontWeight: '400',
        },
      ],
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
      //box shadow
      boxShadow: {
        1: [
          '0 1px 2px rgba(96, 119, 114, 0.15)',
          '0 1px 3px 1px rgba(101, 94, 112, 0.15)',
        ],
        2: [
          '0px 1px 2px rgba(96, 119, 114, 0.15)',
          '0px 2px 6px 2px rgba(101, 94, 112, 0.15)',
        ],
        3: [
          '0px 4px 8px 3px rgba(96, 119, 114, 0.15)',
          '0px 1px 3px rgba(101, 94, 112, 0.3)',
        ],
        4: [
          '0px 6px 10px 3px rgba(96, 119, 114, 0.15)',
          '0px 2px 3px rgba(101, 94, 112, 0.3)',
        ],
        5: [
          '0px 8px 12px 4px rgba(96, 119, 114, 0.15)',
          '0px 4px 4px rgba(101, 94, 112, 0.3)',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
