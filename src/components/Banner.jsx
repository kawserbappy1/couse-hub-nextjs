"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import nextjs from "@/assets/images/nextjs.jpg";
import react from "@/assets/images/reactjs.png";
import javascript from "@/assets/images/javascript.png";

export default function Banner() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 p-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 my-5">
              <div className="flex-1 text-center md:text-start">
                <h1 className="text-3xl md:text-5xl font-bold tracking-widest leading-12 md:leading-16 text-white">
                  Learn Next JS from <br />
                  <span className="text-primary">Course Hub</span>
                </h1>

                <p className="text-base tracking-wider max-w-md my-5 text-white">
                  Used by some of the world's largest companies, Next.js enables
                  you to create high-quality web applications with the power of
                  React components.
                </p>

                <Link
                  href={"/"}
                  className="btn bg-white text-secondary tracking-wider font-semibold"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex-1">
                <Image src={react} alt="Next Js" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 p-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 my-5 ">
              <div className="flex-1 text-center md:text-start ">
                <h1 className="text-3xl md:text-5xl font-bold tracking-widest leading-12 md:leading-16 text-white">
                  Leran React JS from <br />{" "}
                  <span className="text-primary">Course Hub</span>
                </h1>
                <p className="text-base tracking-wider max-w-md my-5">
                  Used by some of the world's largest companies, Next.js enables
                  you to create high-quality web applications with the power of
                  React components.
                </p>
                <Link
                  href={"/"}
                  className="btn bg-base100 text-secondary tracking-wider"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex-1 ">
                <Image src={react} alt="Next Js" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 p-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 my-5">
              <div className="flex-1 text-center md:text-start ">
                <h1 className="text-3xl md:text-5xl font-bold tracking-widest leading-12 md:leading-16 text-white">
                  Leran Javascript from <br />{" "}
                  <span className="text-primary">Course Hub</span>
                </h1>
                <p className="text-base tracking-wider max-w-md my-5">
                  Used by some of the world's largest companies, Next.js enables
                  you to create high-quality web applications with the power of
                  React components.
                </p>
                <Link
                  href={"/"}
                  className="btn bg-base100 text-secondary tracking-wider"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex-1 ">
                <Image src={react} alt="Next Js" className="rounded-xl" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
