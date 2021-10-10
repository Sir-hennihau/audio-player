import React, { useEffect } from "react";
import { apiGetSongs } from "../store/playerStore.ts/playerThunks";
import { useAppDispatch } from "../store/root-store/rootStoreHooks";

export const Player = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(apiGetSongs());
  }, [dispatch]);

  return <></>;
};
