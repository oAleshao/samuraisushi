import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isOpen: false,
    openPage: ''
}

export const OpenPageSlice = createSlice({
    name: 'open-page',
    initialState,
    reducers: {
        togglePage: (state, action) => {
            state.isOpen = action.payload;
        },
        setOpenPage: (state, action) => {
            state.openPage = action.payload;
        }

    }
});

export const { togglePage, setOpenPage } = OpenPageSlice.actions;
export default OpenPageSlice.reducer;