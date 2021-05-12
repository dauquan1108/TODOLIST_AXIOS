import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "./conText/Theme-Provider";

//---thu vien Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Redux import tu index
import appReducers from "./reducers/index";

// npm install --save redux-devtools-extension -----
import { composeWithDevTools } from "redux-devtools-extension";

// Redux-Saga
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas/";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//------------ Ant Design => npm install antd --save
import "antd/dist/antd.css";

// import React, { useState } from "react";

// Middleware Saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// Run Saga
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementsByTagName("BODY")[0]
);

reportWebVitals();
