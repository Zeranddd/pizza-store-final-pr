import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contacts/Contact';
import './App.css';
import PizzaDetails from './components/Catalog/PizzaDetails/PizzaDetails';
import { CartProvider, useCart } from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  const { cartItems } = useCart();
  const totalItems = cartItems.length;

  return (
    <div className='main-container'>
      <nav>
        <ul>
          <li className='nav-item-link'>
            <div className='logo'>
              <a className='logo-link' href="/">
                <img className='logo-img' src="/images/main-logo.png" alt="main-logo" />
              </a>
            </div>
          </li>
          <li className='nav-item-link'>
            <Link to="/" className='nav-item'>Главная</Link>
          </li>
          <li className='nav-item-link'>
            <Link to="/catalog" className='nav-item'>Каталог</Link>
          </li>
          <li className='nav-item-link'>
            <Link to="/reviews" className='nav-item'>Отзывы</Link>
          </li>
          <li className='nav-item-link'>
            <Link to="/contact" className='nav-item'>Контакты</Link>
          </li>
          <li className='nav-item-cart'>
            <Link to="/cart" className='nav-cart-btn'>
              <img className='cart-img' src="images/cart.png" alt="Корзина" />
              <p className='total-items-tag'>({totalItems})</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className='routes-contnent'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog/:pizzaId" element={<PizzaDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <footer>
        <div className='footer-container'>


          <div className="footer-part1">
            <div className='logo'>
              <a className='logo-link' href="/">
                <img className='logo-img-footer' src="/images/main-logo.png" alt="main-logo" />
              </a>
            </div>
            <p className='copyright'>© Golden Pizza, 2024</p>
            <p>Все права защищены.</p>
          </div>



          <div className="footer-part2">
            <div className="paying">
              <p className='footer-p'>Поддержка платежей:</p>
              <div className="paying-logos">
                <img className='logo-mc' src="images/visa.png" alt="visa" />
                <img className='logo-visa' src="images/mastercard.png" alt="mc" />
              </div>
            </div>
          </div>



          <div className="footer-part3">
            <div className="social-medias">
              <p className='footer-p'>Следите за нами!</p>
              <div className="sm-links">
                <a href="https://www.youtube.com/results?search_query=пицца" className='sm-link'><img className="logo-sm" src="images/youtube.png" alt="yt" /></a>
                <a href="https://www.instagram.com/accounts/login/" className='sm-link'><img className="logo-sm" src="images/instagram.png" alt="insta" /></a>
                <a href="https://m.facebook.com/login/?locale=ru_RU&refsrc=deprecated" className='sm-link'><img className="logo-sm" src="images/facebook.png" alt="fb" /></a>
                <a href="https://web.telegram.org/k/" className='sm-link'><img className="logo-sm" src="images/telegram.png" alt="tg" /></a>
              </div>
            </div>
          </div>


        </div>
      </footer>
    </div>
  );
}

const AppWithCartProvider = () => {
  return (
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  );
}

export default AppWithCartProvider;