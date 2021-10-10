import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { initialPlayerState } from "./playerState";
import { apiGetSongs, apiPostLike } from "./playerThunks";
import { Song } from "./playerTypes";

export const playerSlice = createSlice({
  name: "player",
  initialState: initialPlayerState,
  reducers: {
    setCurrentlyPlayingSong: (state, action: PayloadAction<Song>) => {
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

    builder.addCase(apiGetSongs.rejected, () => {
      toast.error("Error loading audio files.");
    });

    builder.addCase(apiPostLike.fulfilled, (state, action) => {
      const likedSongIndex = state.songs.findIndex(
        (song) => song.id === action.payload
      );

      state.songs[likedSongIndex].isLiked = true;
    });

    builder.addCase(apiPostLike.rejected, () => {
      toast.error("Error liking the song.");
    });
  },
});

export const { setCurrentlyPlayingSong, setIsPlaying } = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
