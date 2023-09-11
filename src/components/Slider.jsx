"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slide1 from "../assets/banner1.jpg";
import Slide2 from "../assets/banner2.jpg";
import Slide3 from "../assets/banner3.jpg";
import Slide4 from "../assets/banner4.jpg";
import Slide5 from "../assets/banner5.jpg";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <Swiper className=" mySwiper container m-auto flex items-center
       w-full  rounded-md ">
 
        <SwiperSlide>
          <Image src={Slide3} alt="Slide1" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide4} alt="Slide1" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide5} alt="Slide1" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
