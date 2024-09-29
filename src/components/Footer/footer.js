import React, { useEffect } from 'react';
import './footer.css';
import 'font-awesome/css/font-awesome.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';


const Footer = () => {
  useEffect(() => {
    const toTopBtn = document.getElementById('toTop');
    if (toTopBtn) {
      toTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We are a dynamic company dedicated to delivering the best products with style and flair. Discover more about us and our mission.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
              <li><Link to="/kitchen"><i className="fa-solid fa-utensils"></i> Kitchen</Link></li>
              <li><Link to="/care"><i className="fa fa-heart"></i> Personal Care</Link></li>
              <li><Link to="/hold"><i className="fa fa-broom"></i> Household</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Customer Support</h3>
            <ul>
              <li><Link to="/shipping"><i className="fa fa-truck"></i> Shipping</Link></li>
              <li><Link to="/terms"><i className="fa fa-file-contract"></i> Terms & Conditions</Link></li>
              <li><Link to="/faqs"><i className="fa fa-question-circle"></i> FAQs</Link></li>
              <li><Link to="/contact"><i className="fa fa-envelope"></i> Contact</Link></li>
              <li><Link to="/wishlist"><i className="fa fa-tag"></i> Offers</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>My Account</h3>
            <ul>
              <li><Link to="/login"><i className="fa fa-sign-in-alt"></i> Login</Link></li>
              <li><Link to="/register"><i className="fa fa-user-plus"></i> Register</Link></li>
              <li><Link to="/shipping"><i className="fa fa-truck"></i> Shipping Info</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
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
          <p className="footer-description">
            Explore our vast range of products designed to make your life easier and more enjoyable. Your satisfaction is our priority!
          </p>
          <ul className="social-icons">
            <li><a href="#" className="social-icon facebook"><i className="fa fa-facebook-f"></i></a></li>
            <li><a href="#" className="social-icon twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#" className="social-icon pinterest"><i className="fa fa-pinterest-p"></i></a></li>
            <li><a href="#" className="social-icon dribbble"><i className="fa fa-dribbble"></i></a></li>
          </ul>
          <div className="footer-contact">
            <p><i className="fa fa-map-marker-alt"></i></p>
            <p><i className="fa fa-phone-alt"></i> </p>
            <p><a href="mailto:info@example.com"><i className="fa fa-envelope"></i> </a></p>
          </div>
        </div>
      </div>
      <a href="#" id="toTop" className="to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default Footer;
