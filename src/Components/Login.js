import React, { useState } from "react";
import { useStore } from "../Store";

export default function Login() {
  const store = useStore();
  const [option, setOption] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    store.setOption(option);
    store.setLogin(true);
  };

  return (
    <div>
      <h2>Rules</h2>
      <ul>
        <li>Click any card to see a hidden number</li>
        <li>Find a card pair that shares same number</li>
        <li>If card are not matching, they be flip back</li>
        <li>Game ends when all cards are removed</li>
      </ul>

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <h3> Set pair of card to start</h3>
        <input
          type="text"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />
        <button>Start Game</button>
      </form>
    </div>
  );
}
