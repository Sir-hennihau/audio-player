import { configureStore } from "@reduxjs/toolkit";
// ...

export const rootStore = configureStore({
  reducer: {
    player: playerReducer,
  },
});
