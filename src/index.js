import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeLight } from "./theme/themeLight";
import {themeDark} from './theme/themeDark';
import CssBaseline from "@mui/material/CssBaseline";


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={themeDark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
