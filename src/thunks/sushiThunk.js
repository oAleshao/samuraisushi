import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../api/index.mjs';


export const getAllSushi = createAsyncThunk('sushi/getAll', async (payload, { rejectWithValue }) => {
    try {
        const { data } = await api.get('/sushi');
        return data;
    }
    catch (ex) {
        return rejectWithValue(ex.response.data);
    }
});