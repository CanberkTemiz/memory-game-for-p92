import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import storeInstance from "./stores/UserStore";
import "bootstrap/dist/css/bootstrap.min.css";

export const StoreContext = React.createContext();

ReactDOM.render(
  <StoreContext.Provider value={storeInstance}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
