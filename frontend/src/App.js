import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Rent from './components/Rent'; 
import About from './components/About'; 
import Buy from './components/Buy'; 
import Cart from './components/Cart'; 
import SignIn from './components/SignIn'; 
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ThankYou from './components/ThankYou'; 
import Offers from './components/Offers';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(`${product.name} has been added to your cart!`); 
  }
  ;

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.name !== product.name)); 
  };

  return (
    <Router>
      <Navbar /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy addToCart={addToCart} />} />
        <Route path="/offers" element={<Offers addToCart={addToCart} />} /> 
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/thankyou" element={<ThankYou />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;