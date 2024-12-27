import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from './assets/trans.png'; // Adjust the path as needed
import cartIcon from './assets/cart_icon.png'; // Correctly imported cart icon
import navDropdown from './assets/nav_dropdown.png'; // Correctly imported nav dropdown

const Navbar = () => {
  const [, setMenu] = useState("shop"); // Remove unused 'menu'
  const menuRef = useRef();

  const dropdownToggle = (e) => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('nav-menu-visible');
    }
    e.target.classList.toggle('open');
  };

  return (
    <div className='nav'>
      <Link to='/' onClick={() => setMenu("shop")} className="nav-logo">
        <img src={logo} alt="logo" />
      </Link>
      <img onClick={dropdownToggle} className='nav-dropdown' src={navDropdown} alt="Menu" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("Home")}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
        <li onClick={() => setMenu("Buy")}><Link to='/buy' style={{ textDecoration: 'none' }}>Buy</Link></li>
        <li onClick={() => setMenu("Rent")}><Link to='/rent' style={{ textDecoration: 'none' }}>Rent</Link></li>
        <li onClick={() => setMenu("About")}><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }}>Logout</button>
        ) : (
          <Link to='/signin' style={{ textDecoration: 'none' }}>
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cartIcon} alt="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
