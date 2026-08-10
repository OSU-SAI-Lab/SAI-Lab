import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/theme.css";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export function render(pathname) {
  const location = basename === "/" ? pathname : `${basename}${pathname}`;

  return renderToString(
    <React.StrictMode>
      <StaticRouter basename={basename} location={location}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
