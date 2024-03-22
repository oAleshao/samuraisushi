import React, { useEffect, useState } from 'react';
import ProductItem from '../body-element/product-item';
import { sushi_list } from '../../all-products-list/temp-product-list.js';
import FilterBox from '../body-element/filter-box.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setMainList } from '../../slices/PageFilterSlice.js';

const SushiPage = () => {

    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMainList(sushi_list));
    }, []);

    return (
        <div id='sushi-page-style'>
            <FilterBox pageName={'Sushi / rolls'}></FilterBox>
            <div className='all-items-style '>
                {filter.filterList?.map((item) => (<ProductItem {...item} item={item} isFood={true} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default SushiPage;
