export const shuffleCards = (deck) => {
  return deck.sort(() => Math.random() - 0.5);
};

export const checkCards = (tempCards, flippedCards) => {
  let result = [];

  //same cards
  if (flippedCards[0].number === flippedCards[1].number) {
    flippedCards.forEach((el) => {
      result = tempCards.map((card) => {
        if (card.id === el.id) {
          card.flipped = true;
          card.disabled = true;
          return el;
        }
        return card;
      });
    });
    return result;
  }

  // not same cards
  flippedCards.forEach((el) => {
    result = tempCards.map((card) => {
      if (card.id === el.id) {
        card.flipped = false;
        return el;
      }
      return card;
    });
  });
  return result;
};
