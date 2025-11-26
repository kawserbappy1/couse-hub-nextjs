"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";
import nextjs from "@/assets/images/nextjs.jpg";
import react from "@/assets/images/reactjs.png";
import javascript from "@/assets/images/javascript.png";

export default function Banner() {
  const slides = [
    {
      id: 1,
      title: "Master Next.js",
      subtitle: "The React Framework for Production",
      description:
        "Build full-stack React applications with zero configuration. Server-side rendering, static site generation, and API routes included.",
      image: nextjs,
      gradient: "from-blue-600 to-purple-700",
      buttonColor:
        "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
      badge: "🔥 Most Popular",
      features: ["SSR & SSG", "API Routes", "Zero Config"],
    },
    {
      id: 2,
      title: "Learn React.js",
      subtitle: "Build Modern User Interfaces",
      description:
        "Create interactive UIs with React's component-based architecture. Learn hooks, state management, and modern React patterns.",
      image: react,
      gradient: "from-cyan-500 to-blue-600",
      buttonColor:
        "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600",
      badge: "⚡ Trending",
      features: ["Components", "Hooks", "State Management"],
    },
    {
      id: 3,
      title: "JavaScript Pro",
      subtitle: "From Basics to Advanced Concepts",
      description:
        "Master JavaScript fundamentals and advanced concepts. Learn ES6+, async programming, and modern JavaScript patterns.",
      image: javascript,
      gradient: "from-yellow-400 to-orange-500",
      buttonColor:
        "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600",
      badge: "🎯 Essential",
      features: ["ES6+", "Async/Await", "Modern Patterns"],
    },
  ];

  return (
    <div className="w-full relative overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-white !w-8 !rounded-full",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="banner-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`min-h-[70vh] bg-gradient-to-br ${slide.gradient} relative overflow-hidden`}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
              </div>

              <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left space-y-6 relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                      <span className="text-white text-sm font-semibold">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-4">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        {slide.title.split(" ").map((word, index) => (
                          <span
                            key={index}
                            className="block animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {word}
                          </span>
                        ))}
                      </h1>

                      <p className="text-xl md:text-2xl text-white/90 font-light">
                        {slide.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3">
                      {slide.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
                        >
                          <span className="text-white text-sm">✓</span>
                          <span className="text-white text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link
                        href="/courses"
                        className={`${slide.buttonColor} text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center`}
                      >
                        Start Learning Now 🚀
                      </Link>
                      <Link
                        href="/demo"
                        className="bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 text-center"
                      >
                        Watch Demo ▶
                      </Link>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 pt-6 text-white">
                      <div className="text-center">
                        <div className="text-2xl font-bold">10K+</div>
                        <div className="text-sm opacity-80">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">4.9★</div>
                        <div className="text-sm opacity-80">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-sm opacity-80">Success Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="flex-1 relative z-10">
                    <div className="relative group">
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>

                      {/* Main Image */}
                      <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={600}
                          height={400}
                          className="rounded-2xl shadow-2xl object-cover w-full h-auto max-w-md mx-auto lg:max-w-full"
                        />

                        {/* Image Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      </div>

                      {/* Floating Card */}
                      <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">✓</span>
                          </div>
                          <div>
                            <div className="font-bold text-gray-800">
                              Certified
                            </div>
                            <div className="text-sm text-gray-600">
                              Completion
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wave Decoration */}
              <div className="absolute bottom-0 left-0 right-0">
                <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="w-full h-12 text-white"
                >
                  <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .banner-swiper {
          border-radius: 0 0 2rem 2rem;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
