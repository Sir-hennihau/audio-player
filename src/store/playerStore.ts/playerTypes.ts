export interface PlayerState {
  currentlyPlaying: Song;
  songs: Song[];
}

export type Song = { coverPath: string; name: string; url: string };
