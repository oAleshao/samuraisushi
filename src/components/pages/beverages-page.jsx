import React from 'react';
import { beverages_list } from '../../all-products-list/temp-product-beverages';
import ProductItem from '../body-element/product-item';


const BeveragesPage = () => {
    return (
        <div id='beverages-page-style'>
            <div></div>
            <div className='all-items-style '>
                {beverages_list.map((item) => (<ProductItem {...item} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default BeveragesPage;
