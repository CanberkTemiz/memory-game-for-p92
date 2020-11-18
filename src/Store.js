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
  disableFoundPair(card) {
    this.deck = this.deck.map((el) => {
      if (card.number === el.number) {
        el.disabled = true;
      }
      return el;
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
      }
      return card;
    });
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
