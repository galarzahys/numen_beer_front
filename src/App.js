import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ProductsForm from './components/backoffice/productForm';
import Footer from './components/footer/Footer';
import LoginForm from './components/forms/LoginForm';
import RegistrationForm from './components/forms/RegistrationForm';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import AboutUsPage from './pages/AboutUsPage';
import SetProductsPage from './pages/backoffice/setProducts';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/E-ShopPage';
import HomePage from './pages/HomePage';
// import Carrusel from "./components/carrusel/Carrusel";
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <section className='main_container'>
        <Routes>
            <Route path='/' element={ <HomePage/>} />
            <Route path='/Home' element={ <HomePage/>}/>
            <Route path='/Nosotros' element={ <AboutUsPage/>} />
            <Route path='/Productos' element={ <ProductsPage/>} />
            <Route path='/Tienda' element={ <ShopPage/>} />
            <Route path='/micarrito' element={ <CheckoutPage/>} />
            <Route path='/Contacto' element={ <ContactPage/>} />
            <Route path='/backoffice' element={ <SetProductsPage />} />
            <Route path='/backoffice/productsform' element={ <ProductsForm />} />
            <Route path='/backoffice/productsform/:id' element={ <ProductsForm />} />
            <Route path='/register' element={ <RegistrationForm />} />
            <Route path='/login' element={ <LoginForm />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </section>
      {/* <Carrusel/> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
