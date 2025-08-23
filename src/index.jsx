import "./assets/sass/style.scss";

import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom/client";
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
