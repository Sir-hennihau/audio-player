import { PlayerState } from "./playerTypes";

export const initialPlayerState: PlayerState = {
  currentlyPlaying: { coverPath: "", name: "", url: "" },
  isPlaying: false,
  songs: [],
};
