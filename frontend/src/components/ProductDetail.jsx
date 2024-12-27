import React from 'react';
import { useParams } from 'react-router-dom';
import products from './Products'; 
import '../styles/ProductDetail.css'; 
const ProductDetail = ({ addToCart }) => {
  const { id } = useParams(); 
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail-container">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="product-detail-image" />

      {/* Product Details */}
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Weather Forecast:</strong> {product.weatherForecast}</p>
        <p><strong>Temperature:</strong> {product.temperature}</p> 
        <p><strong>Agent Contact:</strong> {product.agentNumber}</p> 
        
        {/* Add to Cart Button */}
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
