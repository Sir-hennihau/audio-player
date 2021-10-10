import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiGetSongs = createAsyncThunk("player/apiGetSongs", async () => {
  const songsResponse = await axios.get(
    "https://api-stg.jam-community.com/song/trending"
  );

  console.log("songsResponse", songsResponse);
});
