import React, { useContext, useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { StoreContext } from "./index";

import Login from "./components/Login";
import MemoryGame from "./components/MemoryGame";
import Header from "./components/Header";
import WinAlert from "./components/WinAlert";

const App = () => {
  const store = useContext(StoreContext);
  const [option, setOption] = useState(null);
  return (
    <Container>
      <Header />
      <WinAlert />
      {store.isLogged ? (
        <MemoryGame option={option} />
      ) : (
        <Login onSelectOption={setOption} />
      )}
    </Container>
  );
};

export default App;
