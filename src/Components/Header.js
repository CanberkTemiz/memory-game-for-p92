import React, { useEffect } from "react";
import { useObserver } from "mobx-react";

import createPersistedState from "@plq/use-persisted-state";
import storage from "@plq/use-persisted-state/lib/storages/local-storage";

import { Navbar, Nav, Jumbotron, Button } from "react-bootstrap";
import { useStore } from "../Store";

// const [usePersistedState, clear] = createPersistedState(
//   "simple_example",
//   storage
// );
export default function Header() {
  // const [count] = usePersistedState([]);
  const store = useStore();

  // useEffect(() => {
  //   console.log(count);
  // }, [store.deck]);

  const handledRestartGame = () => {
    // Restart the game
    store.flushDeck();
    store.setLogin(false);
  };

  return useObserver(() => (
    <Jumbotron>
      <Navbar bg="danger" expand="lg" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Brand>Memory Game Info: </Navbar.Brand>
          <Navbar.Brand>Total Count: {store.game.totalFlipCount}</Navbar.Brand>
          <Navbar.Text>Best Score: --coming soon--</Navbar.Text>
        </Nav>
        {store.user.isLogged && (
          <Button onClick={handledRestartGame} variant="light">
            Restart Game
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-clockwise"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
          </Button>
        )}
      </Navbar>
    </Jumbotron>
  ));
}
