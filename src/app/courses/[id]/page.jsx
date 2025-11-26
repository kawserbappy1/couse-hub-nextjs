"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function CourseDetails() {
  const params = useParams();
  const { id } = params;
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/courses/${id}`);
        const data = await res.json();

        if (res.ok) {
          setCourse(data);
        } else {
          console.error("Error fetching course:", data.error);
          // Handle error state if needed
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
          <p className="text-base-content/70">Loading course details...</p>
        </div>
      </div>
    );
  }

  // Show error state if course not found
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-error mb-2">
            Course Not Found
          </h2>
          <p className="text-base-content/70">
            The course you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // Safe data access with fallbacks
  const enrollStudent = course.enrollStudent || 0;
  const review = course.review || 0;
  const duration = course.duration || "Not specified";
  const totalLesson = course.totalLesson || 0;
  const price = course.price || 0;
  const thumbnail = course.thumbnail || "/default-course-image.jpg";
  const description = course.description || "No description available.";
  const title = course.title || "Untitled Course";

  // Sample curriculum data
  const curriculum = [
    {
      week: 1,
      title: "Introduction to MERN Stack",
      lessons: [
        "What is MERN Stack?",
        "Setting up Development Environment",
        "Introduction to MongoDB",
        "Express.js Fundamentals",
      ],
    },
    {
      week: 2,
      title: "React Fundamentals",
      lessons: [
        "React Components & JSX",
        "Props and State",
        "Event Handling",
        "Conditional Rendering",
      ],
    },
    {
      week: 3,
      title: "Backend with Node.js & Express",
      lessons: [
        "RESTful API Design",
        "Middleware Concepts",
        "Error Handling",
        "Authentication Setup",
      ],
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "This course completely transformed my career! The projects are real-world and very practical.",
      date: "2 weeks ago",
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment:
        "Excellent content and great instructor. The MERN stack is explained in a very comprehensive way.",
      date: "1 month ago",
    },
    {
      name: "Emily Davis",
      rating: 4,
      comment:
        "Loved the course! Would have liked more advanced deployment techniques though.",
      date: "2 months ago",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl opacity-90 mb-8">{description}</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span>{enrollStudent.toLocaleString()}+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>{review}/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📅</span>
                <span>{duration}</span>
              </div>
              {course.certificate && (
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <span>Certificate</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
              <Image
                src={thumbnail}
                alt={title}
                width={1200}
                height={600}
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.target.src = "/default-course-image.jpg";
                }}
              />
            </div>

            {/* Tabs */}
            <div className="bg-base-100 rounded-3xl shadow-xl p-6 mb-8">
              <div className="tabs tabs-boxed bg-base-200 mb-6">
                <button
                  className={`tab tab-lg ${
                    activeTab === "overview" ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  📖 Overview
                </button>
                <button
                  className={`tab tab-lg ${
                    activeTab === "curriculum" ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab("curriculum")}
                >
                  📚 Curriculum
                </button>
                <button
                  className={`tab tab-lg ${
                    activeTab === "reviews" ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  ⭐ Reviews
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">
                    Course Overview
                  </h3>
                  <p className="text-base-content/80 leading-relaxed">
                    {description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-base-200 p-4 rounded-xl">
                      <h4 className="font-bold text-lg mb-2 text-secondary">
                        What You'll Learn
                      </h4>
                      <ul className="space-y-2 text-base-content/80">
                        <li>• Build complete full-stack applications</li>
                        <li>• RESTful API development with Express</li>
                        <li>• Modern React with hooks and context</li>
                        <li>• MongoDB database design and queries</li>
                        <li>• Authentication and authorization</li>
                        <li>• Deployment and production ready apps</li>
                      </ul>
                    </div>

                    <div className="bg-base-200 p-4 rounded-xl">
                      <h4 className="font-bold text-lg mb-2 text-secondary">
                        Prerequisites
                      </h4>
                      <ul className="space-y-2 text-base-content/80">
                        <li>• Basic JavaScript knowledge</li>
                        <li>• HTML & CSS fundamentals</li>
                        <li>• Willingness to learn and code daily</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">
                    Course Curriculum
                  </h3>
                  <div className="space-y-4">
                    {curriculum.map((week, index) => (
                      <div
                        key={index}
                        className="collapse collapse-plus bg-base-200"
                      >
                        <input type="radio" name="curriculum-accordion" />
                        <div className="collapse-title text-xl font-medium">
                          Week {week.week}: {week.title}
                        </div>
                        <div className="collapse-content">
                          <ul className="space-y-2">
                            {week.lessons.map((lesson, lessonIndex) => (
                              <li
                                key={lessonIndex}
                                className="flex items-center gap-3"
                              >
                                <span className="text-primary">▶</span>
                                <span>{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">
                    Student Reviews
                  </h3>
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-base-200 p-6 rounded-xl">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-12">
                              <span className="text-lg">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold">{review.name}</h4>
                            <div className="flex items-center gap-2">
                              {renderStars(review.rating)}
                              <span className="text-sm text-base-content/60">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-base-content/80">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Pricing & Enrollment */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Pricing Card */}
              <div className="bg-base-100 rounded-3xl shadow-2xl p-6 border-2 border-primary/20">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    ${price}
                  </div>
                  <div className="text-base-content/70">One-time payment</div>
                </div>

                <button className="btn btn-primary btn-lg w-full mb-4 text-lg font-bold">
                  Enroll Now 🚀
                </button>

                <button className="btn btn-outline btn-secondary w-full mb-6">
                  Add to Wishlist 💖
                </button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>{totalLesson} lessons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>Project source code</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>Community access</span>
                  </div>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="bg-base-100 rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Instructor
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-content flex items-center justify-center text-xl font-bold">
                      JD
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">John Doe</h4>
                    <p className="text-base-content/70">
                      Senior Full Stack Developer
                    </p>
                  </div>
                </div>
                <p className="text-base-content/80 text-sm">
                  With over 8 years of experience in web development, John has
                  helped thousands of students become professional developers.
                </p>
              </div>

              {/* Stats Card */}
              <div className="bg-base-100 rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Course Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-base-content/70">
                      Students enrolled:
                    </span>
                    <span className="font-bold">
                      {enrollStudent.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Rating:</span>
                    <span className="font-bold flex items-center gap-1">
                      {review}/5 ⭐
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Duration:</span>
                    <span className="font-bold">{duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Lessons:</span>
                    <span className="font-bold">{totalLesson}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
