import React from "react";
import styled from "styled-components";
import { Song } from "../store/playerStore.ts/playerTypes";

interface SongPreviewProps {
  song: Song;
}

export const SongPreview = ({
  song: { coverPath, name },
}: SongPreviewProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <Cover alt="name" src={coverPath} />
    </div>
  );
};

const Cover = styled.img`
  height: 150px;
  width: 150px;
`;
