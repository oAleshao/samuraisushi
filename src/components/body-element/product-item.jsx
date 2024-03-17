import React from 'react';
import fireImg from '../../img/fire.png'
import spicy from '../../img/chilli.png'
import '../../index.css'

const ProductItem = ({ id, name, img, price, discount, weight, pcs, contains, isHot, isSpicy, isFood }) => {

    const discountBox = discount !== 0 ?
        <>
            <div className='discount-style-box'>
                <p>sale {discount}%</p>
            </div>
            <div className='discount-shadow-style-box'></div>
        </> : ''

    const hotBox = isHot ?
        <>
            <div className='hot-img-style'>
                <img src={fireImg} alt="hot" />
            </div>
        </> : ''

    const spicyBox = isSpicy ?
        <>
            <div className='spicy-img-style'>
                <img src={spicy} alt="spicy" />
            </div>
        </> : ''

    const priceBox = discount !== 0 ?
        <div className='original-amount-style'>
            <p>{price}$</p>
            <h2 id='price-discount'>{(price - price * discount / 100).toFixed(1)}</h2><h2 id='help-dollar'>$</h2>
        </div> : <h2>{price} $</h2>

    const weightBox = weight > 999 ?
        <div className='weight-box-style'>
            <p>{pcs}pcs/</p><p>{weight / 1000}kg</p>
        </div> : <div className='weight-box-style'>
            {isFood ?
                <>
                    <p>{pcs}pcs/</p>
                    <p>{weight}gm</p>
                </>
                : <>
                    <p>{weight}ml</p>
                </>}
        </div>

    return (
        <div className='product-item-style'>
            {discountBox}
            <div className='hot-spicy-box'>
                {hotBox}
                {spicyBox}
            </div>

            <div className='style-image-item'>
                <img src={img} alt={name} />
            </div>
            {console.log(name + " " + name.length)}
            <h1>{name.length < 20 ? name : name.slice(0, 20) + '...'}</h1>
            <div className='more-info-item-style'>
                {weightBox}
                {priceBox}
            </div>
            <button onClick={() => { console.log('work'); }}>Add to cart</button>
        </div>
    );
}

export default ProductItem;
