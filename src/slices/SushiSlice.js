import { createSlice } from "@reduxjs/toolkit"
import { getAllSushi } from "../thunks/sushiThunk";

const initialState = {
    sushiList: [],
    loading: false,
    error: null
}

export const SushiSlice = createSlice({

    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllSushi.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllSushi.fulfilled, (state, acion) => {
                state.loading = false;
                console.log('work');
                console.log(acion.payload);
            })
            .addCase(getAllSushi.rejected, (state, action) => {
                state.loading = false;
                console.log('work error');

                state.error = action.payload;
            })
    }
});

export default SushiSlice.reducer;