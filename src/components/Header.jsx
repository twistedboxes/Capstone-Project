import React from "react";
import "../App.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vsRr6NGdZxBWI2M8SVGdfpsEzvyir7tPog&s" alt="logo" />
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
    </header>
  );
};

export default Header;
