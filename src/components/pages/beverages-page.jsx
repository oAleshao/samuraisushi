import React, { useEffect } from 'react';
import { beverages_list } from '../../all-products-list/temp-product-beverages';
import ProductItem from '../body-element/product-item';
import { useDispatch, useSelector } from 'react-redux';
import FilterBox from '../body-element/filter-box';
import { setMainList } from '../../slices/PageFilterSlice';


const BeveragesPage = () => {

    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMainList(beverages_list));
    }, []);

    return (
        <div id='beverages-page-style'>
            <FilterBox pageName={'Beverages'}></FilterBox>
            <div className='all-items-style '>
                {filter.filterList?.map((item) => (<ProductItem {...item} item={item} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default BeveragesPage;
