"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const TestimonialSlider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content:
        "This product has completely transformed our workflow. The efficiency gains we've seen are incredible!",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Developer",
      company: "StartUp Inc",
      content:
        "Incredible features and outstanding support. The team behind this is truly dedicated to excellence.",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Design Lead",
      company: "Creative Studio",
      content:
        "The attention to detail and user experience is phenomenal. Our clients love the results!",
      avatar: "👩‍🎨",
      rating: 4,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "CTO",
      company: "Enterprise Solutions",
      content:
        "Robust, scalable, and exactly what we needed for our growing business. Highly recommended!",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      role: "Marketing Director",
      company: "Growth Agency",
      content:
        "The impact on our conversion rates has been remarkable. A game-changer for our marketing efforts.",
      avatar: "👩‍💼",
      rating: 5,
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
    <section className="py-20 px-4 bg-gradient-to-br from-base-200 to-base-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-base-100 rounded-xl shadow-xl p-8 md:p-12 mx-auto max-w-4xl">
                  <div className="text-center">
                    {/* Quote Icon */}
                    <div className="text-6xl text-primary/50 mb-4">❝</div>

                    {/* Content */}
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-base-content/80 mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg text-base-content">
                          {testimonial.name}
                        </h4>
                        <p className="text-base-content/60">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="swiper-button-prev btn btn-circle btn-outline btn-primary">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="swiper-pagination !relative !w-auto"></div>

            <button className="swiper-button-next btn btn-circle btn-outline btn-primary">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-base-100 rounded-xl shadow-lg border border-base-300"
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

      <style jsx>{`
        .testimonial-swiper {
          padding: 20px 0;
        }

        .swiper-pagination-bullet {
          background: oklch(var(--bc) / 0.3);
          opacity: 1;
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          background: oklch(var(--p));
        }

        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
