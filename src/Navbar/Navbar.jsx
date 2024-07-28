import React, { useState } from 'react';
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.navbar_main').offsetHeight;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      setIsOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <div className="navbar_main">
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`icon-transition ${isOpen ? 'cross' : 'hamburger'}`}>
            {isOpen ? <RxCross1 /> : <GiHamburgerMenu size={25} />}
          </div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About us</a></li>
          <li><a onClick={() => scrollToSection('teams')}>Teams</a></li>
          <li><a onClick={() => scrollToSection('perks')}>Perks</a></li>
          <li><a onClick={() => scrollToSection('updates')}>Updates</a></li>
          <li><a> <Link to="/register" > Register </Link></a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
