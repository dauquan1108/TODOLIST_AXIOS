import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "./conText/Theme-Provider";


ReactDOM.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
,
document.getElementsByTagName("BODY")[0]
);

reportWebVitals();
