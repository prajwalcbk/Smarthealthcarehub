import React from 'react';
import './Navbar.css'; // Import your custom CSS for styling
import Logo from '../../assets/daily-health-app.png';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
    <a href='/' className="logo-container">
    <img src={Logo} width="40" height="40" alt="Logo" />
    <span className="logo-text">SmarthHeathCare Hub</span>
  </a> 
      <div className="nav-links">
      <Link to='/'>  <i className="fas fa-home"> </i> Home </Link>
      <Link to='/forums'>  <i className="fas fa-comments">  </i> Forums </Link>
      <Link to='/login'>  <i className="fas fa-sign-in-alt">  </i> Login </Link>
      <Link to='/signup'>  <i className="fas fa-user-plus">  </i> Sign Up</Link>

      </div>
    </div>
  );
}

export default Navbar;