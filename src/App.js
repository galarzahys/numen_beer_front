import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ProductsForm from './components/backoffice/productForm';
import Footer from './components/footer/Footer';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import AboutUsPage from './pages/AboutUsPage';
import SetProductsPage from './pages/backoffice/setProducts';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/E-ShopPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <section className='main_container'>
        <Routes>
            <Route path='/' element={ <HomePage/>} />
            <Route path='/aboutUs' element={ <AboutUsPage/>} />
            <Route path='/products' element={ <ProductsPage/>} />
            <Route path='/e-Shop' element={ <ShopPage/>} />
            <Route path='/contact' element={ <ContactPage/>} />
            <Route path='/backoffice' element={ <SetProductsPage />} />
            <Route path='/backoffice/productsform' element={ <ProductsForm />} />
            <Route path='/backoffice/productsform/:id' element={ <ProductsForm />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
