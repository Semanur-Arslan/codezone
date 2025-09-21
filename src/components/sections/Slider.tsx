"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { SLIDER_IMAGES } from "@/constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AsymmetricButton from "../AsymmetricButton";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SliderItem } from "@/types/types";

export default function Slider() {
  return (
    <div className="relative h-screen ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination"
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop
        autoplay={{ delay: 30000, disableOnInteraction: false }}
        className="w-full"
      >
        {SLIDER_IMAGES.map((slide: SliderItem, index: number) => (
          <SwiperSlide key={index}>
            <div className={`flex flex-col-reverse md:flex-row relative ${slide.height ?? "h-screen"} text-white`}>
              <div className="relative md:w-full w-auto h-100 md:h-screen bg-black">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover object-left h-25"
                />
              </div>
              <div className="absolute inset-y-0 right-0 w-full md:w-1/2 flex md:items-center mt-36 px-6 md:px-12">
                <div className=" md:max-w-lg max-w-sm flex flex-col gap-4 px-4 md:text-start text-center">
                  <h2 className={`text-[36px] md:text-[60px] font-bold leading-[110%] tracking-[-0.02em]  slide-description ${slide.textColor?.mobile} md-${slide.textColor?.md} font-sairaCondensed`} >
                    {slide.title}
                  </h2>
                  <p className={`text-sm md:text-base font-normal leading-[120%] tracking-[0.015em] slide-description font-saira  ${slide.textColor?.mobile} md-${slide.textColor?.md}`}>{slide.description}</p>
                  {slide.buttonLink && (
                    <div className="mt-4">
                      <AsymmetricButton
                        text={slide.buttonText || "Daha Fazla"}
                        href={slide.buttonLink}
                      />
                    </div>
                  )}
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
        <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden md:flex">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" className="text-white" />
        </div>
        <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden md:flex">
          <FontAwesomeIcon icon={faArrowRight} size="lg" className="text-white" />
        </div>
      </Swiper>
      <div className="absolute bottom-0 left-0 w-full h-30 overflow-hidden pointer-events-none z-2">
        <Image
          src="/slider/slider_bottom.png"
          alt="Slider Bottom"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
