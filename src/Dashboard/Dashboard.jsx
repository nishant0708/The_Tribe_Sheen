import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Dashboard.css'
import image from '../assets/women.png'
import logo from '../assets/Untitled design (1).png'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const [contentHeight, setContentHeight] = useState(window.innerHeight * 0.6) // Default height
  const navigate = useNavigate()
  useEffect(() => {
    const handleResize = () => {
      // Update content height based on window width
      if (window.innerWidth < 480) {
        setContentHeight(window.innerHeight * 0.7) // Example for very small screens
      } else if (window.innerWidth < 1100) {
        setContentHeight(window.innerHeight * 0.7) // Example for medium screens
      } else if (window.innerWidth < 1200) {
        setContentHeight(window.innerHeight * 0.8) // Example for medium screens
      } else {
        setContentHeight(window.innerHeight * 1) // Default for larger screens
      }
    }

    window.addEventListener('resize', handleResize)

    // Initial call to set height based on current window size
    handleResize()

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="mainpage">
      <div className="overlay"></div>
      <div
        className="mainpage__content"
        style={{ height: `${contentHeight}px` }}
      >
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
            <p>
              Unleashing the Beauty Within: Tribe Sheen celebrates the Grace and
              Elegance of Miss and Mrs. contestants with Expert Grooming,
              Personality Development, and Fashion Flair.
            </p>
          </div>
          <div
            className="register__button"
            onClick={() => {
              navigate('/register')
            }}
          >
            <p>Register</p>
          </div>
        </motion.div>
        <div className="mainpage__coverpic"></div>
      </div>
      <div className="mainpage__pinkspacer">
        <img src={image} alt="coverpic2" />
      </div>
    </div>
  )
}
