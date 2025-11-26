"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    totalLesson: "",
    enrollStudent: "",
    review: "",
    certificate: false,
    duration: "",
    price: "",
    thumbnail: "",
    category: "",
    level: "",
    instructorName: "",
    instructorRole: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Course created successfully:", result);

        // Show success SweetAlert
        Swal.fire({
          title: "Success!",
          text: "Course created successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#3B82F6",
          timer: 3000,
          timerProgressBar: true,
          didClose: () => {
            // Redirect to courses page after alert is closed
            router.push("/courses");
          },
        });

        // Reset form
        setFormData({
          title: "",
          description: "",
          totalLesson: "",
          enrollStudent: "",
          review: "",
          certificate: false,
          duration: "",
          price: "",
          thumbnail: "",
          category: "",
          level: "",
          instructorName: "",
          instructorRole: "",
        });

        // Alternative: Auto-redirect after 3 seconds even if user doesn't close the alert
        setTimeout(() => {
          router.push("/courses");
        }, 3000);
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create course");
      }
    } catch (error) {
      console.error("Error creating course:", error);

      // Show error SweetAlert
      Swal.fire({
        title: "Error!",
        text: error.message || "Error creating course. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#EF4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Alternative submit handler with custom SweetAlert styling
  const handleSubmitWithCustomAlert = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const result = await res.json();

        // Custom styled success alert
        Swal.fire({
          title: "🎉 Course Created!",
          text: "Your course has been successfully added to the platform.",
          icon: "success",
          iconColor: "#10B981",
          confirmButtonText: "View Courses",
          confirmButtonColor: "#3B82F6",
          showCancelButton: true,
          cancelButtonText: "Add Another",
          cancelButtonColor: "#6B7280",
          customClass: {
            popup: "rounded-2xl",
            title: "text-2xl font-bold",
            confirmButton: "rounded-lg px-6 py-2",
            cancelButton: "rounded-lg px-6 py-2",
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to courses page
            router.push("/courses");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Reset form for adding another course
            setFormData({
              title: "",
              description: "",
              totalLesson: "",
              enrollStudent: "",
              review: "",
              certificate: false,
              duration: "",
              price: "",
              thumbnail: "",
              category: "",
              level: "",
              instructorName: "",
              instructorRole: "",
            });
          }
        });
      } else {
        throw new Error("Failed to create course");
      }
    } catch (error) {
      console.error("Error creating course:", error);

      Swal.fire({
        title: "😞 Failed to Create Course",
        text: "There was an error creating your course. Please check your inputs and try again.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#EF4444",
        customClass: {
          popup: "rounded-2xl",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const courseDurations = [
    "4 weeks",
    "6 weeks",
    "8 weeks",
    "10 weeks",
    "12 weeks",
    "16 weeks",
  ];
  const categories = [
    "Web Development",
    "React",
    "Node.js",
    "MongoDB",
    "Full Stack",
    "JavaScript",
  ];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Add New Course
          </h1>
          <p className="text-xl text-base-content/70">
            Create an amazing course for your students
          </p>
        </div>

        {/* Use handleSubmitWithCustomAlert for the custom styled version */}
        <form onSubmit={handleSubmit}>
          <div className="bg-base-100 rounded-3xl shadow-2xl p-8 border border-base-300">
            {/* Course Thumbnail Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Course Thumbnail
              </h2>
              <div className="border-2 border-dashed border-base-300 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                <div className="text-4xl mb-4">📸</div>
                <p className="text-base-content/70 mb-4">
                  Upload your course thumbnail image
                </p>
                <input
                  type="text"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  placeholder="Enter image URL (e.g., /images/courses/mern-stack.jpg)"
                  className="input input-bordered w-full max-w-md mb-4 focus:border-primary"
                />
                <p className="text-sm text-base-content/50 mt-2">
                  Recommended: 800x600px, JPG, PNG or WebP
                </p>
              </div>
            </div>

            {/* Course Details Form */}
            <div className="space-y-6">
              {/* Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Course Title *
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Full Stack MERN Development Mastery"
                  className="input input-bordered input-lg w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Course Description *
                  </span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe what students will learn in this course..."
                  rows="4"
                  className="textarea textarea-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  required
                ></textarea>
              </div>

              {/* Course Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Lessons */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Total Lessons
                    </span>
                  </label>
                  <input
                    type="number"
                    name="totalLesson"
                    value={formData.totalLesson}
                    onChange={handleChange}
                    placeholder="65"
                    className="input input-bordered w-full focus:border-primary"
                  />
                </div>

                {/* Duration */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Duration</span>
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="select select-bordered w-full focus:border-primary"
                  >
                    <option value="">Select duration</option>
                    {courseDurations.map((duration) => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Price ($) *
                    </span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="149.99"
                    step="0.01"
                    className="input input-bordered w-full focus:border-primary"
                    required
                  />
                </div>

                {/* Rating */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    step="0.1"
                    min="0"
                    max="5"
                    placeholder="4.8"
                    className="input input-bordered w-full focus:border-primary"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Enrolled Students */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Enrolled Students
                    </span>
                  </label>
                  <input
                    type="number"
                    name="enrollStudent"
                    value={formData.enrollStudent}
                    onChange={handleChange}
                    placeholder="1500"
                    className="input input-bordered w-full focus:border-primary"
                  />
                </div>

                {/* Certificate */}
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-4">
                    <input
                      type="checkbox"
                      name="certificate"
                      checked={formData.certificate}
                      onChange={handleChange}
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text font-semibold">
                      Include Certificate
                    </span>
                  </label>
                </div>
              </div>

              {/* Course Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Category
                  </span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="select select-bordered w-full focus:border-primary"
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Level */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Course Level
                  </span>
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="select select-bordered w-full focus:border-primary"
                >
                  <option value="">Select level</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Instructor Section */}
              <div className="bg-base-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Instructor Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Instructor Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="instructorName"
                      value={formData.instructorName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="input input-bordered w-full focus:border-primary"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Instructor Role
                      </span>
                    </label>
                    <input
                      type="text"
                      name="instructorRole"
                      value={formData.instructorRole}
                      onChange={handleChange}
                      placeholder="Senior Full Stack Developer"
                      className="input input-bordered w-full focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-base-300">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg flex-1 text-lg font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Creating Course...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">🚀</span>
                      Create Course
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-outline btn-lg flex-1"
                  onClick={() =>
                    setFormData({
                      title: "",
                      description: "",
                      totalLesson: "",
                      enrollStudent: "",
                      review: "",
                      certificate: false,
                      duration: "",
                      price: "",
                      thumbnail: "",
                      category: "",
                      level: "",
                      instructorName: "",
                      instructorRole: "",
                    })
                  }
                >
                  Clear Form
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Preview Card */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-primary mb-4 text-center">
            Course Preview
          </h3>
          <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-300">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Preview Image */}
              <div className="bg-gradient-to-br from-primary to-secondary h-48 rounded-xl flex items-center justify-center">
                {formData.thumbnail ? (
                  <img
                    src={formData.thumbnail}
                    alt="Course thumbnail"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <span className="text-4xl text-primary-content">📚</span>
                )}
              </div>

              {/* Preview Details */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-base-content">
                  {formData.title || "Course Title Preview"}
                </h4>
                <p className="text-base-content/70">
                  {formData.description ||
                    "Course description will appear here..."}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span>📚</span>
                    <span>{formData.totalLesson || "0"} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>{formData.review || "0.0"}/5</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👥</span>
                    <span>{formData.enrollStudent || "0"} students</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    ${formData.price || "0.00"}
                  </span>
                  {formData.certificate && (
                    <div className="badge badge-primary">Certificate</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
