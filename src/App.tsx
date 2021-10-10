import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Player } from "./components/player";
import { rootStore } from "./store/root-store/rootStore";

const App = () => {
  return (
    <Provider store={rootStore}>
      <Player />

      <ToastContainer />
    </Provider>
  );
};

export default App;
