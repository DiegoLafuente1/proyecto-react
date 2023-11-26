import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, price, stock, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const total = price * quantityAdded; // Calcular el total del precio

  const handleAddToCart = () => {
    const item = {
      id, name, price
    };
    addItem(item, quantityAdded);
  }

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock disponible: {stock}</p>
        <p className="Info">Descripción: {description}</p>
      </section>
      <footer>
        <div className="QuantitySection">
          <label>Cantidad:</label>
          <input
            type="number"
            value={quantityAdded}
            onChange={(e) => setQuantityAdded(parseInt(e.target.value))}
            min="1"
            max={stock}
          />
        </div>
        <p className="TotalPrice">Total: ${total}</p> {/* Mostrar el total */}
        <button className="AddToCartButton" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </footer>
    </article>
  );
};

export default ItemDetail;


