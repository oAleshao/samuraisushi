import React, { useEffect } from 'react';
import { sets_list } from '../../all-products-list/temp-product-sets.js';
import ProductItem from '../body-element/product-item';
import { useDispatch, useSelector } from 'react-redux';
import { setMainList } from '../../slices/PageFilterSlice.js';
import FilterBox from '../body-element/filter-box.jsx';

const SetsPage = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMainList(sets_list));
    }, []);

    return (
        <div id='sets-page-style'>
            <FilterBox pageName={'Sests'}></FilterBox>
            <div className='all-items-style '>
                {filter.filterList?.map((item) => (<ProductItem {...item} item={item} isFood={true} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default SetsPage;
