import React from "react";
import { ProductCardData } from "./ProductCardData";
import "./ProductCard.css";
import Button from "../../button/Button";

const ProductCard = () => {
  return ProductCardData.map((item) => (
    <div class="ProductCard">
      <div
        class="card-imgbox"
        style={{
          backgroundImage: `url('./images/products/${item.productImage}.png')`,
        }}
      ></div>
    
      <div class="card-text">
        <h3>{item.productName}</h3>
        <p>
          {item.description}
        </p>
        <Button style={{marginBottom:'0'}} text="Conocer más" className="secondary" />  
      </div>
    </div>
    
  ));
};

export default ProductCard;
