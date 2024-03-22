import React, { useEffect } from 'react';
import { other_list } from '../../all-products-list/temp-product-other';
import ProductItem from '../body-element/product-item';
import { useDispatch, useSelector } from 'react-redux';
import { setMainList } from '../../slices/PageFilterSlice';
import FilterBox from '../body-element/filter-box';

const OtherPage = () => {

    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMainList(other_list));
    }, []);

    return (
        <div id='others-page-style'>
            <FilterBox pageName={'Others'}></FilterBox>
            <div className='all-items-style '>
                {filter.filterList?.map((item) => (<ProductItem {...item} item={item} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default OtherPage;
