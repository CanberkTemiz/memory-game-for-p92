import React, { useEffect } from "react";
import { useStore } from "./Store";

import Login from "./Components/Login";
import { useObserver } from "mobx-react";

export default function App() {
  const store = useStore();

  return useObserver(() => {
    return <div>{store.user.isLogged ? "" : <Login />}</div>;
  });
}
