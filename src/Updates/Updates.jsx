import React from 'react';
import Update1 from '../assets/updates.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';

import 'swiper/css';
import './updates.css';

export default function Updates() {
 
    return (
        <div className='updatescontainer'>
            <h1 className='updatetitle'>
                Updates
            </h1>
            <div className="carousel slider-container">
                <Swiper
                    modules={[ Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide>
                        <img src={Update1} alt="Image 1" className='updateimg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Update1} alt="Image 2" className='updateimg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Update1} alt="Image 3" className='updateimg' />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}
