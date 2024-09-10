import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import App from "./app-demo";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
