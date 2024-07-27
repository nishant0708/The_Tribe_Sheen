import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './updates.css';

import UpdateImage from '../assets/updates.png';

const updates = [UpdateImage, UpdateImage, UpdateImage, UpdateImage];


export default function Updates() {
    return (
        <div className='updatescontainer'>
            <h1 className='updatetitle'>
                Updates
            </h1>
            <div className="carousel">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                >
                    {updates.map((update, index) => (
                        <SwiperSlide key={index}>
                            <img src={update} alt={`Update ${index + 1}`} className='updateimg' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}