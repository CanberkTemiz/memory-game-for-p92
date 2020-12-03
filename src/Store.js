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
  bestScore = [
    {
      pair: 3,
      score: 0,
    },
    {
      pair: 4,
      score: 0,
    },
    {
      pair: 5,
      score: 0,
    },
    {
      pair: 6,
      score: 0,
    },
    {
      pair: 7,
      score: 0,
    },
    {
      pair: 8,
      score: 0,
    },
    {
      pair: 9,
      score: 0,
    },
    {
      pair: 10,
      score: 0,
    },
  ];
  reloadControl = [];

  constructor() {
    makeAutoObservable(this);
  }
  setReloadControl() {
    this.reloadControl.push(true);
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

  updateBestScore(currentScore) {
    this.bestScore.filter((element) => {
      if (element.pair === currentScore.pair) {
        if (element.score > currentScore.score || element.score === 0) {
          element.score = currentScore.score;
        }
      }
    });
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
  shuffleAndSaveDeck() {
    this.deck = this.deck.sort(() => Math.random() - 0.5);
  }
  flushDeck() {
    this.game.foundPair = 0;
    this.game.totalFlipCount = 0;
    this.deck.length = 0;
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
  resumeGame(deck, prevTotalCount, prevFoundPairCount, currentBestScore) {
    // retrieve the prev total count
    this.game.totalFlipCount = parseInt(prevTotalCount);

    this.deck = [...deck];

    // retrieve the prev option
    this.game.option = this.deck.length / 2;

    // retrieve the prev found-pair
    this.game.foundPair = parseInt(prevFoundPairCount);

    this.bestScore = currentBestScore;
  }
  resumeBestScore(scores) {
    this.bestScore = scores;
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
