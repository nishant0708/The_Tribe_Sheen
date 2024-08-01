import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import { ref, set } from 'firebase/database'
import { database } from '../firebaseConfig'
import './Contact.css'
import { motion } from 'framer-motion'

// UUID generation function
function generateUUID() {
  var d = new Date().getTime()
  var d2 =
    (typeof performance !== 'undefined' &&
      performance.now &&
      performance.now() * 1000) ||
    0
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16
    if (d > 0) {
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    } else {
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

const Contact = () => {
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    if (email.trim() === '') {
      alert('Please enter a valid email address.')
      return
    }

    const uniqueId = generateUUID()
    const emailRef = ref(database, `Newsletter/${uniqueId}`)
    set(emailRef, email)
      .then(() => {
        setShowModal(true)
        setEmail('')
      })
      .catch((error) => {
        console.error('Error storing email: ', error)
      })
  }

  return (
    <div className="Contact_us" id="contact">
      <div className="Newsletter">
        <motion.div
          className="news_content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>Stay updated with our latest news!</h3>
          <p>
            Subscribe to our newsletter to receive exclusive updates,
            promotions, and more
          </p>
          <div className="email">
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleSubmit}>
              <AiOutlineSend />
            </button>
          </div>
        </motion.div>
      </div>
      <div className="contact_main">
        <div className="contact_content">
          <div className="contact_para">
            <p>CONTACT US</p>
          </div>
          <div className="icons">
            <ul>
              <li>
                <div>
                  <FaLocationDot />
                </div>
                1020, 1st floor, Scheme No 114, Part 1, Vijay Nagar, Indore
              </li>
              <li>
                <div>
                  <IoIosMail />
                </div>
                tribesheen@gmail.com
              </li>
              <li>
                <div>
                  <IoCall />
                </div>
                +91 9399425972
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>Thanks for subscribing to our newsletter!</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
