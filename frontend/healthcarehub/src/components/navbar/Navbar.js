import React from 'react';
import './Navbar.css'; // Import your custom CSS for styling
import Logo from '../../assets/Logo.svg';

function Navbar() {
  return (
    <div className="navbar">
    <a href='/' className="logo-container">
    <img src={Logo} width="40" height="40" alt="Logo" />
    <span className="logo-text">SmarthHeathCare Hub</span>
  </a> 
      <div className="nav-links">
        <a href="/"><i className="fas fa-home"></i> Home</a>
        <a href="/forums"><i className="fas fa-comments"></i> Forums</a>
        <a href="/login"><i className="fas fa-sign-in-alt"></i> Login</a>
        <a href="/signup"><i className="fas fa-user-plus"></i> Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;