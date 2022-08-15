
import React, { useEffect } from "react";
import { useState, createContext } from "react";
import axios from "axios";


export const ProductsContext = createContext()

const url_base_api = 'http://demo5769301.mockable.io/';

const ProductsContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect (() => {
      const LoadProducts = async () => {
        setLoading (true);
        const response = await axios.get(`${url_base_api}/products`);
        setProducts(response.data);
        console.log(response.data)
        setLoading(false);
      };

      LoadProducts();

    }, []);

    const data = { products, loading }

  return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ProductsContextProvider;