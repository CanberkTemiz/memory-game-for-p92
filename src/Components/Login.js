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
      <form onSubmit={(e) => handleFormSubmit(e)}>
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
