import React from 'react';
import Navbar from '../Navbar/navbar';
import About from '../About/About';
import './Home.css';
import Contact from '../Contact/Contact';


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <About />
      <Contact />
      
    </div>
  );
};

export default Home;
