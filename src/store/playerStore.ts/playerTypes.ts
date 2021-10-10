export interface PlayerState {
  currentlyPlaying: string;
  songs: Song[];
}

export type Song = { name: string; coverPath: string };
