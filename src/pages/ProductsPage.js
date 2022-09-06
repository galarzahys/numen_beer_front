import React, { useState } from 'react';
import { getReq } from '../helpers/ReqToApi';




const ProductsPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        setLoading(true);
        const response = await getReq(`/products`);
        setProducts(response.data);
        setLoading(false);
      };

    return (
        <div className='main_container'>
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