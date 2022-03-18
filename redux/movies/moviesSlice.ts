import { createSlice } from "@reduxjs/toolkit";

import type { Movie } from "../../models/movie";

import { getMoviesAsync } from "./services";

export interface MoviesState {
  movies: Movie[];
  searchText: string;
  isLoading: boolean;
  error: string;
  activeSearchText: string;
}

const initialState: MoviesState = {
  movies: [],
  searchText: "",
  isLoading: false,
  error: "",
  activeSearchText: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: {
    [getMoviesAsync.pending.toString()]: (state: MoviesState, action: any) => {
      state.isLoading = true;
    },
    [getMoviesAsync.fulfilled.toString()]: (
      state: MoviesState,
      action: any
    ) => {
      if (action.payload?.Error) {
        state.error = action.payload.Error;
      } else {
        if (state.error !== "") state.error = "";
        state.movies = action.payload;
      }
      state.isLoading = false;
    },
    [getMoviesAsync.rejected.toString()]: (state: MoviesState, action: any) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const { setSearchText } = moviesSlice.actions;
export default moviesSlice.reducer;
