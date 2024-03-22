import React, { useState } from 'react';
import '../../index.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toogleCart } from '../../slices/CartSlice';

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispath = useDispatch();

    return (
        <div id='cart-box'>
            <ShoppingCartOutlinedIcon id='cart-icon-style' onClick={() => { dispath(toogleCart()); }}></ShoppingCartOutlinedIcon>
            <div className='count-items-cart'>
                <p>{cart.countItems}</p>
            </div>
        </div>
    );
}

export default Cart;
