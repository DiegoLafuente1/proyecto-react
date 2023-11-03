import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({id, name, img, price, stock, description}) => {
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio : ${price}
                </p>
                <p className="Info">
                    Stock disponible : {stock}
                </p>
                <p>
                    Descripcion : {description}
                </p>
                <p>
                    Precio : {price}
                </p>
            </section>
        </article>
    )
}

export default ItemDetail