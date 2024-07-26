import React from 'react'
import { IoSend } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import './Contact.css'
const Contact = () => {

  return (
    <div className="Contact_us">
      <div className="Newsletter">
        <div className="news_content">
          <h3>Stay updated with our latest news!</h3>
          <p>
            Subscribe to our newsletter to receive exclusive updates,
            promotions, and more
          </p>
          <div className="email">
            <input
              type="text"
              id="email"
              placeholder="Enter your email address"
            />
            <button>
              <IoSend />
            </button>
          </div>
        </div>
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
                address
              </li>
              <li>
                <div>
                  <IoIosMail />
                </div>
                xyz@gmail.com
              </li>
              <li>
                <div>
                  <IoCall />
                </div>
                91 9864563789
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Contact
