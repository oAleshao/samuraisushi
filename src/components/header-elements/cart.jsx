import React, { useState } from 'react';
import '../../index.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toogleCart } from '../../slices/CartSlice';

const Cart = ({ toggleIsOpen }) => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div id='cart-box'>
            <ShoppingCartOutlinedIcon id='cart-icon-style' onClick={() => { toggleIsOpen() }}></ShoppingCartOutlinedIcon>
            <div className='count-items-cart'>
                <p>{cart.countItems}</p>
            </div>
        </div>
    );
}

export default Cart;
