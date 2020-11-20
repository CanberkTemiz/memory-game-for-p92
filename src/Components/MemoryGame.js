import { observer } from "mobx-react";
import localStorage from "mobx-localstorage";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useStore } from "../Store";

import Card from "./Card";

const StyledCardList = styled.div`
  float: left;
`;

const MemoryGame = observer(() => {
  const store = useStore();

  // create pictures
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

  // create deck
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

    store.shuffleAndSaveDeck();
  }, []);

  // save the current game -- when page refesh
  useEffect(() => {
    if (!store.game.won) {
      if (store.deck.length <= 0 && store.user.isLogged) {
        if (localStorage.getItem("deck").length) {
          // collect data from current session
          let currentDeck = localStorage.getItem("deck");
          let currentTotalCount = localStorage.getItem("totalCount");
          let currentFoundPair = localStorage.getItem("foundPair");
          let currentBestScore = localStorage.getItem("bestScore");

          store.resumeGame(
            currentDeck,
            currentTotalCount,
            currentFoundPair,
            currentBestScore
          );
        }
      }
    }
  }, [store.deck.length]);

  // recover bestResults
  useEffect(() => {
    if (localStorage.getItem("bestScore")) {
      let scores = localStorage.getItem("bestScore");

      store.resumeBestScore(scores);
    }
  }, [store.bestScore]);

  return (
    <div>
      <h4>ben hep burdayim</h4>
      {store.deck.length > 0 &&
        store.deck.map((card, index) => {
          return (
            <StyledCardList key={index}>
              <Card card={card} key={card.id} />
            </StyledCardList>
          );
        })}
    </div>
  );
});

export default MemoryGame;
