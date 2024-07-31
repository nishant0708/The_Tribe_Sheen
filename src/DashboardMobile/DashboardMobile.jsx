import React from 'react';
import { motion } from 'framer-motion';
import "./DashboardMobile.css";  
import image from "../assets/women.png";
import logo from "../assets/Untitled design (1).png"; 


export const DashboardMobile = () => {
    


  return (
    <div className="mainpage">
      <div className="mainpage__content" style={{ height: "100vh" }}>
      <motion.div
          className="mainpage__topbar"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mainpage__topbar__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="mainpage__topbar__subheader">
            <p>Unleashing the Beauty Within: Tribe Sheen celebrates the Grace and Elegance of Miss and Mrs. contestants with Expert Grooming, Personality Development, and Fashion Flair.</p>
          </div>
          <div className="register__button">
            <p>Register</p>
          </div>
        </motion.div>
      </div>
      <div className="mainpage__pinkspacer">
        <motion.img
          src={image}
          alt="coverpic2"
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className='overlay'></div>
    </div>
  );
}
