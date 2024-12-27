import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import "../styles/Home.css";
import hero_image from "../components/assets/Mainpage.jpg"; 
import hand_icon from "../components/assets/hand_icon.png"; 
import arrow_icon from "../components/assets/arrow.png";
import exclusive_image from "../components/assets/offers.png"; 
const Home = () => {
  const [email, setEmail] = useState(""); 
  const [isSubscribed, setIsSubscribed] = useState(false); 

  const handleSubscribe = (e) => {
    e.preventDefault(); 
    if (email) {
      setIsSubscribed(true); 
      setEmail(""); 
    }
  };

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>Islands</h2>
          <div>
            <div className="hero-hand-icon">
              <p>New</p>
              <img src={hand_icon} alt="Hand Icon" />
            </div>
            <p>Vacation Spot</p>
            <p>For Everyone</p>
          </div>
          <div className="hero-latest-btn">
            <Link to="/rent"> 
              <div>Here
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="Hero" />
        </div>
      </div>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <Link to="/offers"> 
            <button>Check now</button>
          </Link>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="Exclusive Offers" />
        </div>
      </div>
      <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <form onSubmit={handleSubscribe}> 
          <div>
            <input 
              type="email" 
              placeholder='Your email id' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit">Subscribe</button> 
          </div>
        </form>
        {isSubscribed && <p>Thank you for subscribing!</p>} 
      </div>
    </>
  );
};

export default Home;