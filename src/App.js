import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { Container, Row, Col } from "react-bootstrap";
import { useStore } from "./Store";

import Login from "./Components/Login";
import MemoryGame from "./Components/MemoryGame";
import Header from "./Components/Header";

// const FullWidthRow = styled(Row)``

const App = observer(() => {
  const store = useStore();

  useEffect(() => {
    // console.log(store.user);
  }, []);

  return (
    <Container>
      <Header />

      {store.user.isLogged ? <MemoryGame /> : <Login />}
    </Container>
  );
});

export default App;
