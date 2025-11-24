import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ course }) {
  if (!course) return null;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-base-300 hover:border-primary/50">
      {/* Image Container */}
      <figure className="overflow-hidden relative">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {course.certificate && (
            <div className="badge badge-primary badge-sm text-white border-0 shadow-lg">
              🏆 Certificate
            </div>
          )}
          <div className="badge badge-secondary badge-sm text-white border-0 shadow-lg">
            {course.duration}
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-content px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            ${course.price}
          </div>
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-6">
        {/* Title */}
        <h2 className="card-title text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h2>

        {/* Description */}
        <p className="text-base-content/70 text-sm line-clamp-2 mb-4">
          {course.description}
        </p>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm text-base-content/60 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-primary">📚</span>
            <span>{course.totalLesson} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-secondary">👥</span>
            <span>{course.enrollStudent.toLocaleString()}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex">{renderStars(course.review)}</div>
            <span className="text-sm font-semibold text-base-content">
              {course.review}/5
            </span>
          </div>
          <div className="text-xs text-base-content/60">
            ({course.enrollStudent.toLocaleString()} students)
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-between items-center">
          <Link
            href={`/courses/${course._id}`}
            className="btn btn-primary btn-sm flex-1 group-hover:btn-secondary transition-all"
          >
            Enroll Now
            <span className="ml-1 group-hover:scale-110 transition-transform">
              🚀
            </span>
          </Link>

          <button
            className="btn btn-ghost btn-sm btn-circle hover:bg-base-300 transition-colors"
            title="Add to wishlist"
          >
            <span className="text-lg">💖</span>
          </button>
        </div>
      </div>
    </div>
  );
}
