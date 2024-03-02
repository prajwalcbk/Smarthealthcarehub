import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer>
      <div>Contact Us:</div>
      <ul>
        <li>Email: example@example.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        {/* Add more social media icons as needed */}
      </div>
    </footer>
  );
}

export default Footer;
