import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Cartcontext/context'; // Import Cart Context
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

const Navbar = () => {
    const { cartItems } = useCart() || {}; // Access cart items from context

    return (
        <div>
            {/* Header with Wishlist, Login, Register, Order History, Shipping */}
            <div className="head-t">
                <ul className="card">
                    <li><Link to="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i> Wishlist</Link></li>
                    <li><Link to="/login"><i className="fa fa-user" aria-hidden="true"></i> Login</Link></li>
                    <li><Link to="/register"><i className="fa fa-arrow-right" aria-hidden="true"></i> Register</Link></li>
                    <li><Link to="/about"><i className="fa fa-file-text-o" aria-hidden="true"></i> History</Link></li>
                    <li><Link to="/shipping"><i className="fa fa-ship" aria-hidden="true"></i> Shipping</Link></li>
                    <li><Link to="/seller-dashboard">Seller Dashboard</Link></li>
                </ul>    
            </div>

            <div className="header-ri">
                <ul className="social-top">
                    <li><a href="#" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                    <li><a href="#" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                </ul>    
            </div>

            {/* Navbar */}
            <div className="nav-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        {/* <img src={require('../Assests/logo.png')} alt="Logo" className="logo"/> */}
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/kitchen" id="navbarDropdownKitchen" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Kitchen
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownKitchen">
                                    <Link className="dropdown-item" to="/kitchen">Water & Beverages</Link>
                                    <Link className="dropdown-item" to="/kitchen">Fruits & Vegetables</Link>
                                    <Link className="dropdown-item" to="/kitchen">Staples</Link>
                                    <Link className="dropdown-item" to="/kitchen">Branded Food</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownPersonalCare" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Personal Care
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownPersonalCare">
                                    <Link className="dropdown-item" to="/care">Ayurvedic</Link>
                                    <Link className="dropdown-item" to="/care">Baby Care</Link>
                                    <Link className="dropdown-item" to="/care">Cosmetics</Link>
                                    <Link className="dropdown-item" to="/care">Deo & Perfumes</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownHousehold" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Household
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownHousehold">
                                    <Link className="dropdown-item" to="/hold">Cleaning Accessories</Link>
                                    <Link className="dropdown-item" to="/hold">CookWear</Link>
                                    <Link className="dropdown-item" to="/hold">Detergents</Link>
                                    <Link className="dropdown-item" to="/hold">Gardening Needs</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                                
                            </li>
                        </ul>
                    </div>
                    <Link to="/cart" className="cart"> {/* Wrap cart icon in Link */}
                        <span className="fa fa-shopping-cart my-cart-icon">
                            <span className="badge badge-notify my-cart-badge">{cartItems ? cartItems.length : 0}</span> {/* Dynamic badge */}
                        </span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
