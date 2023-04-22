import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";

const Carousel = () => {
    return (
        <Swiper
            pagination={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="w-full flex-grow h-full">
            <SwiperSlide>
                <div className="relative w-full h-full">
                    <img src="./assets/screen-1.jpg" className="object-cover w-full h-full" alt="" />
                    <div className="absolute top-5 left-5">
                        <h2 className="text-white font-bold text-3xl">Add talent to AI</h2>
                        <p className="text-white font-semibold text-xl">Hire the best ai experts to generate exceptional results</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-full">
                    <img src="./assets/screen-2.jpg" className="object-cover h-full w-full" alt="" />
                    <div className="absolute top-5 left-5">
                        <h2 className="text-white font-bold text-3xl">Make a customize logo in minutes</h2>
                        <p className="text-white font-semibold text-xl">Get the right logo for your brand and your budget with Fiver&apos;s logo maker.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-full">
                    <img src="./assets/screen-3.jpg" className="object-cover h-full w-full" alt="" />
                    <div className="absolute top-5 left-5">
                        <h2 className="text-white font-bold text-3xl">Join our Bridge to gap conference</h2>
                        <p className="text-white font-semibold text-xl">Listen and learn from the best this international women&apos;s day.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-full">
                    <img src="./assets/screen-4.jpg" className="object-cover h-full w-full" alt="" />
                    <div className="absolute top-5 left-5">
                        <h2 className="text-white font-bold text-3xl">Start your dropshipping business</h2>
                        <p className="text-white font-semibold text-xl">Create, launch & grow your dropshipping busisess today.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
export default Carousel