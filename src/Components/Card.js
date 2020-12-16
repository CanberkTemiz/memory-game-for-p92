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

const Card = ({ card, onClick }) => {
  const handleCardClick = () => {
    onClick(card);
  };

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
