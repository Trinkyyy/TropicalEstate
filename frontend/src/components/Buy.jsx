import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Buy.css'; // Ensure the correct CSS path
import bannerBuy from './assets/bannerbuy.png'; // Correct path for banner image
import { getProductsByCategory } from './Products'; // Import your products

const Buy = ({ addToCart }) => {
  const [buyProducts, setBuyProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products initially from Products.jsx
  useEffect(() => {
    const products = getProductsByCategory('buy');
    setBuyProducts(products);
    setFilteredProducts(products); // Initialize filtered products
  }, []);

  // Filter products based on the search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProducts(buyProducts);
    } else {
      const filtered = buyProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, buyProducts]);

  return (
    <div className="buy-container">
      <div className="banner">
        <img src={bannerBuy} alt="Buy Banner" className="banner-image" /> {/* Banner Image */}
      </div>
      <h1>Available Islands for Sale</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} /> {/* Render product image */}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className="view-details-btn">View Details</button>
            </Link>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
