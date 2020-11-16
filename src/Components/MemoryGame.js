import React, { useEffect } from "react";
import { useStore } from "../Store";

export default function MemoryGame() {
  const store = useStore();

  const pictures = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "17.png",
    "19.png",
  ];

  useEffect(() => {
    for (let i = 0; i < store.game.option; i++) {
      const firstOption = {
        id: i * 2,
        number: i,
        picture: pictures[i],
        flipped: false,
        disabled: false,
      };

      const secondOption = {
        id: i * 2 + 1,
        number: i,
        picture: pictures[i],
        flipped: false,
        disabled: false,
      };

      store.cardPush(firstOption);
      store.cardPush(secondOption);
    }
    //store.showDeck();

    store.shuffleDeck();
  }, []);

  return <h1>mem game</h1>;
}
