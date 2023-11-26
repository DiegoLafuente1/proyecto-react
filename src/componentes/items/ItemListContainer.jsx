import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const productosRef = collection(db, "products");
    getDocs(productosRef)
      .then((resp) => {
        
        setProducts(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id}
          })
        )
      })
  });


  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
