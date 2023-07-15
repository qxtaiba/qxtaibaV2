import { createGlobalStyle, DefaultTheme } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize}

  *, ::before, ::after {
    border-width: 0;
    border-style: solid;
    border-color: theme('borderColor.DEFAULT', currentColor);
  }

  blockquote, dl, dd, h1, h2, h3,
  h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  img, svg, video, canvas, audio,
  iframe, embed, object {
    display: block;
  }

  body {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
    font-size: 14px; /* Modify the font size here */
    background-color: ${({ theme }) => theme.colors?.body};
    color: ${({ theme }) => theme.colors?.text[100]};
  }

  /* ===== Custom Scroll Bar ===== */
  /* Width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors?.scrollHandle};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors?.scrollHandleHover};
  }

  /* Handle on drag */
  ::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.colors?.scrollHandleHover};
  }

  input[type=text] {
    background-color: ${({ theme }) => theme.colors?.body};
    color: ${({ theme }) => theme.colors?.text[100]};
    caret-color: ${({ theme }) => theme.colors?.primary};
  }

  input[type=text]:focus-visible {
    outline: none;
  }

  .sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

export default GlobalStyle;
