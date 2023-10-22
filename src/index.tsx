import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyle } from "./components/common";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
