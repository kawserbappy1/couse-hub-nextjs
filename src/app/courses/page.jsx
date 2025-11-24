"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
