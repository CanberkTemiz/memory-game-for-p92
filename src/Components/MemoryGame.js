import React, { useEffect, useState } from "react";
import { CardDeck } from "react-bootstrap";
import Card from "./Card";
import styled from "styled-components";

const StyledCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
`;

const MemoryGame = ({ option }) => {
  const [cards, setCards] = useState([]);

  const renderedItems = cards.map((card, index) => {
    return <Card card={card} key={card.id} />;
  });

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
    let arr = [];

    for (let i = 0; i < option; i++) {
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

      arr.push(firstOption, secondOption);
    }
    setCards(arr);
  }, []);

  // save the current game -- when page refesh
  // useEffect(() => {
  //   if (!store.game.won) {
  //     if (store.deck.length <= 0 && store.user.isLogged) {
  //       if (localStorage.getItem("deck").length) {
  //         // collect data from current session
  //         store.resumeGame(
  //           localStorage.getItem("deck"),
  //           localStorage.getItem("totalCount"),
  //           localStorage.getItem("foundPair"),
  //           localStorage.getItem("bestScore")
  //         );
  //       }
  //     }
  //   }
  // }, [store.deck.length]);

  // recover bestResults
  // useEffect(() => {
  //   if (localStorage.getItem("bestScore")) {
  //     store.resumeBestScore(localStorage.getItem("bestScore"));
  //   }
  // }, [store.bestScore]);

  return <StyledCards>{renderedItems}</StyledCards>;
};

export default MemoryGame;
