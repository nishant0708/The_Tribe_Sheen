// Modal.js
import React from 'react'
import PropTypes from 'prop-types'
import logo from './assets/sheenlogo.png'
import { FaGoogle } from 'react-icons/fa' // Import the Google icon

const Modal = ({ signInWithGoogle }) => {
  return (
    <div className="modal" style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        className="modal-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={logo} alt="" width="200px" />
        <h2 style={{ marginTop: '2rem' }}>Welcome To TribeSheen</h2>
        <p style={{ margin: '0rem' }}> Please sign in to continue.</p>
        <button className="google-signin-btn" onClick={signInWithGoogle}>
          <FaGoogle className="google-icon" /> Sign in with Google
        </button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  signInWithGoogle: PropTypes.func.isRequired,
}

export default Modal
