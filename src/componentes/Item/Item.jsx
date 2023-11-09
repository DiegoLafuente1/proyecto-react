import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom

const Item = ({ id, name, img, price, stock, description }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio : ${price}</p>
        <p className="Info">Stock disponible : {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`}>Ver Detalle</Link> {/* Enlace que dirige a la vista de detalle del producto */}
      </footer>
    </article>
  );
};

export default Item;
