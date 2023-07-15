import { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";
import { Container, OuterArea, Header, OrangeCircle, GreenCircle, RedCircle } from "./components/styles/App.styled";

export const ThemeContext = createContext<((theme: DefaultTheme) => void) | null>(null);

function App() {
  const { theme, setMode, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    const themeColor = selectedTheme.colors?.body;

    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    const maskIcon = document.querySelector("link[rel='mask-icon']");
    const metaMsTileColor = document.querySelector("meta[name='msapplication-TileColor']");

    metaThemeColor?.setAttribute("content", themeColor);
    metaMsTileColor?.setAttribute("content", themeColor);
    maskIcon?.setAttribute("color", themeColor);
  }, [selectedTheme]);

  const switchTheme = (theme: DefaultTheme) => {
    setSelectedTheme(theme);
    setMode(theme);
  };

  const handleScroll = () => {
    const container = document.querySelector(".container");
    const scrollbarContainer = container?.querySelector("::-webkit-scrollbar-container");
  
    if (container && scrollbarContainer) {
      if (container.scrollTop > 0) {
        scrollbarContainer.classList.add("show-scrollbar");
      } else {
        scrollbarContainer.classList.remove("show-scrollbar");
      }
    }
  };
  
  return (
    <>
      <h1 className="sr-only" aria-label="Terminal Portfolio">
        Terminal Portfolio
      </h1>
      {themeLoaded && (
        <ThemeContext.Provider value={switchTheme}>
          <OuterArea>
            <ThemeProvider theme={selectedTheme}>
              <GlobalStyle />
              <div>
                <Header>
                  <RedCircle />
                  <OrangeCircle />
                  <GreenCircle />
                </Header>
                <Container onScroll={handleScroll}>
                  <Terminal />
                </Container>
              </div>
            </ThemeProvider>
          </OuterArea>
        </ThemeContext.Provider>
      )}
    </>
  );
}

export default App;

