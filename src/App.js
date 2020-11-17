import React, { useEffect } from "react";
import { useObserver } from "mobx-react";

import { Container, Row, Col } from "react-bootstrap";
import { useStore } from "./Store";

import Login from "./Components/Login";
import MemoryGame from "./Components/MemoryGame";
import Header from "./Components/Header";

// const FullWidthRow = styled(Row)``

export default function App() {
  const store = useStore();

  return useObserver(() => {
    return (
      <Container>
        <Header />

        {store.user.isLogged ? <MemoryGame /> : <Login />}
      </Container>
    );
  });
}
