import { createAsyncThunk } from "@reduxjs/toolkit";

import { httpClient } from "../../api/index";

export const getMoviesAsync = createAsyncThunk(
  "movies/getMoviesAsync",
  async (searchText: string) => {
    const res = await httpClient.get(searchText);

    return res.data;
  }
);
