import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaMobileAlt } from 'react-icons/fa' // Import mobile icon

const MobileNumberModal = ({ onSubmitMobileNumber }) => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const value = e.target.value
    // Allow only numbers and restrict input to 10 characters
    if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
      setMobileNumber(value)
      setError('') // Clear error when valid input
    }
  }

  const handleSubmit = () => {
    if (mobileNumber.length === 10) {
      onSubmitMobileNumber(mobileNumber)
    } else {
      setError('Mobile number must be exactly 10 digits.')
    }
  }

  return (
    <div className="mobile_modal">
      <div className="mobile_modal-content">
        <h2>Enter Mobile Number</h2>
        <div className="input-container">
          <FaMobileAlt className="mobile-icon" />
          <input
            type="text"
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
