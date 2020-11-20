import React, { useEffect } from "react";
import { autorun } from "mobx";
import localStorage from "mobx-localstorage";
import styled from "styled-components";

import { useStore } from "../Store";

import { images } from "./images/index";
import backSideCard from "./images/p92.png";

import ReactCardFlip from "react-card-flip";

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

const Card = ({ card }) => {
  const store = useStore();

  useEffect(() => {
    let currrentDeck = store.deck;

    localStorage.setItem("deck", currrentDeck);
  }, []);

  useEffect(() => {
    localStorage.setItem("totalCount", store.game.totalFlipCount);
    localStorage.setItem("foundPair", store.game.foundPair);
    if (store.game.validFlipCount === 2) {
      store.incrementTotalFlipCount();

      checkPair();
    }
  }, [store.game.validFlipCount]);

  const handleCardClick = () => {
    // console.log("clicked card# ", card.number);
    store.updateDeck(card.id); //flip card
    store.incrementValidFlipCount();
    store.addFlippedCards(card);

    // save the deck -- in case of reload
    localStorage.setItem("deck", store.deck);
  };

  const checkPair = () => {
    if (
      store.game.flippedCards[0].number === store.game.flippedCards[1].number &&
      store.game.flippedCards[0].id != store.game.flippedCards[1].id
    ) {
      console.log("pair found");

      // disable the found pair
      store.disableFoundPair(store.game.flippedCards[0].number);
      localStorage.setItem("deck", store.deck);
      localStorage.setItem("totalCount", store.game.totalFlipCount);
      localStorage.setItem("foundPair", store.game.foundPair);

      store.incrementFoundPairCount();

      // win case
      if (store.game.foundPair == store.game.option) {
        console.log("win case");

        store.updateBestScore({
          pair: parseInt(store.game.option),
          score: store.game.totalFlipCount,
        });

        localStorage.setItem("bestScore", store.bestScore);

        store.setWinner(true);
        store.flushDeck();
        store.setLogin(false);
        localStorage.setItem("isLogged", false);
      }
    } else {
      console.log("keep trying");

      setTimeout(() => {
        store.resetDeck();
        localStorage.setItem("deck", store.deck);
        localStorage.setItem("totalCount", store.game.totalFlipCount);
        localStorage.setItem("foundPair", store.game.foundPair);
      }, 500);
    }
    // save the deck -- in case of reload

    store.game.flippedCards.length = 0;
    store.game.validFlipCount = 0;
  };

  autorun(() => {
    // console.log("autorun...", localStorage.getItem("isLogged"));
  });

  return (
    <div>
      <ReactCardFlip isFlipped={card.flipped}>
        <CustomCard
          onClick={handleCardClick}
          flipped={card.flipped}
          number={card.number}
        />

        <CustomCard
          onClick={handleCardClick}
          flipped={card.flipped}
          number={card.number}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
