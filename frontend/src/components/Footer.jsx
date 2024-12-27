import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/Footer.css';
import logo from './assets/trans.png';
import instagram_icon from './assets/instagram_icon.png';
import pintrest_icon from './assets/pintester_icon.png';
import whatsapp_icon from './assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="Logo" /> 
      </div>
      <ul className="footer-links">
        <li>
          <Link to="/">Home</Link> {/* Link to Home component */}
        </li>
        <li>
          <Link to="/rent">Rent</Link> {/* Link to Rent component */}
        </li>
        <li>
          <Link to="/buy">Buy</Link> {/* Link to Buy component */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to About component */}
        </li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_icon} alt="Pinterest" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
