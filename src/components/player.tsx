import { useEffect } from "react";
import styled from "styled-components";
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

      <SongPreviewContainer>
        {songs.map((song, index) => (
          <SongPreview key={index} song={song} />
        ))}
      </SongPreviewContainer>
    </div>
  );
};

const SongPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
