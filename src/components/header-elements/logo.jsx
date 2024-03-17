import React from 'react';
import logo from '../../img/Screenshot_2024-03-14_173940-removebg-preview.png'
import { NavLink } from 'react-router-dom';
import { togglePage } from '../../slices/OpenPageSlice'
import { useDispatch } from 'react-redux';
const Logo = () => {
    const dispatch = useDispatch();
    return (
        <div id='logo-box'>
            <img src={logo} alt="samurai-logo" />
            <NavLink to='/' id='logo-home' onClick={() => { dispatch(togglePage()) }}>Samurai Sushi</NavLink>
        </div>
    );
}

export default Logo;
