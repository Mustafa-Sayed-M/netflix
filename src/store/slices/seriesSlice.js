import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "../../api/constants";

export const fetchSeries = createAsyncThunk("seriesSlice/fetchSeries", async () => {
    const api_url = `${constants.BASE_API_URL}/${constants.SERIES_API_URL}?api_key=${constants.API_KEY}`
    const res = await fetch(api_url);
    const data = await res.json();
    return data;
})

const seriesSlice = createSlice({
    name: 'seriesSlice',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSeries.fulfilled, (state, action) => {
            return action.payload.results;
        })
    }
})

// eslint-disable-next-line no-empty-pattern
export const {} = seriesSlice.actions;
export default seriesSlice.reducer;