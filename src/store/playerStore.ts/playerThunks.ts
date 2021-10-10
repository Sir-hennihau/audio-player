import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiGetSongs = createAsyncThunk("player/apiGetSongs", async () => {
  const songsResponse = await axios.get<
    { name: string; cover_image_path: string }[]
  >("https://api-stg.jam-community.com/song/trending");

  return songsResponse.data.map(({ name, cover_image_path }) => ({
    name,
    coverPath: cover_image_path,
  }));
});
