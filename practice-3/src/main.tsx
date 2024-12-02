import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { BASE_URL } from "./constants/url";
import "./styles/main.css";

axios.defaults.baseURL = BASE_URL;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
