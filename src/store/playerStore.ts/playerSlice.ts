import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialPlayerState } from "./playerState";
import { apiGetSongs } from "./playerThunks";
import { Song } from "./playerTypes";

export const playerSlice = createSlice({
  name: "player",
  initialState: initialPlayerState,
  reducers: {
    setCurrentlyPlayingSong: (state, action: PayloadAction<Song>) => {
      /*       if (state.currentlyPlaying.name === action.payload.name) {
        state.currentlyPlaying = { coverPath: "", name: "", url: "" };

        return;
      }
      */
      state.currentlyPlaying = action.payload;
    },

    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiGetSongs.fulfilled, (state, action) => {
      state.songs = action.payload;
    });
  },
});

export const { setCurrentlyPlayingSong, setIsPlaying } = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
