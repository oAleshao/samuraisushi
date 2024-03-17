import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";

const initialState = {
    isOpen: false,
}

export const OpenPageSlice = createSlice({
    name: 'open-page',
    initialState,
    reducers: {
        togglePage: (state, action) => {
            state.isOpen = action.payload;
        }
    }
});

export const { togglePage } = OpenPageSlice.actions;
export default OpenPageSlice.reducer;