import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="https://little-lemon-react-capstone.vercel.app/static/media/footer-logo.2c859235d6c57bb54176.png" alt="logo" />
      <nav>
        <h3>Doormat Navigation</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>

      <div>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>email</li>
        </ul>
      </div>

      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>email</li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
