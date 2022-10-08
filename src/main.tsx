import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { AppContextProvider } from "./state/context";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
