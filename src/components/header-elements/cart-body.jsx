import { useSelector } from 'react-redux';
import CartItem from './cart-item';
import MyLiner from '../body-element/my-liner';
import ConfirmBox from '../header-elements/confirm-box'

const CartBody = () => {

    const cart = useSelector(state => state.cart);

    return (
        <div id='cart-body' className={`${cart.isOpen ? 'activeCart' : ''}`}>
            <h1 className='h1-style'>Cart</h1>
            <MyLiner></MyLiner>
            <section className='all-items-cart'>
                {cart.cartData.map((item) => (<CartItem {...item[0]} _count={item[1]} item={item[0]} key={item[0].name}></CartItem>))}
            </section>
            <MyLiner></MyLiner>
            <section className='confirm-box-cart'>
                <ConfirmBox></ConfirmBox>
            </section>
        </div>
    );
}

export default CartBody;
