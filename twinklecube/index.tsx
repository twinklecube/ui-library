import * as React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/app/App";
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root') as HTMLDivElement)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
