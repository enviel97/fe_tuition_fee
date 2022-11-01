import ThemeContext from "@context/ThemeContext";
import { useContext } from "react";

const useThemeMode = () => {
  const { themeMode, changeThemeMode } = useContext(ThemeContext);
  return {
    isDark: themeMode === "dark",
    event: {
      changeThemeMode,
      toggle: () => changeThemeMode(themeMode === "dark" ? "light" : "dark"),
    },
  };
};

export default useThemeMode;
