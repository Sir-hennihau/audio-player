export interface PlayerState {
  currentlyPlaying: Song;
  isPlaying: boolean;
  songs: Song[];
}

export type Song = { coverPath: string; name: string; url: string };
