import React, { useEffect } from 'react';
import { soups_list } from '../../all-products-list/temp-product-soups';
import ProductItem from '../body-element/product-item';
import { useDispatch, useSelector } from 'react-redux';
import FilterBox from '../body-element/filter-box';
import { setMainList } from '../../slices/PageFilterSlice';

const SoupsPage = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMainList(soups_list));
    }, []);

    return (
        <div id='soups-page-style'>
            <FilterBox pageName={'Soups'}></FilterBox>
            <div className='all-items-style '>
                {filter.filterList?.map((item) => (<ProductItem {...item} item={item} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default SoupsPage;
