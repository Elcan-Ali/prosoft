import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { nanoid } from '@reduxjs/toolkit';


import LogoStepI from '../../../public/img/stepi-logo.svg'
import LogoYtp from '../../../public/img/ytp-logo.svg'
import LogoBildungswerk from '../../../public/img/bildungswerk-logo.svg'

export default function OurCustomerSlider() {
    const data = [
        { id: 1, img: LogoStepI },
        { id: 2, img: LogoYtp },
        { id: 3, img: LogoBildungswerk },
        { id: 4, img: LogoYtp },
        { id: 5, img: LogoBildungswerk },
        { id: 6, img: LogoStepI },
        { id: 7, img: LogoYtp },
        { id: 8, img: LogoBildungswerk },
        { id: 9, img: LogoYtp },
    ]
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {data?.map(item => (
                    <SwiperSlide key={nanoid()}>
                        <div className='flex-center h-[200px] pb-[40px]'>
                            <img src={item.img} alt="" />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
