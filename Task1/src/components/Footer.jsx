import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">EcoSolar</h3>
          <p className="footer-text">
            Providing reliable and sustainable solar energy solutions for a cleaner, greener future.
          </p>
        </div>

       
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p className="footer-text">Email: info@ecosolar.com</p>
          <p className="footer-text">Phone: +9234567890</p>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EcoSolar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;