import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';



const ProductsPage = (props) => {

    const { products, loading } = useContext(ProductsContext);

    return (
        <div>
            <h1>Productos</h1>
           {loading ? (
          <p>Cargando...</p>
        ) : ( products.map(item => {
            return (
                <div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            </div>
            )
        })
            
    )};
        
        </div>
    )
}

export default ProductsPage;