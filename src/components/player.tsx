import React, { useEffect } from "react";
import { apiGetSongs } from "../store/playerStore.ts/playerThunks";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/root-store/rootStoreHooks";
import { SongPreview } from "./songPreview";

export const Player = () => {
  // --- STATE ---

  const dispatch = useAppDispatch();

  const { songs } = useAppSelector(({ player }) => player);

  // --- EFFECTS ---

  useEffect(() => {
    dispatch(apiGetSongs());
  }, [dispatch]);

  // --- RENDER ---

  return (
    <div>
      {songs.map((song) => (
        <SongPreview song={song} />
      ))}
    </div>
  );
};
