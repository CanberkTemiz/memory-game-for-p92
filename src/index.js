import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Store, { StoreProvider } from "./Store";

import "bootstrap/dist/css/bootstrap.min.css";

const store = new Store();

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
