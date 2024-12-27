import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../components/Products';
import '../styles/Rent.css';
import bannerRent from './assets/banner_rent.png';

const Rent = ({ addToCart }) => {
  const rentProducts = getProductsByCategory('rent'); // Fetch rent products initially
  console.log('Rent products:', rentProducts); // Debugging rent products

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(rentProducts);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = rentProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(rentProducts); // Show all products when no query
    }
  }, [searchQuery, rentProducts]);

  return (
    <div className="rent-container">
      <div className="banner">
        <img src={bannerRent} alt="Rent Islands Banner" className="banner-image" />
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search islands..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <h1>Islands for Rent</h1>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
              </Link>
              <p>{product.description}</p>
              <p>Price per week: ₹{product.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Rent;