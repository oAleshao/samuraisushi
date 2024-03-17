import React from 'react';
import { other_list } from '../../all-products-list/temp-product-other';
import ProductItem from '../body-element/product-item';

const OtherPage = () => {
    return (
        <div id='others-page-style'>
            <div></div>
            <div className='all-items-style '>
                {other_list.map((item) => (<ProductItem {...item} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default OtherPage;
