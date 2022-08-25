import { Link } from 'react-router-dom';
import './Header.css';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart'




const Header = () => {


    return (
    <>
        <nav className="Nav">
            <div className="Nav_container">
                <Link to="/" className="Nav_brand">
                <img src="./images/Logo NB.png" className="Nav_logo" alt="logo_numen_beer" />
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
                    <Link to={"/checkout"}>
                        <IconButton>
                            <Badge badgeContent={0} color="success">
                            <ShoppingCart fontSize="large"/>
                            </Badge>
                        </IconButton>
                    </Link>
                    </li>
                    <li className="Nav_item_2">
                    <Link className='linke' to={``}>
                                <div className='user_data'>
                                <p>{`Hola, usuario!`}</p>
                                    <div className="user_avatar" style={{
                                    backgroundImage: `url('./images/user.jpeg')`,
                                     }}>
                                    </div>
                                
                                </div>
                                </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Header

