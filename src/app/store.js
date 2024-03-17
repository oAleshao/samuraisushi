import { configureStore } from "@reduxjs/toolkit";
import SushiReducer from '../slices/SushiSlice';
import OpenPageReducer from "../slices/OpenPageSlice";


export const store = configureStore({
    reducer: {
        sushiList: SushiReducer,
        openPage: OpenPageReducer
    }
});