import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialPlayerState } from "./playerState";
import { PlayerState } from "./playerTypes";

export const playerSlice = createSlice({
  name: "player",
  initialState: initialPlayerState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    /*     incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }, */
  },
});

export const {} = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
