"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp",
      content:
        "The React course completely transformed my career. I went from beginner to landing my dream job in just 3 months!",
      avatar: "👩‍💼",
      rating: 5,
      course: "Complete React Development",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Full Stack Developer",
      company: "StartUp Inc",
      content:
        "Incredible learning experience! The instructors are knowledgeable and the projects are real-world relevant.",
      avatar: "👨‍💻",
      rating: 5,
      course: "Full Stack MERN Mastery",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "UI/UX Designer",
      company: "Creative Studio",
      content:
        "The design courses helped me build a strong portfolio that got me multiple job offers. Highly recommended!",
      avatar: "👩‍🎨",
      rating: 4,
      course: "UI/UX Design with Figma",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Backend Engineer",
      company: "Enterprise Solutions",
      content:
        "The Node.js course covered everything I needed to advance my career. The support community is amazing.",
      avatar: "👨‍💼",
      rating: 5,
      course: "Advanced Node.js Development",
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      role: "Product Manager",
      company: "Growth Agency",
      content:
        "Even as a non-technical person, the courses were easy to follow and incredibly valuable for my role.",
      avatar: "👩‍💼",
      rating: 5,
      course: "JavaScript Fundamentals",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  if (!isMounted) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-base-200 to-base-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Our Students Say
          </h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our amazing students who
            transformed their careers
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-base-100 rounded-2xl p-6 shadow-xl border border-base-300 h-full">
                  {/* Rating */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="text-4xl opacity-20">❝</div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-base-content/80 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Course */}
                  <div className="mb-4">
                    <div className="badge badge-primary badge-sm text-white">
                      {testimonial.course}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-base-content">
                        {testimonial.name}
                      </h4>
                      <p className="text-base-content/60 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          {[
            { number: "10,000+", label: "Happy Students" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Completion Rate" },
            { number: "50+", label: "Countries" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-base-100 p-6 rounded-xl shadow-lg border border-base-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-base-content/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
