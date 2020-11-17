import React, { useEffect } from "react";
import { useObserver } from "mobx-react";

import createPersistedState from "@plq/use-persisted-state";
import storage from "@plq/use-persisted-state/lib/storages/local-storage";

import { Navbar, Jumbotron } from "react-bootstrap";
import { useStore } from "../Store";

const [usePersistedState, clear] = createPersistedState(
  "simple_example",
  storage
);
export default function Header() {
  const [count] = usePersistedState([]);
  const store = useStore();

  useEffect(() => {
    console.log(count);
  }, [store.deck]);

  return useObserver(() => (
    <Jumbotron>
      <Navbar bg="danger" expand="lg" variant="dark">
        <Navbar.Brand>Memory Game Info: </Navbar.Brand>
        <Navbar.Brand>Total Count: {store.game.totalFlipCount}</Navbar.Brand>
        <Navbar.Text>Best Score: --coming soon--</Navbar.Text>
      </Navbar>
    </Jumbotron>
  ));
}
