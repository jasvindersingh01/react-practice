import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style.css";
import { createRoot } from "react-dom/client";

ReactDOM,createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);