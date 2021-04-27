import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "./conText/Theme-Provider";
//---
import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducers from "./reducers/index";
import Generators from "../src/components/Generators";

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementsByTagName("BODY")[0]
);

reportWebVitals();
