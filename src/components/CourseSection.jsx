"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Link from "next/link";

export default function CourseSection() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses");
        const data = await response.json();
        // Get first 6 courses
        setCourses(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Discover our most popular courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="skeleton h-48 w-full"></div>
                <div className="card-body">
                  <div className="skeleton h-6 w-3/4 mb-2"></div>
                  <div className="skeleton h-4 w-full mb-2"></div>
                  <div className="skeleton h-4 w-full mb-2"></div>
                  <div className="skeleton h-4 w-1/2 mb-4"></div>
                  <div className="skeleton h-10 w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Discover our most popular courses and start your learning journey
            today
          </p>
        </div>

        {/* Courses Grid */}
        {courses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>

            {/* View All Courses Button */}
            <div className="text-center">
              <Link href="/courses" className="btn btn-primary btn-lg">
                View All Courses
                <span className="ml-2">📚</span>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-base-content mb-2">
              No Courses Available
            </h3>
            <p className="text-base-content/70">
              Check back later for new courses!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
