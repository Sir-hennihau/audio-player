export interface PlayerState {
  currentlyPlaying: Song;
  isPlaying: boolean;
  songs: Song[];
}

export type Song = {
  coverPath: string;
  id: string;
  isLiked?: boolean;
  name: string;
  url: string;
};
