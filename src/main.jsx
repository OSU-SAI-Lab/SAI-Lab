import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/theme.css";

const root = document.getElementById("root");
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";
const app = (
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages contain build-time HTML. Development and the 404 fallback
// start with an empty root and still need a normal client render.
if (root.childElementCount > 0) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
