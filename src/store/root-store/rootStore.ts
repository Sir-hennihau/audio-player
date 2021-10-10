import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "../playerStore.ts/playerSlice";

export const rootStore = configureStore({
  reducer: {
    player: playerReducer,
  },
});
