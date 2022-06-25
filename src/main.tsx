import { Container, CssBaseline, Paper } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ p: "1rem" }}>
        <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
