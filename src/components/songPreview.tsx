import React from "react";
import styled from "styled-components";
import { Song } from "../store/playerStore.ts/playerTypes";
import PlayIcon from "../assets/icons/play.png";
import PauseIcon from "../assets/icons/pause.png";
import LikedIcon from "../assets/icons/liked.png";
import UnlikedIcon from "../assets/icons/unliked.png";

import {
  useAppDispatch,
  useAppSelector,
} from "../store/root-store/rootStoreHooks";
import {
  setCurrentlyPlayingSong,
  setIsPlaying,
} from "../store/playerStore.ts/playerSlice";
import { apiPostLike } from "../store/playerStore.ts/playerThunks";

interface SongPreviewProps {
  song: Song;
}

export const SongPreview = ({
  song: { coverPath, id, isLiked, name, url },
}: SongPreviewProps) => {
  // --- STATE ---

  const { currentlyPlaying, isPlaying } = useAppSelector(
    ({ player }) => player
  );

  const dispatch = useAppDispatch();

  // --- CALLBACKS ---

  const onIconClick = () => {
    if (!isPlaying) {
      dispatch(setCurrentlyPlayingSong({ coverPath, id, name, url }));
      dispatch(setIsPlaying(true));

      return;
    }

    if (currentlyPlaying.url !== url) {
      dispatch(setCurrentlyPlayingSong({ coverPath, id, name, url }));

      return;
    }

    dispatch(setIsPlaying(false));
  };

  const onLikeClick = () => {
    dispatch(apiPostLike(id));
  };

  // --- HELPERS ---

  const isBeingPlayed = name === currentlyPlaying.name && isPlaying;

  // --- RENDER ---

  return (
    <Container>
      <Title>{name}</Title>
      <Cover alt="name" src={coverPath} />

      <IconContainer>
        <Icon
          onClick={onIconClick}
          src={isBeingPlayed ? PauseIcon : PlayIcon}
        />

        <Icon onClick={onLikeClick} src={isLiked ? LikedIcon : UnlikedIcon} />
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-right: 25px;
  width: 150px;
`;

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
  justify-content: space-between;
`;

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
