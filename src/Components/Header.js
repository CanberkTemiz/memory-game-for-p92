import React, { useEffect } from "react";
import { observer, useObserver } from "mobx-react";

import { Navbar, Nav, Jumbotron, Button } from "react-bootstrap";
import { useStore } from "../Store";
import { autorun } from "mobx";

const Header = observer(() => {
  const store = useStore();

  const handledRestartGame = () => {
    // Restart the game
    store.flushDeck();
    localStorage.setItem("isLogged", "false");
    localStorage.removeItem("deck");
    store.setLogin(false);
  };

  autorun(() => {
    if (localStorage.getItem("isLogged") === "true") {
      store.user.isLogged = true;
    } else {
      store.user.isLogged = false;
    }
  });

  return (
    <Jumbotron>
      <Navbar bg="danger" expand="lg" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Brand>Memory Game Info: </Navbar.Brand>
          <Navbar.Brand>Total Count: {store.game.totalFlipCount}</Navbar.Brand>
          <Navbar.Text>Best Score: --coming soon--</Navbar.Text>
        </Nav>

        {store.user.isLogged ? (
          <Button onClick={handledRestartGame} variant="light">
            Restart Game
          </Button>
        ) : (
          ""
        )}
      </Navbar>
      localStorage.isLogged: {localStorage.getItem("isLogged")}
    </Jumbotron>
  );
});

export default Header;
