import { configureStore } from "@reduxjs/toolkit";
import SushiReducer from '../slices/SushiSlice';
import OpenPageReducer from "../slices/OpenPageSlice";
import CartReducer from "../slices/CartSlice";
import FilterReducer from "../slices/PageFilterSlice";


export const store = configureStore({
    reducer: {
        sushiList: SushiReducer,
        openPage: OpenPageReducer,
        cart: CartReducer,
        filter: FilterReducer
    }
});