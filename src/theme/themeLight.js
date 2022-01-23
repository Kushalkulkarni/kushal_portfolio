import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const themeLight = responsiveFontSizes(
  createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: "1rem",
          },
        },
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#1ba098",
        light: "#5dd2c9",
        dark: "#00716a",
        contrastText: "#000000",
      },
      secondary: {
        main: "#deb992",
        light: "#ffebc3",
        dark: "#ab8964",
        contrastText: "#000000",
      },
      background: {
        main: "#ffebc3",
        dark: "#000000",
      },
    },
    typography: {
      fontFamily: "Raleway",
      fontSize: 14,
      fontWeightLight: 200,
    },
  })
);

