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
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
