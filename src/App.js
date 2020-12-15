import React, { useContext, useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { StoreContext } from "./index";

import Login from "./components/Login";
import Game from "./components/Game";
import Header from "./components/Header";
import WinAlert from "./components/WinAlert";

const App = () => {
  const store = useContext(StoreContext);
  const [option, setOption] = useState(null);
  const [restartGame, setRestartGame] = useState(false);

  useEffect(() => {
    setRestartGame(false);
  }, [restartGame]);

  return (
    <Container>
      <Header setRestartGame={setRestartGame} />
      <WinAlert />
      {store.isLogged ? (
        <Game option={option} />
      ) : (
        <Login onSelectOption={setOption} />
      )}
    </Container>
  );
};

export default App;
