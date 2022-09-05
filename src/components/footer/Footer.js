import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons';
import './footer.css'
import HomePage from '../../pages/HomePage';
import AboutUsPage from '../../pages/AboutUsPage';
import ProductsPage from '../../pages/ProductsPage';
import ShopPage from '../../pages/E-ShopPage';
import ContactPage from '../../pages/ContactPage';


 
const Footer = () => {

    const pages = ['Home', 'Nosotros', 'Productos', 'Tienda', 'Contacto'];
  return (
    <>  
    <footer>
        {/* SECTION REDES */}
        <div className="icon-container">
            <div>

                <h2>Comparte con amigos</h2>


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
                <Link to="/Home" element={ <HomePage/>}><img src="./images/Logo NB.png" alt="cerveza" style={img}/></Link>
            </div>
            <div className="ul-container">
                <ul className='ul-footer'>
                    <li className="footer_item">
                    <Link className="footer__link" to='Nosotros' element={ <AboutUsPage/>}>Nosotros</Link>
                    </li>
                    <li className="footer_item">
                    <Link className="footer__link" to='Productos'  element={ <ProductsPage/>}>Productos</Link>
                    </li>
                    <li className="footer_item">
                    <Link className="footer__link" to='Tienda'  element={ <ShopPage/>}>Tienda</Link>
                    </li>
                    <li className="footer_item">
                    <Link className="footer__link" to='Contacto'  element={ <ContactPage/>}>Contacto</Link>
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


