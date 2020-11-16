import React, { useEffect } from "react";
import { useStore } from "../Store";
export default function Card({ card }) {
  const store = useStore();

  //   console.log("this card: ", card);
  const handleCardClick = () => {
    console.log("clicked card# ", card.number);
    store.updateDeck(card.id);
    store.incrementValidFlipCount();
    store.addFlippedCards(card);
    store.incrementTotalFlipCount();
  };

  const checkPair = () => {
    if (
      store.game.flippedCards[0].number === store.game.flippedCards[1].number &&
      store.game.flippedCards[0].id != store.game.flippedCards[1].id
    ) {
      console.log("pair found");

      // disable the found pair
    } else {
      console.log("keep trying");
      setTimeout(() => {
        store.resetDeck();
      }, 500);
    }
    store.game.flippedCards.length = 0;
    store.game.validFlipCount = 0;
  };

  useEffect(() => {
    if (store.game.validFlipCount === 2) {
      checkPair();
    }
  }, [store.game.validFlipCount]);

  return (
    <div
      style={{ margin: 10, height: 40, weight: 40 }}
      onClick={handleCardClick}
    >
      This is a Card
    </div>
  );
}
