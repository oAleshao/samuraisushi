import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './cart-item';
import MyLiner from '../body-element/my-liner';
import { CartOpenContext } from '../../contexts/cartOpenContext'

const CartBody = ({ isOpen }) => {

    const cart = useSelector(state => state.cart);
    const [activeClass, setactiveClass] = useState('');

    return (
        <div id='cart-body' className={`${isOpen}`}>
            <h1 className='h1-style'>Cart</h1>
            <MyLiner></MyLiner>
            {activeClass}
            <section className='all-items-cart'>
                {cart.cartData.map((item) => (<CartItem {...item[0]} _count={item[1]} item={item[0]} key={item[0].name}></CartItem>))}
            </section>
            <MyLiner></MyLiner>
            <section className='confirm-box-cart'>

            </section>
        </div>
    );
}

export default CartBody;
