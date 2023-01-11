import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// calling it App is a convention, it is the root component:
import App from "./App";
import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.strictmode will run a developer check, will only be
// visible in console
// not going to affect the application, only visible in console.
