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
            <h2>{item.name}</h2>
            )
        })
            
    )};
        
        </div>
    )
}

export default ProductsPage;