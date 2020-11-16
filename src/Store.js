import React from "react";
import { useLocalStore } from "mobx-react";

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    user: {
      isLogged: false,
    },
    deck: [],
    game: {
      option: 0,
      flippedCards: [],
      valipFlipCount: 0,
      totalFlipCount: 0,
    },
    setLogin(boolean) {
      this.user.isLogged = boolean;
    },
    setOption(option) {
      this.game.option = option;
    },
    cardPush(card) {
      this.deck.push(card);
    },
    shuffleDeck() {
      this.deck = this.deck.sort(() => Math.random() - 0.5);
    },
    showDeck() {
      console.log([...this.deck]);
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
