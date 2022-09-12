import React from "react";
import ProductCard from "../components/cards/productsCard/ProductCard";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  return (
    <div>
      <h1 className="title">Nuestros productos</h1>
      <div className="productCardContainer">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsPage;
