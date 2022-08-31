import React from 'react';
import { ProductCardData } from "../components/cards/productsCard/ProductCardData";
import ShopCard from '../components/cards/shopCards/ShopCard';
import "../styles/E-shop.css";
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const ShopPage = (props) => {
    return (
        <Box sx={{ flexGrow: 1, justifyContent: "space-around" }}>
          <h1>Numen Beer - Tienda Online</h1>
        <Grid container spacing={1}>
  
          { ProductCardData.map(item => 
          (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
            <ShopCard name={item.productName} image={item.productImage} price={item.price} description={item.description} />
            </Grid>
          ))
          }
        </Grid>
      </Box>    
    )
}

export default ShopPage;