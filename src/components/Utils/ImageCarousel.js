import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon"
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon"
import { useRef, useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ImageCarousel = () => {
    const navigationNext = useRef()
    const navigationPrev = useRef()

    return (
        <div >
            <div className="relative group">
                <Swiper
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrev.current;
                        swiper.params.navigation.nextEl = navigationNext.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    navigation
                    modules={[Navigation]}
                    allowTouchMove={false}
                // className="w-40"
                >
                    <SwiperSlide> <img src="./assets/card-img.jpeg" className="object-cover" alt="" /></SwiperSlide>
                    <SwiperSlide> <img src="./assets/card-img.jpeg" className="object-cover" alt="" /></SwiperSlide>
                    <SwiperSlide> <img src="./assets/card-img.jpeg" className=" object-cover" alt="" /></SwiperSlide>
                    <SwiperSlide> <img src="./assets/card-img.jpeg" className="object-cover" alt="" /></SwiperSlide>
                </Swiper>
                <div className={`z-10 group-hover:pr-1 group-hover:w-6 overflow-hidden transition-all ease-in-out top-[50%] left-[0%] absolute w-0 bg-white rounded-tr-full rounded-br-full py-2`} ref={navigationPrev}><ChevronLeftIcon className="w-4 h-4 float-right" /></div>

                <div className={` bg-white group-hover:pl-1 transition-all ease-in-out z-10 overflow-hidden w-0 py-2 absolute right-[0%] top-[50%] peer rounded-tl-full rounded-bl-full group-hover:w-6`} ref={navigationNext}><ChevronRightIcon className="w-4 h-4" /></div>
            </div>
        </div>

    )
}
export default ImageCarousel