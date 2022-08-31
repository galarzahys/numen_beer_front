import React from 'react';
import ShopCard from '../components/cards/shopCards/ShopCard';
import { ProductCardData } from "../components/cards/productsCard/ProductCardData";
import "../styles/E-shop.css";
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const ShopPage = (props) => {
    return (
        <Box sx={{ flexGrow: 1, justifyContent: "space-around" }}>
        <Grid container spacing={1}>
  
          { ProductCardData.map(item => 
          (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
            <ShopCard name={item.productName} image={item.productImage} price={item.price} description={item.description} />
            </Grid>
            
  
          ))
          }
          <img src={"https://g4-numen-bucket.s3.sa-east-1.amazonaws.com/uploads/2a4a69a5-7529-44a8-a401-161c15c4d990"}></img>
        </Grid>
      </Box>    
    )
}

export default ShopPage;