import { createSlice } from "@reduxjs/toolkit";

const recentlyAddedSlice = createSlice({
    name: 'recentlyAddedSlice',
    initialState: [],
    reducers: {
        addToRecentlyAdded: (state, action) => {
            const findClip = state.find((clip) => clip.id === action.payload.id);
            if (!findClip) {
                state.push(action.payload);
            }
        },
        removeFromRecentlyAdded: (state, action) => {
            return state.filter(clip => clip.id !== action.payload.id);
        }
    }
})

// eslint-disable-next-line no-empty-pattern
export const { addToRecentlyAdded, removeFromRecentlyAdded } = recentlyAddedSlice.actions;
export default recentlyAddedSlice.reducer;