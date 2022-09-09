import React from "react";
import Button from "../components/button/Button";
import ProductCard from "../components/cards/productsCard/ProductCard";
import QuickShopCard from "../components/cards/quickshop/quickShopCard";
import Carrusel from "../components/carrusel/Carrusel";
import Gift from "../components/gift/Gift";
import "../styles/HomePage.css";

const beers = [
  {
    id: "1",
    name: "IPA",
    price: "220",
  },
  {
    id: "2",
    name: "APA",
    price: 260,
  },
  {
    id: "3",
    name: "PILSNER",
    price: 220,
  },
  {
    id: "4",
    name: "BARLEY",
    price: 240,
  },
  {
    id: "5",
    name: "RAUCH",
    price: 230,
  },
];

const HomePage = (props) => {
  return (
<>
      <div className="welcome_container">
        <div className="welcome_image">
          <div className="welcome_text">
            <h1>Numen Beer</h1>
            <h3>Compartimos el código de una buena cerveza</h3>
            <Button text="Conocé más" className="primary" url='e-Shop'/>
          </div>
        </div>
      </div>
      <div className="QS_container">
        <h2>Ofertas del día</h2>
        <div className="QS_cardContainer">
          {beers.map((item) => (
            <QuickShopCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.name}
            />
          ))}
        </div>
      </div>
      <Gift/>
      <div className="QS_container">
        <h2>Descubre nuestras variedades</h2>
      </div>
      <div class="productCardContainer">
        <ProductCard />
      </div>
      <div className="center_container">
        <div className="center_image">
          <div className="center_text">
            <h2>Te invitamos a conocer nuestra fábrica</h2>
            <h3>logo</h3>
            <Button text="Me interesa" className="primary" url='e-Shop'/>
          </div>
        </div>
      </div>
      <Carrusel />
    </> 
  );
};

export default HomePage;
