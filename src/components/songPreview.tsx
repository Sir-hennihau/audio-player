import React from "react";
import styled from "styled-components";
import { Song } from "../store/playerStore.ts/playerTypes";
import PlayIcon from "../assets/icons/play.png";
import PauseIcon from "../assets/icons/pause.png";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/root-store/rootStoreHooks";
import {
  setCurrentlyPlayingSong,
  setIsPlaying,
} from "../store/playerStore.ts/playerSlice";

interface SongPreviewProps {
  song: Song;
}

export const SongPreview = ({
  song: { coverPath, name, url },
}: SongPreviewProps) => {
  // --- STATE ---

  const { currentlyPlaying, isPlaying } = useAppSelector(
    ({ player }) => player
  );

  const dispatch = useAppDispatch();

  // --- CALLBACKS ---

  const onIconClick = () => {
    if (!isPlaying) {
      dispatch(setCurrentlyPlayingSong({ coverPath, name, url }));
      dispatch(setIsPlaying(true));

      return;
    }

    if (currentlyPlaying.url !== url) {
      dispatch(setCurrentlyPlayingSong({ coverPath, name, url }));

      return;
    }

    dispatch(setIsPlaying(false));
  };

  // --- HELPERS ---

  const isBeingPlayed = name === currentlyPlaying.name && isPlaying;

  // --- RENDER ---

  return (
    <div>
      <h2>{name}</h2>
      <Cover alt="name" src={coverPath} />

      <IconContainer>
        <Icon
          onClick={onIconClick}
          src={isBeingPlayed ? PauseIcon : PlayIcon}
        />
      </IconContainer>
    </div>
  );
};

const Cover = styled.img`
  height: 150px;
  width: 150px;
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

const IconContainer = styled.div`
  display: flex;
`;
