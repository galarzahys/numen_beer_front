import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons';
import cerveza from '../assets/images/cervezaLogo.png'
import './footer.css'
 
const Footer = () => {
  return (
    <>  
    <footer>
        {/* SECTION REDES */}
        <div className="icon-container">
            <div>
                <h2>Tell a frind</h2>
            </div>
            <div>
                <Link to="#"><FontAwesomeIcon className='icon' icon={faFacebook}/></Link>
                <Link to="#"><FontAwesomeIcon className='icon' icon={faInstagram}/></Link>
                <Link to="#"><FontAwesomeIcon className='icon' icon={faWhatsapp}/></Link>
            </div>
        </div>
        {/* SECTION LINK */}
        <div className="link-container">
            <div className='img_container' >
                <Link to="/"><img src="./images/Logo NB.png" alt="cerveza" style={img}/></Link>
            </div>
            <div className="ul-container">
                <ul className='ul-footer'>
                    <li className="footer_item">
                    <Link className="footer__link" to="/aboutUs">Nosotros</Link>
                    </li>
                    <li className="footer_item">
                    <Link className="footer__link" to="/products">Productos</Link>
                    </li>
                    <li className="footer_item">
                    <Link className="footer__link" to="/e-Shop">Tienda</Link>
                    </li>
                    <li className="footer_item">
                    <Link className="footer__link" to="/contact">Contacto</Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer




const img = {
    height: '150px'
}


