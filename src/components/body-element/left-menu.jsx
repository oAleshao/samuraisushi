import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import sushi from '../../img/sushi.png'
import sets from '../../img/sushi (1).png'
import drinks from '../../img/soda.png'
import other from '../../img/chopstick.png'
import soup from '../../img/ramen.png'
import { useDispatch, useSelector } from 'react-redux';
import { togglePage } from '../../slices/OpenPageSlice'

const LeftMenu = () => {
    const openPage = useSelector(state => state.openPage)
    const dispatch = useDispatch();


    return (
        <div id='left-menu-body'>
            <div className='link-style-menu'>
                <img src={sushi} alt="sushi" />
                <NavLink className='item-style-menu' to='/sushipage' onClick={() => { dispatch(togglePage(true)) }}>sushi/rolls</NavLink>
            </div>
            <div className='link-style-menu'>
                <img src={sets} alt="sets" />
                <NavLink className='item-style-menu' to='/setspage' onClick={() => { dispatch(togglePage(true)) }}>sets</NavLink>
            </div>
            <div className='link-style-menu'>
                <img src={soup} alt="soup" />
                <NavLink className='item-style-menu' to='/soupspage' onClick={() => { dispatch(togglePage(true)) }}>soups</NavLink>
            </div>
            <div className='link-style-menu'>
                <img src={drinks} alt="beverages" />
                <NavLink className='item-style-menu' to='/beveragespage' onClick={() => { dispatch(togglePage(true)) }}>beverages</NavLink>
            </div>
            <div className='link-style-menu'>
                <img src={other} alt="other" />
                <NavLink className='item-style-menu' to='/otherspage' onClick={() => { dispatch(togglePage(true)) }}>other</NavLink>
            </div>

        </div>
    );
}

export default LeftMenu;
