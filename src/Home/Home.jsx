import React from 'react';
import Navbar from '../Navbar/navbar';
import About from '../About/About';
import './Home.css';
import Contact from '../Contact/Contact';
import Perks from '../Perks/perks';
import Updates from '../Updates/updates'


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <About />
      <Contact />
      <Perks/>
      <Updates/>
    </div>
  );
};

export default Home;
