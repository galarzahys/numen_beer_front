import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataSlick } from './carruselData';
import './carrusel.css';
import { Link } from 'react-router-dom';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#00382A" }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#00382A"}}
        onClick={onClick}
      />
    );
}



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
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
          <h2><Link to="#">@Numen Beer en Instagram</Link></h2>
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
