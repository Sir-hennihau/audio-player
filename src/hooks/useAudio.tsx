import { useState, useEffect } from "react";
import { setIsPlaying } from "../store/playerStore.ts/playerSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/root-store/rootStoreHooks";

export const useAudio = (url: string) => {
  // --- STATE ---

  const [audio, setAudio] = useState(new Audio(url));
  const { isPlaying } = useAppSelector(({ player }) => player);
  const dispatch = useAppDispatch();

  // --- EFFECTS ---

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  useEffect(() => {
    setAudio(new Audio(url));

    isPlaying && audio.pause();

    /* eslint-disable react-hooks/exhaustive-deps*/
  }, [url]);

  useEffect(() => {
    const onEnded = () => {
      dispatch(setIsPlaying(false));
    };

    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("ended", onEnded);
    };
  }, [audio, dispatch]);
};
