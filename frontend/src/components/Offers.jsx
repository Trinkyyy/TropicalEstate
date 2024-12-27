import React from "react"; // Added useState import
import "../styles/Offers.css"; 
import exclusive_image from "../components/assets/offers.png"; 

const Offers = ({ addToCart }) => { // Accept addToCart as a prop
  return (
    <div className="offers-container">
      <div className="banner">
        <img src={exclusive_image} alt="Exclusive Offers" className="banner-image" />
      </div>
      <div className="offers-content">
        <h1 className="offer-title">TropicalEstateX Vacation Stay & Party Package</h1>

        <div className="about-property">
          <h2 className="section-heading">About this property</h2>
          <p className="section-content">
            Along with stunning island views and luxurious amenities, this vacation package offers an all-inclusive stay with customizable party arrangements. Free Wi-Fi is provided, along with free parking and round-the-clock services from our professional staff. Each accommodation offers premium facilities including a Smart TV, fully equipped kitchen, private pool, and luxury decor.
          </p>
        </div>

        <div className="languages">
          <h2 className="section-heading">Languages</h2>
          <p className="section-content">English, Hindi, Thai</p>
        </div>

        <div className="policies">
          <h2 className="section-heading">Policies</h2>
          <div className="policy-item">
            <h3>Check-in</h3>
            <p>Check-in start time: 2:00 PM; Check-in end time: anytime</p>
          </div>
          <div className="policy-item">
            <h3>Check-out</h3>
            <p>Check-out before noon</p>
          </div>
          <div className="policy-item">
            <h3>Special check-in instructions</h3>
            <p>Our professional staff will greet guests upon arrival and assist with all services.</p>
          </div>
          <div className="policy-item">
            <h3>Access methods</h3>
            <p>Private ship transport available upon request.</p>
          </div>
          <div className="policy-item">
            <h3>Pets</h3>
            <p>No pets or service animals allowed.</p>
          </div>
          <div className="policy-item">
            <h3>Children and extra beds</h3>
            <p>Children are welcome. Cots are available at ₹500 per night.</p>
          </div>
          <div className="policy-item">
            <h3>Payment types accepted</h3>
            <p>Credit card, Debit card, Cash</p>
          </div>
        </div>

        <div className="price-section">
          <h2 className="section-heading">Price</h2>
          <p className="section-content">
            Starting from <span className="price-amount">₹6,999</span> per day
          </p>
        </div>

        <div className="contact-info">
          <h3>Contact us:</h3>
          <p>📞 123-456-7890</p>
          <p>🌐 <a href="http://www.TropicalEstateX.com" target="_blank" rel="noopener noreferrer">www.TropicalEstateX.com</a></p>
        </div>

        <button 
          className="add-to-cart-button" 
          onClick={() => addToCart({
            name: "TropicalEstateX Exclusive Vacation Stay & Party Package",
            description: "Experience the luxury of a breathtaking island destination.",
            price: 6999,
            image: exclusive_image,
          })} // Pass item details to addToCart
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Offers; 
