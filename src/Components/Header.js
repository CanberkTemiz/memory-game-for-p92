import React from "react";
import { observer } from "mobx-react";
import localStorage from "mobx-localstorage";

import { Navbar, Nav, Jumbotron, Button } from "react-bootstrap";
import { useStore } from "../Store";
import { autorun } from "mobx";
import styled from "styled-components";

const StyledBrand = styled(Navbar.Brand)`
  font-size: 40px;
`;

const Header = observer(() => {
  const store = useStore();

  const handledRestartGame = () => {
    // Restart the game
    store.flushDeck();
    localStorage.setItem("isLogged", false);
    localStorage.removeItem("deck");
    store.setLogin(false);
  };

  autorun(() => {
    localStorage.getItem("isLogged") === "true"
      ? (store.user.isLogged = true)
      : (store.user.isLogged = false);
  });

  return (
    <Jumbotron>
      <Navbar bg="danger" expand="lg" variant="dark">
        <Nav className="mr-auto">
          <StyledBrand>Memory Game</StyledBrand>
        </Nav>

        {store.user.isLogged ? (
          <div>
            <Navbar.Brand>
              Total Count: {store.game.totalFlipCount}
            </Navbar.Brand>
            <Button onClick={handledRestartGame} variant="light">
              Restart Game
            </Button>
          </div>
        ) : (
          ""
        )}
      </Navbar>
    </Jumbotron>
  );
});

export default Header;
