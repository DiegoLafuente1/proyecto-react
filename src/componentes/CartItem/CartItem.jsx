import React from 'react';


const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div className="CartItem">
      <div>
        <h4>{name}</h4>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
