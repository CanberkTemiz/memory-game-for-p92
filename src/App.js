import React, { useContext, useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { StoreContext } from "./index";

import Login from "./components/Login";
import Game from "./components/Game";
import Header from "./components/Header";
import WinAlert from "./components/WinAlert";

const App = () => {
  const store = useContext(StoreContext);
  const [option, setOption] = useState(0);
  const [restartGame, setRestartGame] = useState(false);

  useEffect(() => {
    console.log("rendered");
  });

  return (
    <Container>
      <Header
        onRestartGame={setRestartGame}
        restartGame={restartGame}
        onSelectOption={setOption}
      />
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
