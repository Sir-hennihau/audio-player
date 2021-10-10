import { useEffect } from "react";
import { useAudio } from "../hooks/useAudio";
import { apiGetSongs } from "../store/playerStore.ts/playerThunks";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/root-store/rootStoreHooks";
import { SongPreview } from "./songPreview";

export const Player = () => {
  // --- STATE ---

  const dispatch = useAppDispatch();

  const { currentlyPlaying, songs } = useAppSelector(({ player }) => player);

  useAudio(currentlyPlaying.url);

  // --- EFFECTS ---

  useEffect(() => {
    dispatch(apiGetSongs());
  }, [dispatch]);

  // --- RENDER ---

  return (
    <div>
      <h1>Audio Player</h1>

      {songs.map((song, index) => (
        <SongPreview key={index} song={song} />
      ))}
    </div>
  );
};
