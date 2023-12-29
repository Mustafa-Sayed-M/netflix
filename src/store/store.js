import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import seriesSlice from "./slices/seriesSlice";
import recentlyAddedSlice from "./slices/recentlyAddedSlice";

export const store = configureStore({
    reducer: {
        movies: moviesSlice,
        series: seriesSlice,
        recentlyAdded: recentlyAddedSlice,
    }
});