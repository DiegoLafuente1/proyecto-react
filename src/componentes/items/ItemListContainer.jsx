import { useEffect, useState } from "react";
import { mFetch } from "../../helpers/mFetch";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect (() => {
        

        mFetch ()
            .then (response => {
                setProducts(response)
            })
            .catch (error => {
                console.error(error)
            })
    },  [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer