import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = async () => {
    try {
      const userId = localStorage.getItem('userId');
      await axios.post('http://localhost:4000/checkout', {
        userId,
        totalAmount: total,
        items: cartItems,  // Adding the cart items in the checkout request
      });
      navigate('/thankyou');
    } catch (error) {
      console.error('Failed to place the order:', error);
    }
  };

  const handleBrowseIslands = () => {
    navigate('/rent'); // Redirect to the Rent component
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some islands to your cart to start your adventure!</p>
          <button className="browse-btn" onClick={handleBrowseIslands}>Browse Islands</button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-section">
            <div className="cart-items">
              {cartItems.map(item => (
                <div className="cart-item" key={item.name}> {/* Changed key to item.name for uniqueness */}
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ₹{item.price}</p>
                    <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-summary-section">
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <p>Total: ₹{total}</p>
              <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
