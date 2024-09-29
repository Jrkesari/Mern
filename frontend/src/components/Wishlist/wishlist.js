// Wishlists.js
import React, { useState } from 'react';
import { useCart } from '../Cartcontext/context';// Adjust the import path accordingly
import './wishlist.css';
import 'font-awesome/css/font-awesome.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Wishlists = () => {
    const { addToCart } = useCart();
    const [quantities, setQuantities] = useState({ 1: 1, 2: 1, 3: 1 });

    const handleQuantityChange = (id, change) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(1, prevQuantities[id] + change)
        }));
    };

    const handleAddToCart = (id) => {
        addToCart({ id, quantity: quantities[id], name: `Item ${id}`, price: id * 10 });
        console.log(`Item ${id} added to cart with quantity ${quantities[id]}`);
    };

    const handleRemove = (id) => {
        // Handle removal of item here
    };

    return (
        <div>
            <div className="banner-top">
                <div className="container">
                    <h3>Wishlist</h3>
                    <h4>
                        <a href="/">Home</a><label>/</label>Wishlist
                    </h4>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="check-out">
                <div className="container">
                    <div className="spec">
                        <h3>Wishlist</h3>
                        <div className="ser-t">
                            <b></b>
                            <span><i></i></span>
                            <b className="line"></b>
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th className="t-head head-it">Products</th>
                                <th className="t-head">Price</th>
                                <th className="t-head">Quantity</th>
                                <th className="t-head">Purchase</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3].map((item, index) => (
                                <tr key={index} className={`cross${item}`}>
                                    <td className="ring-in t-data">
                                        <a href="single.html" className="at-in">
                                            <img src={`images/wi${item - 1}.png`} className="img-responsive" alt="" />
                                        </a>
                                        <div className="sed">
                                            <h5>Sed ut perspiciatis unde</h5>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className={`close${item}`} onClick={() => handleRemove(item)}>
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </div>
                                    </td>
                                    <td className="t-data">${item * 10}.00</td>
                                    <td className="t-data">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus" onClick={() => handleQuantityChange(item, -1)}>&nbsp;</div>
                                                <div className="entry value">
                                                    <span className="span-1">{quantities[item]}</span>
                                                </div>
                                                <div className="entry value-plus active" onClick={() => handleQuantityChange(item, 1)}>&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="t-data t-w3l">
                                        <button className="add-1" onClick={() => handleAddToCart(item)}>Add To Cart</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Wishlists;
