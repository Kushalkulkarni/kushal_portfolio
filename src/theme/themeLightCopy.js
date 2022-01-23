import * as React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import App from "../App/App";

import { Switch } from "@mui/material";


const themeLightCopy = () => {

  const [dark, setDark] = useState(false)
  const theme = createTheme({
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
      mode: dark ? "dark" : "light",
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
  });

  return (
    <ThemeProvider theme={theme}>
      <Switch checked={dark} onChange={() => setDark(!dark)}/>
      <App />
    </ThemeProvider>
  );
};

export default themeLightCopy;
