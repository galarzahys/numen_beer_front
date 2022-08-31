import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Link} from 'react-router-dom';

const pages = ['Home', 'Nosotros', 'Productos', 'Tienda', 'Contacto'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Numen Beer
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link style={{textDecoration: "none", color:"white"}} to={`/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Numen Beer
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Link style={{textDecoration: "none", color:"white"}} to={`/${page}`}>{page}</Link>

              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Logo User" src="/public/images/user.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

// import { Link } from 'react-router-dom';
// import './Header.css';
// import IconButton from '@mui/material/IconButton';
// import { Badge } from '@mui/material';
// import ShoppingCart from '@mui/icons-material/ShoppingCart'


// const Header = () => {

//     return (
//     <>
//         <nav className="Nav">
//             <div className="Nav_container">
//                 <Link to="/" className="Nav_brand">
//                 <img src="./images/Logo NB.png" className="Nav_logo" alt="logo_numen_beer" />
//                 </Link>
//                 <div className="Nav_center">
//                     <ul className="Nav_item-wrapper">
//                     <li className="Nav_item">
//                         <Link className="Nav_link" to="/Home">Home</Link>
//                         </li>
//                         <li className="Nav_item">
//                         <Link className="Nav_link" to="/aboutUs">Nosotros</Link>
//                         </li>
//                         <li className="Nav_item">
//                         <Link className="Nav_link" to="/products">Productos</Link>
//                         </li>
//                         <li className="Nav_item">
//                         <Link className="Nav__link" to="/e-Shop">Tienda</Link>
//                         </li>
//                         <li className="Nav_item">
//                         <Link className="Nav_link" to="/contact">Contacto</Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="Nav_right">
//                 <ul className="Nav_item_seach">
//                     <li className="Nav_item_2">
//                     <button> Busqueda </button>
//                     </li>
//                     <li className="Nav_item_2">
//                     <button> Login </button>
//                     </li>
//                     <li className="Nav_item_2">
//                     <Link to={"/checkout"}>
//                         <IconButton>
//                             <Badge badgeContent={0} color="success">
//                             <ShoppingCart fontSize="large"/>
//                             </Badge>
//                         </IconButton>
//                     </Link>
//                     </li>
//                     <li className="Nav_item_2">
//                     <Link className='linke' to={``}>
//                                 <div className='user_data'>
//                                 <p>{`Hola, usuario!`}</p>
//                                 <div className="user_avatar" style={{
//                                     backgroundImage: `url('./images/user.jpeg')`,
//                                     }}>
//                                 </div>
//                             </div>
//                         </Link>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//         </nav>
//     </>
//     )
// }

// export default Header

