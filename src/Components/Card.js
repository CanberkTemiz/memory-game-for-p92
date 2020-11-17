import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../Store";

import { images } from "./images/index";
import backSideCard from "./images/p92.png";

import createPersistedState from "@plq/use-persisted-state";
// import storage from "@plq/use-persisted-state/lib/storages/local-storage";
// const [usePersistedState] = createPersistedState("simple_example", storage);

const CustomCard = styled.div`
  height: 140px;
  width: 120px;

  margin: 10px;
  display: inline-block;
  background-size: cover;
  pointer-events: ${(props) => (props.flipped ? "none" : "")};
  background-image: url(${(props) =>
    props.flipped ? images[props.number].picture : backSideCard});
`;

export default function Card({ card }) {
  // const [value, setValue] = usePersistedState([]);
  const store = useStore();

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
      store.incrementFoundPairCount();

      if (store.game.foundPair == store.game.option) {
        console.log("win case");
        store.setWinner(true);
        store.flushDeck();
        store.setLogin(false);
      }

      console.log("fp ", store.game.foundPair, "option:", store.game.option);

      // disable the found pair
      store.disableFoundPair(store.game.flippedCards[0]);
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
    <div>
      <CustomCard
        onClick={handleCardClick}
        flipped={card.flipped}
        number={card.number}
      />
    </div>
  );
}
