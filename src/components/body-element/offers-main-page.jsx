import React from 'react';
import ProductItem from './product-item';

const OffersMainPage = ({ list }) => {
    return (
        <section className='all-items-style'>
            {list?.map((item) => (<ProductItem {...item} item={item} isFood={true} key={item.id}></ProductItem>))}
        </section>
    );
}

export default OffersMainPage;
