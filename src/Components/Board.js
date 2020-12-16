import React from "react";
import Card from "../components/Card";

const boardStyle = {
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  justifyContent: "space-evenly",
  rowGap: "30px",
};

const Board = ({ cards, onCardClick }) => {
  const renderedItems = cards.map((card) => {
    return <Card card={card} onClick={onCardClick} key={card.id} />;
  });

  return <div style={boardStyle}>{renderedItems}</div>;
};

export default Board;
