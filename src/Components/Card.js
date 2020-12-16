import "./Card.css";
import React, { useState } from "react";
import styled from "styled-components";
import { useStore } from "../Store";
import { images } from "./images/index";
import backSideCard from "./images/p92.png";
import ReactCardFlip from "react-card-flip";

const CustomCard = styled.div`
  height: 140px;
  width: 120px;
  margin: 10px;

  background-size: cover;
  pointer-events: ${(props) => (props.flipped ? "none" : "")};
  background-image: url(${(props) =>
    props.flipped ? images[props.number].picture : backSideCard});
`;
// const cardStyleFront = {
//   backgroundImage: `url(${backSideCard})`,
//   backgroundSize: "cover",
//   width: "140px",
//   height: "160px",
// };

// const cardStyleBack = {
//   backgroundImage: `${images[cardNumber].picture}`,
//   backgroundSize: "cover",
//   width: "140px",
//   height: "160px",
// };

const Card = ({ card, onClick }) => {
  // const [cardNumber, setCardNumber] = useState(card.number);

  // useEffect(() => {
  //   // localStorage.setItem("totalCount", store.game.totalFlipCount);
  //   // localStorage.setItem("foundPair", store.game.foundPair);
  //   if (store.game.validFlipCount === 2) {
  //     store.incrementTotalFlipCount();

  //     checkTwoOpenCards();
  //   }
  // }, [store.game.validFlipCount]);

  const handleCardClick = () => {
    onClick(card);
    // console.log(card);
    // let tempCards = [...cards];
    // tempCards.find((el) => {
    //   if (el.id === card.id) {
    //     el.flipped = true;
    //   }
    // });
    // console.log("clicked card# ", card.number);
    // store.updateDeck(card.id); //flip card
    // store.incrementValidFlipCount();
    // store.addFlippedCards(card);
    // // save the deck -- in case of reload
    // localStorage.setItem("deck", store.deck);
  };

  // const checkTwoOpenCards = () => {
  //   // if same card
  //   if (
  //     store.game.flippedCards[0].number === store.game.flippedCards[1].number &&
  //     store.game.flippedCards[0].id != store.game.flippedCards[1].id
  //   ) {
  //     // disable the found pair
  //     store.disableFoundPair(store.game.flippedCards[0].number);

  //     saveCurrentLocalStorage();

  //     store.incrementFoundPairCount();

  //     // check win case
  //     if (store.game.foundPair == store.game.option) {
  //       store.updateBestScore({
  //         pair: parseInt(store.game.option),
  //         score: store.game.totalFlipCount,
  //       });

  //       localStorage.setItem("bestScore", store.bestScore);

  //       store.setWinner(true);
  //       store.flushDeck();
  //       store.setLogin(false);
  //       localStorage.setItem("isLogged", false);
  //     }
  //   } else {
  //     // not a pair
  //     setTimeout(() => {
  //       store.resetDeck();
  //       saveCurrentLocalStorage();
  //     }, 400);
  //   }
  //   // save the deck -- in case of reload

  //   store.game.flippedCards.length = 0;
  //   store.game.validFlipCount = 0;
  // };

  // const saveCurrentLocalStorage = () => {
  //   localStorage.setItem("deck", store.deck);
  //   localStorage.setItem("totalCount", store.game.totalFlipCount);
  //   localStorage.setItem("foundPair", store.game.foundPair);
  // };

  return (
    <ReactCardFlip isFlipped={card.flipped}>
      <CustomCard
        number={card.number}
        flipped={card.flipped}
        onClick={handleCardClick}
      />

      <CustomCard
        number={card.number}
        flipped={card.flipped}
        onClick={handleCardClick}
      />
    </ReactCardFlip>
  );
};

export default Card;
