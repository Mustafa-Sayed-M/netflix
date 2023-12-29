import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("moviesSlice/fetchMovies", async (api_url) => {
    const res = await fetch(api_url);
    const data = await res.json();
    return data;
})

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            return action.payload.results;
        })
    }
})

// eslint-disable-next-line no-empty-pattern
export const {} = moviesSlice.actions;
export default moviesSlice.reducer;