import React from "react";
export const themes = {
  light: {
    foreground: "rgb(1 1 1)",
    background: "#eeeeee",
    button: "blue"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    button: "red"
  }
};
 const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
  clickCong: () => {},
  clickTru: () => {},

});

export default ThemeContext;