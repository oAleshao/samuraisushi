import React from 'react';
import Logo from './header-elements/logo';
import Search from './header-elements/search';
import Cart from './header-elements/cart';
import Login from './header-elements/login';

const Header = () => {
    return (
        <div id='header'>
            <Logo></Logo>
            <div id='right-content-header-box'>
                <Login></Login>
                <Cart></Cart>
            </div>
        </div>
    );
}

export default Header;
