import React from 'react';
import ProductItem from '../body-element/product-item';
import { sushi_list } from '../../all-products-list/temp-product-list.js';

const SushiPage = () => {

    // const sushiList = useSelector(state => state.sushiList);

    return (
        <div id='sushi-page-style'>
            <div></div>
            <div className='all-items-style '>
                {sushi_list.map((item) => (<ProductItem {...item} isFood={true} key={item.id}></ProductItem>))}
            </div>
        </div>
    );
}

export default SushiPage;
