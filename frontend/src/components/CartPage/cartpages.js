// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../Cartcontext/context';
import './cartpages.css';

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); // Ensure removeFromCart is defined in your context

  const handleRemove = (id) => {
    removeFromCart(id); // Call the context function to remove item
  };

  const handleCheckout = () => {
    // Redirect to checkout page or handle checkout logic
    window.location.href = '/checkout'; // Update the path if needed
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="container">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="row">
              {cart.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="product-item">
                    <img src={item.image} alt={item.name} className="img-responsive" />
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                    <button className="btn btn-delete" onClick={() => handleRemove(item.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-container">
              <button className="btn btn-checkout" onClick={handleCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
