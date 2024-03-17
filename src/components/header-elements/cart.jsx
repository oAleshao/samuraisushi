import React, { useState } from 'react';
import '../../index.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Cart = () => {

    const [amountCart, setAmountCart] = useState(0);

    return (
        <div id='cart-box'>
            <ShoppingCartOutlinedIcon id='cart-icon-style'></ShoppingCartOutlinedIcon>
            <p>{amountCart !== 0 ? amountCart + '$' : ''}</p>
        </div>
    );
}

export default Cart;
