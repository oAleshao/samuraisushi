import React, { useState } from 'react';
import { CartOpenContext } from '../contexts/cartOpenContext';


const CartOpenProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState('');

    const toggleIsOpen = () => setIsOpen(isOpen === '' ? 'activeCart' : '');


    return (
        <CartOpenContext.Provider value={{ isOpen, toggleIsOpen }}>
            {children}
        </CartOpenContext.Provider>
    );
}

export default CartOpenProvider;
