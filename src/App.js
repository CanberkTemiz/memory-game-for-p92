import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Container, Row, Col } from "react-bootstrap";
import { useStore } from "./Store";

import Login from "./Components/Login";
import MemoryGame from "./Components/MemoryGame";
import Header from "./Components/Header";
import { autorun } from "mobx";

const App = observer(() => {
  const [isLogged, setIsLogged] = useState(false);
  const store = useStore();

  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [store.user.isLogged]);

  return (
    <Container>
      <Header />
      {isLogged ? <MemoryGame /> : <Login />}
    </Container>
  );
});

export default App;
