import './ItemList.css'; 
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return ( 
    <div className='container mt-3' style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}> 
      {products.map(product => <Item key={product.id} {...product} />)}
    </div>
  );
};

export default ItemList;

