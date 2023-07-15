import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#1D2A35",
      scrollHandle: "#19252E",
      scrollHandleHover: "#162028",
      primary: "#05CE91",
      secondary: "#FF9D00",
      text: {
        100: "#cbd5e1",
        200: "#B2BDCC",
        300: "#64748b",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#EFF3F3",
      scrollHandle: "#C1C1C1",
      scrollHandleHover: "#AAAAAA",
      primary: "#027474",
      secondary: "#FF9D00",
      text: {
        100: "#334155",
        200: "#475569",
        300: "#64748b",
      },
    },
  },
  "blue-matrix": {
    id: "T_003",
    name: "blue-matrix",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#00ff9c",
      secondary: "#60fdff",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#76ff9f",
      },
    },
  },
  espresso: {
    id: "T_004",
    name: "espresso",
    colors: {
      body: "#323232",
      scrollHandle: "#5b5b5b",
      scrollHandleHover: "#393939",
      primary: "#E1E48B",
      secondary: "#A5C260",
      text: {
        100: "#F7F7F7",
        200: "#EEEEEE",
        300: "#5b5b5b",
      },
    },
  },
  "green-goblin": {
    id: "T_005",
    name: "green-goblin",
    colors: {
      body: "#000000",
      scrollHandle: "#2E2E2E",
      scrollHandleHover: "#414141",
      primary: "#E5E500",
      secondary: "#04A500",
      text: {
        100: "#01FF00",
        200: "#04A5B2",
        300: "#E50101",
      },
    },
  },
  ubuntu: {
    id: "T_006",
    name: "ubuntu",
    colors: {
      body: "#2D0922",
      scrollHandle: "#F47845",
      scrollHandleHover: "#E65F31",
      primary: "#80D932",
      secondary: "#80D932",
      text: {
        100: "#FFFFFF",
        200: "#E1E9CC",
        300: "#CDCDCD",
      },
    },
  },
  oceanic: {
    id: "T_007",
    name: "oceanic",
    colors: {
      body: "#2B303B",
      scrollHandle: "#65737E",
      scrollHandleHover: "#596164",
      primary: "#6699CC",
      secondary: "#99C794",
      text: {
        100: "#D8DEE9",
        200: "#C0C5CE",
        300: "#A7ADBA",
      },
    },
  },
  solarized: {
    id: "T_008",
    name: "solarized",
    colors: {
      body: "#002B36",
      scrollHandle: "#586E75",
      scrollHandleHover: "#4D6168",
      primary: "#839496",
      secondary: "#B58900",
      text: {
        100: "#FDF6E3",
        200: "#EEE8D5",
        300: "#93A1A1",
      },
    },
  },
  dracula: {
    id: "T_009",
    name: "dracula",
    colors: {
      body: "#282A36",
      scrollHandle: "#44475A",
      scrollHandleHover: "#3C3F52",
      primary: "#BD93F9",
      secondary: "#FF79C6",
      text: {
        100: "#F8F8F2",
        200: "#6272A4",
        300: "#6272A4",
      },
    },
  },
  nord: {
    id: "T_010",
    name: "nord",
    colors: {
      body: "#2E3440",
      scrollHandle: "#4C566A",
      scrollHandleHover: "#434C5E",
      primary: "#81A1C1",
      secondary: "#D8DEE9",
      text: {
        100: "#ECEFF4",
        200: "#8FBCBB",
        300: "#5E81AC",
      },
    },
  },
  material: {
    id: "T_011",
    name: "material",
    colors: {
      body: "#263238",
      scrollHandle: "#546E7A",
      scrollHandleHover: "#455A64",
      primary: "#80CBC4",
      secondary: "#FF9800",
      text: {
        100: "#ECEFF1",
        200: "#B0BEC5",
        300: "#90A4AE",
      },
    },
  },
  zenburn: {
    id: "T_012",
    name: "zenburn",
    colors: {
      body: "#3F3F3F",
      scrollHandle: "#666666",
      scrollHandleHover: "#555555",
      primary: "#B2B2B2",
      secondary: "#DFAF8F",
      text: {
        100: "#DCDCCC",
        200: "#CCCCBC",
        300: "#8F8F8F",
      },
    },
  },
  monokai: {
    id: "T_013",
    name: "monokai",
    colors: {
      body: "#272822",
      scrollHandle: "#49483E",
      scrollHandleHover: "#3E3D32",
      primary: "#F92672",
      secondary: "#A6E22E",
      text: {
        100: "#F8F8F2",
        200: "#75715E",
        300: "#75715E",
      },
    },
  },
  tomorrow: {
    id: "T_014",
    name: "tomorrow",
    colors: {
      body: "#FFFFFF",
      scrollHandle: "#C5C8C6",
      scrollHandleHover: "#B4B7B4",
      primary: "#81A2BE",
      secondary: "#C82829",
      text: {
        100: "#4D4D4C",
        200: "#8E908C",
        300: "#8E908C",
      },
    },
  },
};

export default theme;