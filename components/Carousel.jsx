"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function App() {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

  return (
    <div className="flex items-center justify-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full py-12"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 }, // laptops and above
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center 
                       w-[250px] h-[250px]    /* default for mobile */
                       md:w-[280px] md:h-[280px]  /* tablets */
                       lg:w-[500px] lg:h-[300px]"  /* laptops only */
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="block w-full h-full object-cover rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
