import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
// window.name = newArry
ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RecoilRoot>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </RecoilRoot>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
