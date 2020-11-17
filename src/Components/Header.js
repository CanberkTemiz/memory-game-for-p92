import { useObserver } from "mobx-react";
import React from "react";
import { Navbar, Jumbotron } from "react-bootstrap";
import { useStore } from "../Store";

export default function Header() {
  const store = useStore();

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
