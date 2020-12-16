export const shuffleCards = (deck) => {
  return deck.sort(() => Math.random() - 0.5);
};

export const checkCards = (cards, flippedCards) => {
  let result = [];

  //same cards
  if (flippedCards[0].number === flippedCards[1].number) {
    result = cards.map((card) => {
      if (card.flipped && !card.disabled) {
        return { ...card, disabled: true };
      }
      return card;
    });
    return result;
  }

  // no match
  return cards.map((card) => {
    if (card.flipped && !card.disabled) {
      return { ...card, flipped: false, disabled: false };
    }
    return card;
  });
};
