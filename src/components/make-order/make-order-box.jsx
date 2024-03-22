import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMakeOrder } from '../../slices/CartSlice';

const MakeOrderBox = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div id='make-order'>
            <CloseIcon id='close-make-order' onClick={() => { dispatch(toggleMakeOrder()) }}></CloseIcon>
        </div>
    );
}

export default MakeOrderBox;
