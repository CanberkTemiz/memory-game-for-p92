import React, { useEffect } from "react";
import { useStore } from "./Store";

import Login from "./Components/Login";
import MemoryGame from "./Components/MemoryGame";
import Header from "./Components/Header";

import { useObserver } from "mobx-react";

export default function App() {
  const store = useStore();

  return useObserver(() => {
    return (
      <div className="container">
        <Header />
        {store.user.isLogged ? (
          <div className="row">
            <MemoryGame />
          </div>
        ) : (
          <div className="row">
            <Login />
          </div>
        )}
      </div>
    );
  });
}
