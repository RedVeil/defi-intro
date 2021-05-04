module.exports = {
  purge: {
    content: [
      "./pages/**/*.tsx",
      "./pages/**/*.css",
      "./components/**/*.tsx",
      "./container/**/*.tsx",
      "./utils/**/*.ts",
      "./utils/**/*.tsx",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        100: 100,
      },
      minWidth: {
        20: "5rem",
        24: "6rem",
      },
      maxWidth: {
        24: "6rem",
      },
      maxHeight: {
        "1/3": "33.333333%",
        "2/3": "66.666666%",
        "1/2": "50%",
      },
      lineHeight: {
        button: "32px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
        112: "30rem",
        128: "40rem",
        129: "52rem",
      },
      scale: {
        101: "1.01",
        102: "1.02",
      },
      fontFamily: {
        title: ["Eczar", "serif"],
        suez: ["Suez One", "serif"],
        text: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      cursor: ["hover", "focus", "disabled"],
      textColor: ["hover", "focus", "group-hover", "active"],
      backgroundColor: ["hover", "focus", "disabled", "checked"],
      cursor: ["hover", "focus", "disabled"],
      borderColor: ["hover", "focus", "disabled"],
      transform: ["hover", "focus"],
      animation: ["hover", "focus", "group-hover"],
      display: ["hover", "group-hover"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
