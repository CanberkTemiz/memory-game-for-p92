import React from "react";
import { makeAutoObservable } from "mobx";

export default class Store {
  user = {
    isLogged: false,
  };
  deck = [];
  game = {
    won: false,
    option: 0,
    foundPair: 0,
    flippedCards: [],
    validFlipCount: 0,
    totalFlipCount: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }
  setLogin(boolean) {
    this.user.isLogged = boolean;
  }
  setOption(option) {
    this.game.option = option;
  }
  setWinner(boolean) {
    this.game.won = boolean;
  }
  incrementFoundPairCount() {
    this.game.foundPair = this.game.foundPair + 1;
  }
  disableFoundPair(number) {
    this.deck = this.deck.map((card) => {
      if (card.number === number) {
        card.disabled = true;
      }
      return card;
    });
  }
  cardPush(card) {
    this.deck.push(card);
  }
  shuffleDeck() {
    this.deck = this.deck.sort(() => Math.random() - 0.5);
  }
  flushDeck() {
    this.game.foundPair = 0;
    this.game.totalFlipCount = 0;
    this.deck.length = 0;
  }
  showDeck() {
    console.log([...this.deck]);
  }
  updateDeck(id) {
    this.deck = this.deck.map((card) => {
      if (card.id === id) {
        card.flipped = true;
      }
      return card;
    });
  }
  resetDeck() {
    this.deck = this.deck.map((card) => {
      if (!card.disabled) {
        card.flipped = false;
        return card;
      }
      return card;
    });
  }
  resumeGame(deck) {
    // retrieve the prev total count
    let prevFlipCount = deck.filter((card) => card.flipped).length / 2;

    this.setTotalFlipCount(prevFlipCount);

    this.deck = [...deck];

    // retrieve the prev option
    this.option = this.deck.length / 2;

    console.log("prev totalCount", prevFlipCount, " prev option", this.option);
  }
  setTotalFlipCount(prevValue) {
    this.totalFlipCount = prevValue;
  }
  incrementValidFlipCount() {
    this.game.validFlipCount = this.game.validFlipCount + 1;
  }
  incrementTotalFlipCount() {
    this.game.totalFlipCount = this.game.totalFlipCount + 1;
  }
  addFlippedCards(card) {
    this.game.flippedCards.push(card);
  }
}

const StoreContext = React.createContext();

export const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
