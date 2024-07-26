import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar_main">
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`icon-transition ${isOpen ? 'cross' : 'hamburger'}`}>
            {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
          </div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/teams">Teams</a></li>
          <li><a href="/perks">Perks</a></li>
          <li><a href="/updates">Updates</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
