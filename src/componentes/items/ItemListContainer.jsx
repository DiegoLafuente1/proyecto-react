import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { mFetch } from '../../helpers/mFetch';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    mFetch().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
