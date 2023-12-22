// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import App from "./App";
// import rootReducer from "./reducers";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
