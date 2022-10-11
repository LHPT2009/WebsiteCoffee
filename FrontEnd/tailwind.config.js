module.exports = {
  mode: "jit",
  //rem = 16px
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        GoogleSansThin: ["GoogleSansThin", "san-serif"],
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
