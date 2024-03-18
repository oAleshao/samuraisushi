import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartData: [],
    countItems: 0,
    isOpen: false,
}

export const CartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            for (let i = 0; i < state.cartData.length; i++) {
                if (state.cartData[i][0]?.name === action.payload.name) {
                    return;
                }
            }
            state.cartData.push([action.payload, 1]);
            state.countItems++;
        },
        toogleCart: (state, action) => {
            state.isOpen = state.isOpen !== '' ? 'activeCart' : '';
        }
    }
});

export const { addToCart, toogleCart } = CartSlice.actions;
export default CartSlice.reducer;