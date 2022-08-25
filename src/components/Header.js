import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
    <>
        <nav className="Nav">
            <div className="Nav_container">
                <Link to="/Home" className="Nav_brand">
                <img src="https://th.bing.com/th/id/OIP.mxpZIyYO6XkO9U0M0T11RQHaHi?w=163&h=180&c=7&r=0&o=5&pid=1.7" className="Nav_logo" />
                </Link>
                <div className="Nav_center">
                    <ul className="Nav_item-wrapper">
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
                <div className="Nav_right">
                <ul className="Nav_item_seach">
                    <li className="Nav_item_2">
                    <button> Busqueda </button>
                    </li>
                    <li className="Nav_item_2">
                    <button> Login </button>
                    </li>
                    <li className="Nav_item_2">
                    <button> Carrito de Compras </button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Header

