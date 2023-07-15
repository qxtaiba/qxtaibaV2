import { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import themes from "../components/styles/Themes";
import { setToLS, getFromLS } from "../utils/storage";

export const useTheme = (): { theme: DefaultTheme; setMode: (mode: DefaultTheme) => void; themeLoaded: boolean } => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: DefaultTheme) => {
    setToLS("tsn-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
    const localThemeName = getFromLS("tsn-theme");
    const initialTheme = localThemeName ? themes[localThemeName] : themes.dark;
    setTheme(initialTheme);
    setThemeLoaded(true);
  }, []);

  return { theme, setMode, themeLoaded };
};
