import React from 'react';
import '../styles/About.css'; // Adjust the path as needed
import bannerAbout from './assets/banner_about.png'; // Adjust the path as needed

const About = () => {
  return (
    <div className="about-container">
      <img src={bannerAbout} alt="About Banner" className="banner" />
      <h1>About Us</h1>
      <p>
        Welcome to Tropical Estate, your premier destination for exclusive island rentals. 
        Our mission is to provide you with the best choices for your tropical getaway, 
        ensuring a seamless and luxurious experience.
      </p>
      <p>
        At Tropical Estate, we believe in exceptional service, secure transactions, and 
        personalized experiences. Whether you're looking for a peaceful retreat or an 
        adventure-filled vacation, we have something for everyone.
      </p>
      <p>
        Our dedicated team is here to assist you in finding the perfect island that meets 
        all your needs. Explore our offerings today and discover your next dream vacation!
      </p>
    </div>
  );
};

export default About;
