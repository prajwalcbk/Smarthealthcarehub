import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import your custom CSS for styling
import Logo from '../../assets/daily-health-app.png';
import { Link } from "react-router-dom";
import CompanyDropdown from '../CompanyDropdown/CompanyDropdown'



function Navbar() {

    const [isDropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };


  return (
    <div className="navbar">
    <a href='/' className="logo-container">
    <img src={Logo} width="40" height="40" alt="Logo" />
    <span className="logo-text">SmartHealthCare Hub</span>
    </a> 
      <div className="nav-links">
      <Link to='/forums'>  <i className="fas fa-comments">  </i> Forums </Link>
      <CompanyDropdown />


      <Link to='/login'>  <i className="fas fa-sign-in-alt">  </i> Login </Link>
      <Link to='/signup'>  <i className="fas fa-user-plus">  </i> Sign Up</Link>

      </div>
    </div>
  );
}

export default Navbar;