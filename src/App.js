import React from "react";
import { useStore } from "./Store";

function App() {
  const store = useStore();

  console.log("store is here", store.user.isLogged);

  return <div>App Component Works</div>;
}

export default App;
