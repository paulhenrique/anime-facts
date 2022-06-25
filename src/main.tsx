import { Container } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
