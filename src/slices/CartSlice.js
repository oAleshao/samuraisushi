import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartData: [],
    countItems: 0,
    totalPrice: 0,
    isOpen: false,
    makeOrder: false,
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

            if (action.payload.discount !== 0)
                state.totalPrice += +(action.payload.price - (action.payload.price * action.payload.discount / 100));
            else
                state.totalPrice += +action.payload.price;

        },
        addItem: (state, action) => {
            for (let i = 0; i < state.cartData.length; i++) {
                if (state.cartData[i][0]?.name === action.payload.name) {
                    state.cartData[i][1]++;

                    if (action.payload.discount !== 0)
                        state.totalPrice += +(action.payload.price - (action.payload.price * action.payload.discount / 100));
                    else
                        state.totalPrice += +action.payload.price;
                    return;
                }
            }
        },
        removeItem: (state, action) => {
            for (let i = 0; i < state.cartData.length; i++) {
                if (state.cartData[i][0]?.name === action.payload.name) {
                    state.cartData[i][1]--;
                    if (action.payload.discount !== 0)
                        state.totalPrice -= (action.payload.price - (action.payload.price * action.payload.discount / 100));
                    else
                        state.totalPrice -= + action.payload.price;

                    return;
                }
            }
        },
        removeFromCart: (state, action) => {
            state.cartData = [...state.cartData.filter((item) => item[0].name !== action.payload.name)];
            state.countItems--;
            state.totalPrice = 0;
            for (let i = 0; i < state.cartData.length; i++) {
                if (state.cartData[i][0].discount !== 0)
                    state.totalPrice += +(state.cartData[i][1] * (state.cartData[i][0].price - (state.cartData[i][0].price * state.cartData[i][0].discount / 100)));
                else
                    state.totalPrice += +(state.cartData[i][0].price * state.cartData[i][1])
            }
        }
        ,
        toogleCart: (state, action) => {
            state.isOpen = state.isOpen ? false : true;
        },
        toggleMakeOrder: (state) => {
            state.makeOrder = state.makeOrder ? false : true;
        }
    }
});

export const { addToCart, toogleCart, addItem, removeItem, removeFromCart, toggleMakeOrder } = CartSlice.actions;
export default CartSlice.reducer;