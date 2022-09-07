import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataSlick } from './carruselData';
import './carrusel.css';
import { Link } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";


// botones personalizados 

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return(
    <div className={className} onClick={onClick}>
      <ArrowBackIos className="iconSlick"/>
    </div>
  );
};

const NextBtn = (props) => {
  const {className, onClick} = props;
  return(
    <div className={className} onClick={onClick}>
      <ArrowForwardIos className="iconSlick"/>
    </div>
  );
};

const Carrusel = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PreviousBtn />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (

   <div className="container_slinder">
        <div className="title">
          <h2>@Numen Beer en Instagram</h2>
        </div>
        <Slider {...settings}>
          {dataSlick.map(item =>(
                <figure className="cards">
                  <div className="cards_img">
                    <img src={item.linkImg} alt={item.title} />
                  </div>
                  <h5>{item.frase}</h5>
                </figure>
              )
            )
          }
        </Slider>
      </div>
  )
}

export default Carrusel
