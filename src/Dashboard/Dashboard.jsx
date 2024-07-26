import React from 'react';
import { motion } from 'framer-motion';
import "./Dashboard.css";  
import image from "../assets/women.png"; 

export const Dashboard = () => {
  return (
    <div className="mainpage">
      <div className="mainpage__content">
      <motion.div
          className="mainpage__topbar"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mainpage__topbar__logo"></div>
          <div className="mainpage__topbar__subheader">
            <p>Unleashing the Beauty Within: Tribe Sheen celebrates the Grace and Elegance of Miss and Mrs. contestants with Expert Grooming, Personality Development, and Fashion Flair.</p>
          </div>
          <div className="register__button">
            <p>Register</p>
          </div>
        </motion.div>
        <div className="mainpage__coverpic"></div>
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
    </div>
  );
}
