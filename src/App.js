import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import localStorage from "mobx-localstorage";

import { Container } from "react-bootstrap";
import { useStore } from "./Store";

import Login from "./Components/Login";
import MemoryGame from "./Components/MemoryGame";
import Header from "./Components/Header";
import BestScores from "./Components/BestScores";
import WinAlert from "./Components/WinAlert";

const App = observer(() => {
  const isLoggedIn = localStorage.getItem("isLogged");
  const store = useStore();

  // when page refresh => save the bestScores
  useEffect(() => {
    if (store.deck.length <= 0) {
      if (localStorage.getItem("bestScore")) {
        const currentBestScore = localStorage.getItem("bestScore");
        store.resumeBestScore(currentBestScore);
      }
    }
  }, [store.bestScores]);

  return (
    <Container>
      <Header />
      <WinAlert />
      <BestScores />
      {isLoggedIn ? <MemoryGame /> : <Login />}
    </Container>
  );
});

export default App;
