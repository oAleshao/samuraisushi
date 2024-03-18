import React from 'react';
import { sets_list } from '../../all-products-list/temp-product-sets.js';
import ProductItem from '../body-element/product-item';

const SetsPage = () => {
    return (
        <div id='sets-page-style'>
            <div></div>
            <div className='all-items-style '>
                {sets_list.map((item) => (<ProductItem {...item} item={item} isFood={true} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default SetsPage;
