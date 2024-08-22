import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ref, set } from 'firebase/database'
import { database, auth } from './firebaseConfig'
import Home from './Home/Home'
import Register from './Register/Register'
import Modal from './Modal'
import MobileNumberModal from './MobileNumberModal' // Import the new modal

const App = () => {
  const [user, setUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileNumberModalOpen, setIsMobileNumberModalOpen] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')

    const delayModal = setTimeout(() => {
      if (!storedUser) {
        setIsModalOpen(true)
      } else {
        setUser(JSON.parse(storedUser))
      }
    }, 4000) // Delay of 4 seconds (4000 ms)

    return () => clearTimeout(delayModal) // Cleanup timeout if component unmounts
  }, [])

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      setUser(user) // Only set user in state, do not store in localStorage yet

      // If phone number is not available, show the mobile number modal
      if (!user.phoneNumber) {
        setIsMobileNumberModalOpen(true)
      } else {
        // Save user directly if phone number is available
        saveUserToDatabase(user, user.phoneNumber)
        localStorage.setItem('user', JSON.stringify(user)) // Store in localStorage after saving to DB
      }

      setIsModalOpen(false)
    } catch (error) {
      console.error('Error during Google sign-in:', error)
    }
  }

  const saveUserToDatabase = (user, mobileNumber) => {
    const userRef = ref(database, `Visited/${user.uid}`)
    set(userRef, {
      name: user.displayName,
      email: user.email,
      phoneNumber: mobileNumber,
    })
  }

  const handleMobileNumberSubmit = (mobileNumber) => {
    if (user) {
      // Now save the user information along with the submitted mobile number
      saveUserToDatabase(user, mobileNumber)

      // Store user in localStorage only after mobile number is received
      const userWithMobile = { ...user, phoneNumber: mobileNumber }
      localStorage.setItem('user', JSON.stringify(userWithMobile))

      setIsMobileNumberModalOpen(false)
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Show modal if user is not signed in */}
      {isModalOpen && <Modal signInWithGoogle={signInWithGoogle} />}

      {/* Show mobile number modal if phone number is not available */}
      {isMobileNumberModalOpen && (
        <MobileNumberModal onSubmitMobileNumber={handleMobileNumberSubmit} />
      )}
    </Router>
  )
}

export default App
