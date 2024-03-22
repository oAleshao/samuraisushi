import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMakeOrder } from '../../slices/CartSlice';

const ConfirmBox = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <button id='confirm-box-srtyle' onClick={() => { dispatch(toggleMakeOrder()) }}>
            <h1>Order {cart.totalPrice.toFixed(1)}$</h1>
        </button>
    );
}

export default ConfirmBox;
