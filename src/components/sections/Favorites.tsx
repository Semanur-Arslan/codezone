"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FAVORITE_ITEMS } from "@/constants/constants";


export default function Favorites() {
  const [progress, setProgress] = useState(0);

  return (
    <section className="text-white  my-16">
      <div className="relative inline-flex px-18 pt-4 pb-8 bg-white text-black"
        style={{ clipPath: 'polygon(0 0, 100% 0%, 90% 70%, 0% 100%)' }}>
        <div className="flex flex-col-2 items-center gap-4">
          <Image
            src="/youtubeLogo.svg"
            alt="YouTube Logo"
            width={32}
            height={32}
            className="rounded-md w-auto h-8 object-cover"
          />
          <Image
            src="/spotifyLogo.svg"
            alt="Spotify Logo"
            width={36}
            height={36}
            className="rounded-md w-auto h-10 object-cover"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 items-start">
        <div className="md:col-span-1 h-full flex items-center justify-center md:justify-start py-12">
          <h2 className="text-6xl font-extrabold md:w-50 w-100 md:ml-12 text-center md:text-start">
            Ayın Favorileri
          </h2>
        </div>
        <div className="md:col-span-2 w-full md:pl-24 pl-24 justify-center">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2.2 },
              1280: { slidesPerView: 3.2 },
            }}
            onSlideChange={(swiper) => {
              const slidesPerView = typeof swiper.params.slidesPerView === "number"
                ? swiper.params.slidesPerView
                : 1;
              const maxIndex = swiper.slides.length - slidesPerView;
              const prog = (swiper.activeIndex / (maxIndex || 1)) * 100;
              setProgress(prog);

            }}
          >
            {FAVORITE_ITEMS.map((item, idx) => (
              <SwiperSlide key={idx} >
                <div className="relative">
                  <div className="relative bg-gray-900 h-[500px] md:h-64  w-full flex flex-col md:flex-row overflow-visible">
                    <div className="relative md:w-1/2 w-full h-full overflow-hidden flex items-center">
                      <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[180%] md:h-auto w-[100%] flex justify-center md:block mt-6">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={200}
                          height={100}
                          className="object-cover -rotate-12 origin-center md:h-30 h-60 w-[60%] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:w-1/2 w-full h-50 gap-2">
                      <div className="bg-black-800 rounded-lg p-1">
                        <h3 className="text-xs text-white">{item.title} <span className="font-bold">({item.number})</span></h3>
                      </div>
                      <div>
                        <h5 className="font-thin">{item.artist}</h5>
                        <h5 className="font-bold">{item.song}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="relative md:-mt-6 -mt-4  w-full h-12">
                    <Image
                      src="/favorites/bottomBg.svg"
                      alt="background"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
          <div className="relative w-full h-2 bg-white/20 rounded-full mt-3 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-2 bg-secondary rounded-full transition-transform"
              style={{
                width: `${100 / FAVORITE_ITEMS.length}%`,
                transform: `translateX(${(progress / 100) * (FAVORITE_ITEMS.length - 1) * 100}%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
