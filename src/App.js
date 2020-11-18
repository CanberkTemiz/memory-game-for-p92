import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
// import localStorage from "mobx-localstorage";

import { Container } from "react-bootstrap";
import { useStore } from "./Store";

import Login from "./Components/Login";
import MemoryGame from "./Components/MemoryGame";
import Header from "./Components/Header";
import BestScores from "./Components/BestScores";

const App = observer(() => {
  const [isLogged, setIsLogged] = useState(false);
  const store = useStore();

  useEffect(() => {
    // console.log("calistim");

    if (localStorage.getItem("isLogged") === "true") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [store.user.isLogged]);

  return (
    <Container>
      <Header />
      <BestScores />
      {isLogged ? <MemoryGame /> : <Login />}
    </Container>
  );
});

export default App;
