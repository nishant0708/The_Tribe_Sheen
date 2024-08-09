import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './updates.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import YellowFlwr from '../assets/flowoutline.png';
import PinkFlwrDown from '../assets/pinkflwr.png';
import { motion } from 'framer-motion'

import Update1 from '../assets/update1.png'

const updates = [Update1, Update1, Update1];


export default function Updates() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='updatescontainer' id='updates'>
            <h1 className='updatetitle'>
                Updates
            </h1>
            <motion.img
                src={YellowFlwr}
                alt="Yellow Flower"
                className='yellowflwr'
                initial={{ opacity: 0, rotate: 270 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.5 }}
            />
            <motion.img
                src={PinkFlwrDown}
                alt="Pink Flower"
                className='pinkflwru'
                initial={{ opacity: 0, rotate: 180 }}
                whileInView={{ opacity: 1, rotate: 360 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}

            />

            <motion.div className="carousel"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    style={{
                        "--swiper-navigation-color": "#ff9bbd",
                        "--swiper-navigation-size": "8px",
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                >
                    {updates.map((update, index) => (
                        <SwiperSlide key={index}>
                            <img src={update} alt={`Update ${index + 1}`} className='updateimg' />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-navigation">
                    <button ref={prevRef} className="nav-button prev">&lt;</button>
                    <button ref={nextRef} className="nav-button next">&gt;</button>
                </div>
            </motion.div>
        </div>
    )
}