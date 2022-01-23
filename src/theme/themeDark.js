import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const themeDark = responsiveFontSizes(
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
      mode: "dark",
      // background: {
      //   default: "#222222",
      // },
      primary: {
        main: "#21b6ae",
        light: "#65e8df",
        dark: "#00857e",
      },
      secondary: {
        main: "#cbff00",
        light: "#ffff58",
        dark: "#95cc00",
      },
      third: {
        main: "#507844",
        light: "#990011FF",
        dark: "#0000a1",
      },
    },
    typography: {
      fontFamily: "Raleway",
      fontSize: 14,
      fontWeightLight: 200,
    },
  })
);
