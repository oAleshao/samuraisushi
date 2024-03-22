import React, { useEffect } from 'react';
import { setOpenPage, togglePage } from '../../slices/OpenPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const LinkLeftMenu = ({ pageName, imgLink, children }) => {

    const page = useSelector(state => state.openPage);
    const dispatch = useDispatch();

    return (
        <div className={`${'link-style-menu'} ${page.openPage === pageName ? 'activePage' : ''}`}>
            <img src={imgLink} alt={pageName} />
            <NavLink className='item-style-menu' to={'/' + pageName} onClick={() => {
                dispatch(togglePage(true));
                dispatch(setOpenPage(pageName));
            }
            }>{children}</NavLink>
        </div>
    );
}

export default LinkLeftMenu;
