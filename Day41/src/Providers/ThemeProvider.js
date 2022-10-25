import React from "react";
import ThemeContext from "../Context/ThemeContext";
import Theme from "../Assets/Theme";

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
