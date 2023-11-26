import React from 'react';
import { Link } from 'react-router-dom';
import cart from './assets/carrito.svg';

const CartWidget = () => {
    return (
        <div className='Cart'>
            <Link to="/cart">
                <img src={cart} alt="cart-widget" />
            </Link>
        </div>
    );
};

export default CartWidget;
