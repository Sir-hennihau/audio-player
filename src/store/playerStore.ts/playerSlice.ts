import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialPlayerState } from "./playerState";
import { apiGetSongs } from "./playerThunks";
import { Song } from "./playerTypes";

export const playerSlice = createSlice({
  name: "player",
  initialState: initialPlayerState,
  reducers: {
    setCurrentlyPlayingSong: (state, action: PayloadAction<Song>) => {
      state.currentlyPlaying = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiGetSongs.fulfilled, (state, action) => {
      state.songs = action.payload;
    });
  },
});

export const { setCurrentlyPlayingSong } = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
