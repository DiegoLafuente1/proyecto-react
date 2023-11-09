import './ItemDetail.css';

const ItemDetail = ({ id, name, img, price, stock, description }) => {
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
        {/* Aquí puedes incluir el componente de contador de elementos o cualquier otra funcionalidad que desees */}
        {/* <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} /> */}
      </footer>
    </article>
  );
};

export default ItemDetail;

