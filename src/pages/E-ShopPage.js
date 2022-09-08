import React, { useState, useEffect } from 'react';
import ShopCard from '../components/cards/shopCards/ShopCard';
import "../styles/E-shop.css";
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { getReq } from '../helpers/ReqToApi';

const ShopPage = (props) => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
      setLoading(true);
      const response = await getReq(`/products`);
      setProducts(response.data);
      setLoading(false);
    };

    useEffect(() => {
      loadProducts();
    }, []);

    console.log(products)


    return (
      <div className='main_container'>
        <Box sx={{ flexGrow: 1, justifyContent: "space-around" }}>
          <h1>Numen Beer - Tienda Online</h1>
        <Grid container spacing={1}>
  
          {loading ? "Cargando..." : products.map(item => 
          (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
            <ShopCard id={item.id} name={item.name} packaging={item.packaging} stock={item.stock} price={item.price} description={item.description} image={item.image} />
            </Grid>
          ))
          }
        </Grid>
      </Box> 
      </div>   
    )
}

export default ShopPage;