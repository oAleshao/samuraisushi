import React, { useEffect, useState } from 'react';

const CartItem = ({ id, name, img, price, discount, weight, pcs, contains, isHot, isSpicy, isFood, item, _count }) => {

    const [count, setCount] = useState(_count);

    const showPrice = () => {
        if (discount !== 0)
            return (count * (price - price * discount / 100)).toFixed(1);
        return (price * count).toFixed(1);
    }

    const weightBox = <div className='weight-box-cart-style'>
        <p>{pcs}pcs/</p><p>{weight}</p>
    </div>

    return (
        <div className='cart-item-style'>
            <div className='img-item-cart'>
                <img src={img} alt={name} />
            </div>
            <div className='about-item-cart'>
                <section className='title-item-cart'>
                    <h1>{name}</h1>
                </section>
                {weightBox}
                <section className='counter-item-cart'>
                    <section className='buttons-item-cart'>
                        <button onClick={() => { if (count - 1 !== 0) setCount(count - 1) }}>-</button>
                        <p>{count}</p>
                        <button onClick={() => { setCount(count + 1) }}>+</button>
                    </section>
                    <section className='price-item-cart'>
                        <p>{showPrice()} $</p>
                    </section>
                </section>
            </div>
            <div className='remove-from-cart'>

            </div>
        </div>
    );
}

export default CartItem;
