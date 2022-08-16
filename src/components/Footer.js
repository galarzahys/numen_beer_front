import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons';
import cerveza from '../assets/images/cervezaLogo.png'
 
const Footer = () => {
  return (
    <>  
        <footer className="footer" style={footer}>

            {/* SECTION REDES */}
            <div className="icon-container" style={icon}>
                <div>
                    <h2>Tell a frind</h2>
                </div>
                <div className="icon-container" style={{fontSize:"2em"}}>
                    <FontAwesomeIcon icon={faFacebook}/>{"  "}
                    <FontAwesomeIcon icon={faInstagram}/>{"  "}
                    <FontAwesomeIcon icon={faWhatsapp}/>{"  "}
                </div>
            </div>

            {/* SECTION LINK */}
            <div className="link-container">
                <div className="ul-container">
                    <img src={cerveza} alt="cerveza" style={img}/>
                    <h3></h3>
                    <ul>
                        <li className="Nav_item">
                        <Link className="Nav_link" to="/aboutUs">Nosotros</Link>
                        </li>
                        <li className="Nav_item">
                        <Link className="Nav_link" to="/products">Productos</Link>
                        </li>
                        <li className="Nav_item">
                        <Link className="Nav__link" to="/e-Shop">Tienda</Link>
                        </li>
                        <li className="Nav_item">
                        <Link className="Nav_link" to="/contact">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
const footer = {
    color: '#DCECDF',
    backgroundColor: '#00382A',
    height: '60vh',
}

const icon = {
    color: '#00382A',
    backgroundColor: '#D8EC8A',
    height: '15vh',
}

const img = {
    height: '150px'
}


