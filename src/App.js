import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ref, set } from 'firebase/database'
import { database } from './firebaseConfig'
import Home from './Home/Home'
import Register from './Register/Register'
import MobileNumberModal from './MobileNumberModal'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling
    })
  }, [pathname])

  return null
}

const App = () => {
  const [user, setUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log(user)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      setIsModalOpen(true)
    }
  }, [])

  const handleMobileNumberSubmit = (name, mobileNumber) => {
    const user = { name, phoneNumber: mobileNumber }
    saveUserToDatabase(user)
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
    setIsModalOpen(false)
  }

  const saveUserToDatabase = (user) => {
    const userRef = ref(database, `Visited/${user.phoneNumber}`)
    set(userRef, {
      name: user.name,
      phoneNumber: user.phoneNumber,
    })
  }

  return (
    <Router>
      <ScrollToTop /> {/* Ensure pages open from the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* Show mobile number modal if user is not found in localStorage */}
      {isModalOpen && (
        <MobileNumberModal onSubmitMobileNumber={handleMobileNumberSubmit} />
      )}
    </Router>
  )
}

export default App
