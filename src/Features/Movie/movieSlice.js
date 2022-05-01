import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  trending: null,
  newMovie: null,
  original: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.trending = action.payload.trending;
      state.newMovie = action.payload.newMovie;
      state.original = action.payload.original;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommended = (state) => state.movie.recommended;
export const selectTrending = (state) => state.movie.trending;
export const selectNewMovies = (state) => state.movie.newMovie;
export const selectOriginals = (state) => state.movie.original;

export default movieSlice.reducer;
