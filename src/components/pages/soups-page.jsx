import React from 'react';
import { soups_list } from '../../all-products-list/temp-product-soups';
import ProductItem from '../body-element/product-item';
import Footer from '../body-element/footer';

const SoupsPage = () => {
    return (
        <div id='soups-page-style'>
            <div></div>
            <div className='all-items-style '>
                {soups_list.map((item) => (<ProductItem {...item} item={item} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default SoupsPage;
