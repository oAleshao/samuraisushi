import React, { useContext } from 'react';
import Logo from './header-elements/logo';
import Search from './header-elements/search';
import Cart from './header-elements/cart'
import CartBody from './header-elements/cart-body';
import Login from './header-elements/login';
import { CartOpenContext } from '../contexts/cartOpenContext';

const Header = () => {

    const { isOpen, toggleIsOpen } = useContext(CartOpenContext);



    return (
        <div id='header'>
            <Logo></Logo>
            <div id='right-content-header-box'>
                <Login></Login>
                <Cart toggleIsOpen={toggleIsOpen}></Cart>
            </div>
            <CartBody isOpen={isOpen}></CartBody>
        </div>
    );
}

export default Header;
