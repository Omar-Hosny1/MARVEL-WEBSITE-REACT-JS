import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favorite-slice";
import moviesSlice from "./movies-slice";

const store = configureStore({
  reducer: { favorite: favoriteSlice.reducer, movies: moviesSlice.reducer },
});

export default store;
