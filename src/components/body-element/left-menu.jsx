import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import sushi from '../../img/sushi.png'
import sets from '../../img/sushi (1).png'
import drinks from '../../img/soda.png'
import other from '../../img/chopstick.png'
import soup from '../../img/ramen.png'
import { useDispatch, useSelector } from 'react-redux';
import { togglePage, setOpenPage } from '../../slices/OpenPageSlice'
import LinkLeftMenu from './link-left-menu';

const LeftMenu = () => {

    return (
        <div id='left-menu-body'>
            <LinkLeftMenu pageName={'sushipage'} imgLink={sushi}>sushi/rolls</LinkLeftMenu>
            <LinkLeftMenu pageName={'setspage'} imgLink={sets}>sets</LinkLeftMenu>
            <LinkLeftMenu pageName={'soupspage'} imgLink={soup}>soups</LinkLeftMenu>
            <LinkLeftMenu pageName={'beveragespage'} imgLink={drinks}>beverages</LinkLeftMenu>
            <LinkLeftMenu pageName={'otherspage'} imgLink={other}>other</LinkLeftMenu>
        </div>
    );
}

export default LeftMenu;
