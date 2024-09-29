import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Cartcontext/context';
import Kitchen from './components/Kitchen/kitchen';
import CartPage from './components/CartPage/cartpages';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import LoginForm from './components/Login/login';
import RegisterForm from './components/Register/register';
import About from './components/Aboutsection/about';
import ShippingFAQ from './components/Shipping/shipping';
import Wishlists from './components/Wishlist/wishlist';
import Contact from './components/Contacts/contacts';
import Care from './components/Care/care';
import Hold from './components/Household/hold';
import Offer from './components/Offer/offer';
import SellerDashboard from './components/SellerDashboard/sellerdashboard'; // Import the SellerDashboard component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <header className="app-header">
            <a href="/" className="logo-link">
              <div className="header-content">
                <div className="small-text">
                  <b>M<br />E<br />R<br />I<br /></b>
                </div>
                <div className="big-text">
                  DukaAn
                </div>
              </div>
              <div className="sub-title">
                The Best Supermarket in the Market
              </div>
            </a>
          </header>

          <Navbar />
          <main>
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/shipping" element={<ShippingFAQ />} />
              <Route path="/wishlist" element={<Wishlists />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/kitchen" element={<Kitchen />} />
              <Route path="/care" element={<Care />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/hold" element={<Hold />} />
              <Route path="/seller-dashboard" element={<SellerDashboard />} /> {/* Add SellerDashboard route */}
              <Route path="/" element={<Offer />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
