import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";
import "./i18n/index.js";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </HelmetProvider>,
);
