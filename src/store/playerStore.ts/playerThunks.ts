import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiGetSongs = createAsyncThunk("player/apiGetSongs", async () => {
  const songsResponse = await axios.get<
    { cover_image_path: string; music_file_path: string; name: string }[]
  >("https://api-stg.jam-community.com/song/trending");

  // TODO: Reenable correct url after API is fixed
  return songsResponse.data.map(
    ({ cover_image_path, music_file_path, name }, index) => ({
      name,
      coverPath: cover_image_path,
      // url: music_file_path,
      url:
        index === 0
          ? "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
          : index === 1
          ? "https://www.kozco.com/tech/organfinale.wav"
          : index === 2
          ? "https://www.kozco.com/tech/LRMonoPhase4.mp3"
          : index === 3
          ? "https://www.kozco.com/tech/piano2.wav"
          : index === 4
          ? "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav"
          : index === 5
          ? "https://www.kozco.com/tech/32.mp3"
          : "",
    })
  );
});
