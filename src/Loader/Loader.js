import React, { useEffect } from 'react'
import Logo from '../assets/sheenlogo.png'
import './loader.css'

export default function Loader() {
  useEffect(() => {
    // Function to add 'loaded' class to body when DOM content is loaded
    const handleDOMContentLoaded = () => {
      document.querySelector('body').classList.add('loaded')
    }

    // Check if DOMContentLoaded event has already occurred
    if (document.readyState === 'complete') {
      handleDOMContentLoaded()
    } else {
      // Add event listener for DOMContentLoaded
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)
    }

    // Set a timeout to add 'loaded' class after 1500ms as a fallback
    const timeoutId = setTimeout(() => {
      document.querySelector('body').classList.add('loaded')
    }, 3000)

    // Clean up: remove event listener and clear timeout
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div id="loader-wrapper">
      {/* SVG loader animation */}
      <div className="loaderbox">
        <img src={Logo} alt="Sheen Logo" className="loader-logo" />
      </div>
      {/* Overlay sections for transition effect */}
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  )
}
