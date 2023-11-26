import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  const handleCheckout = () => {

    console.log('Detalles de la compra:', cart);


    alert('¡Compra realizada!');

  };

  if (totalQuantity === 0) {
    return (
      <div className='Carrito-vacio'>
        <h1>No hay items en el carrito</h1>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map(p => (
        <div key={p.id} className="CartItemContainer">
          <CartItem {...p} />
          <p className="CartItemTotal">Total por producto: ${p.price * p.quantity}</p>
        </div>
      ))}
      <h3>Total general: ${total}</h3>
      <button onClick={() => clearCart()} className="button">
        Limpiar carrito
      </button>
      <button onClick={handleCheckout} className="button">
        Finalizar Compra
      </button>
    </div>
  );
};

export default Cart;


