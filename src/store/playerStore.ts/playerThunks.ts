import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiGetSongs = createAsyncThunk("player/apiGetSongs", async () => {
  const songsResponse = await axios.get<
    { cover_image_path: string; music_file_path: string; name: string }[]
  >("https://api-stg.jam-community.com/song/trending");

  return songsResponse.data.map(
    ({ cover_image_path, music_file_path, name }) => ({
      name,
      coverPath: cover_image_path,
      // url: music_file_path,
      url: "https://www.kozco.com/tech/organfinale.wav",
    })
  );
});
