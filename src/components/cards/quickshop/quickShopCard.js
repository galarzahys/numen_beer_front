import React from "react";
import Button from "../../button/Button";
import "./quickShopCard.css";
import accounting from "accounting";

const QuickShopCard = (props) => {
  const { id, name, image, price } = props;

  return (
    <>
      <div key={id}
        className="QC_container">
        <div className="QC_image" style={{
          backgroundImage: `url('./images/products/${image}.png')`,
        }}
      ></div>
        <div className="QC_info">
          <h5>{name}</h5>
          <p>{accounting.formatMoney(`${price}`, "$" )}</p>
          <Button text="Comprar ahora!" className="secondary"/>
        </div>
      </div>
    </>

  );
};

export default QuickShopCard