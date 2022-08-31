import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Carrusel from './components/Carrusel';
import Footer from './components/Footer';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/E-ShopPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
            <Route path='/' element={ <HomePage/>} />
            <Route path='/aboutUs' element={ <AboutUsPage/>} />
            <Route path='/products' element={ <ProductsPage/>} />
            <Route path='/e-Shop' element={ <ShopPage/>} />
            <Route path='/contact' element={ <ContactPage/>} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      <Carrusel />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
