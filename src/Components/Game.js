import React, { useEffect, useState } from "react";
import { CardDeck } from "react-bootstrap";
import Card from "./Card";
import { shuffleCards, checkCards } from "../helpers";
import Board from "./Board";
import { set } from "mobx";

const Game = ({ option }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [winner, setWinner] = useState(false);

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

  const handleClick = (card) => {
    let tempCards = cards.map((el) => {
      if (el.id === card.id) {
        return { ...card, flipped: true };
      }
      return el;
    });

    setCards(tempCards);

    setFlippedCards((prev) => [...prev, card]);
  };

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
    // const shuffled = shuffleCards(arr);
    setCards(arr);
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      let result = checkCards(cards, flippedCards);

      setCards(result);

      setFlippedCards([]);
    }
  }, [flippedCards]);

  return (
    <div>
      <Board cards={cards} onCardClick={handleClick} />
    </div>
  );
};

export default Game;
