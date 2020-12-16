import React, { useContext, useStore } from "react";
import { Navbar, Nav, Jumbotron, Button } from "react-bootstrap";
import styled from "styled-components";
import { StoreContext } from "../index";

const StyledBrand = styled(Navbar.Brand)`
  font-size: 40px;
`;

const Header = ({ restartGame, onRestartGame }) => {
  const store = useContext(StoreContext);

  const handleRestartGame = () => {
    // Restart the game
    store.toggleLogin();
    onRestartGame(!restartGame);
    // store.flushDeck();
    // localStorage.setItem("isLogged", false);
    // localStorage.removeItem("deck");
    // store.setLogin(false);
  };

  // autorun(() => {
  //   localStorage.getItem("isLogged") === "true"
  //     ? (store.user.isLogged = true)
  //     : (store.user.isLogged = false);
  // });

  return (
    <Jumbotron>
      <Navbar bg="danger" expand="lg" variant="dark">
        <Nav className="mr-auto">
          <StyledBrand>Memory Game</StyledBrand>
        </Nav>
        <div>
          <Navbar.Brand>Total Count: 'total count static'</Navbar.Brand>
          {store.isLogged && (
            <Button onClick={handleRestartGame} variant="light">
              Restart Game
            </Button>
          )}
        </div>
      </Navbar>
    </Jumbotron>
  );
};

export default Header;
