import React from 'react'
import './Join.css'
import { motion } from 'framer-motion'

const videoUrls = [
  'https://www.youtube.com/embed/gqyqN6Pyv1U?si=qOvoo-OsWJQimKQ3',
]

const Join = () => {
  return (
    <div className="sponsor-main">
      <div className="video-block">
        {/* Animate the heading */}
        <motion.h1
          className="sponsor-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Moments Captured
        </motion.h1>

        {/* Animate the video blocks */}
        <div className="video-container">
          {videoUrls.map((url, index) => (
            <motion.div
              key={index}
              className="video-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <iframe
                className="iframe_videos"
                src={url}
                title={`video-${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Join
