import { useObserver } from "mobx-react";
import React from "react";
import { useStore } from "../Store";

export default function Header() {
  const store = useStore();

  return useObserver(() => (
    <div>
      <p>Im always here</p>
      <header>
        <div>Total Count: {store.game.totalFlipCount}</div>
        <div>Won: {store.game.won}</div>
      </header>
      <p>Best Score: </p>
      <hr />
    </div>
  ));
}
