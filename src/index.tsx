import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/app.scss";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import AppProvider from "./context/AppContext";

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
