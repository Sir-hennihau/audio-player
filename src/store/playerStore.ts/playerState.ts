import { PlayerState } from "./playerTypes";

export const initialPlayerState: PlayerState = {
  currentlyPlaying: { coverPath: "", id: "", name: "", url: "" },
  isPlaying: false,
  songs: [],
};
