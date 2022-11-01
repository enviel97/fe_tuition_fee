import { palette } from "@common/palette";
import { createContext, useState } from "react";
import { ThemeProvider as StyledTheme } from "styled-components";
import ElementStyle from "@common/GlobalStyles/style.element";
import TagStyle from "@common/GlobalStyles/style.tag";
import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import "react-circular-progressbar/dist/styles.css";
import "react-loading-skeleton/dist/skeleton.css";

const initTheme: ThemeMode = "dark";

const ThemeContext = createContext<ThemeContextProps>({
  themeMode: initTheme,
  changeThemeMode: (mode: ThemeMode) => {},
});

export const ThemeProvider = ({ children }: Components) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(initTheme);

  return (
    <ThemeContext.Provider
      value={{
        themeMode: themeMode,
        changeThemeMode: setThemeMode,
      }}
    >
      <StyledTheme theme={palette[themeMode]}>
        <ElementStyle />
        <TagStyle />
        {children}
      </StyledTheme>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
