import React from "react";
import { Provider } from "react-redux";
import { Player } from "./components/player";
import { rootStore } from "./store/root-store/rootStore";

const App = () => {
  return (
    <Provider store={rootStore}>
      <Player />
    </Provider>
  );
};

export default App;
