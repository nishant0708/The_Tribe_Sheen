import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaMobileAlt, FaUser } from 'react-icons/fa'

const MobileNumberModal = ({ onSubmitMobileNumber }) => {
  const [name, setName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name === 'mobileNumber') {
      if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
        setMobileNumber(value)
        setError('') // Clear error when valid input
      }
    } else {
      setName(value)
    }
  }

  const handleSubmit = () => {
    if (name.trim() === '') {
      setError('Name is required.')
    } else if (mobileNumber.length !== 10) {
      setError('Mobile number must be exactly 10 digits.')
    } else {
      onSubmitMobileNumber(name, mobileNumber)
    }
  }

  return (
    <div className="mobile_modal">
      <div className="mobile_modal-content">
        <h2>Enter Your Details</h2>
        <div className="input-container">
          <FaUser className="mobile-icon" />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputChange}
            className="mobile-input"
          />
        </div>
        <div className="input-container">
          <FaMobileAlt className="mobile-icon" />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={handleInputChange}
            className="mobile-input"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

MobileNumberModal.propTypes = {
  onSubmitMobileNumber: PropTypes.func.isRequired,
}

export default MobileNumberModal
