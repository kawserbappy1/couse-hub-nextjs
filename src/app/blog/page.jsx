"use client";
import React from "react";
import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use modern React hooks to build better components with less code and more functionality.",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "React",
      image: "/images/blog/react-hooks.jpg",
      avatar: "👩‍💼",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS for Rapid Development",
      excerpt:
        "Discover how Tailwind CSS can speed up your development process while maintaining design consistency.",
      author: "Mike Chen",
      date: "Dec 12, 2023",
      readTime: "6 min read",
      category: "CSS",
      image: "/images/blog/tailwind-css.jpg",
      avatar: "👨‍💻",
    },
    {
      id: 3,
      title: "Node.js Best Practices for 2024",
      excerpt:
        "Explore the latest best practices and patterns for building scalable Node.js applications.",
      author: "David Wilson",
      date: "Dec 8, 2023",
      readTime: "10 min read",
      category: "Node.js",
      image: "/images/blog/nodejs.jpg",
      avatar: "👨‍💼",
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt:
        "What trends and technologies will shape web development in the coming years? Our predictions.",
      author: "Emily Davis",
      date: "Dec 5, 2023",
      readTime: "12 min read",
      category: "Web Development",
      image: "/images/blog/future-web.jpg",
      avatar: "👩‍🎨",
    },
    {
      id: 5,
      title: "Building RESTful APIs with Express.js",
      excerpt:
        "A comprehensive guide to creating robust and maintainable REST APIs using Express.js framework.",
      author: "Mike Chen",
      date: "Dec 1, 2023",
      readTime: "15 min read",
      category: "Backend",
      image: "/images/blog/express-api.jpg",
      avatar: "👨‍💻",
    },
    {
      id: 6,
      title: "Introduction to MongoDB and Mongoose",
      excerpt:
        "Learn how to work with MongoDB databases and the Mongoose ODM for your Node.js applications.",
      author: "David Wilson",
      date: "Nov 28, 2023",
      readTime: "9 min read",
      category: "Database",
      image: "/images/blog/mongodb.jpg",
      avatar: "👨‍💼",
    },
  ];

  const categories = [
    "All",
    "React",
    "JavaScript",
    "Node.js",
    "CSS",
    "Web Development",
    "Backend",
    "Database",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in web
            development
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn btn-sm ${
                category === "All"
                  ? "btn-primary"
                  : "btn-outline hover:btn-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-base-100 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="badge badge-primary text-white border-0">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <span>{post.avatar}</span>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-base-content/60">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-base-content/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="btn btn-primary btn-sm group-hover:btn-secondary transition-all"
                >
                  Read More
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-base-100 rounded-3xl p-8 shadow-xl border border-base-300 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Stay Updated</h3>
          <p className="text-base-content/70 mb-6 max-w-md mx-auto">
            Get the latest articles and tutorials delivered straight to your
            inbox
          </p>
          <div className="join w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered join-item flex-1 focus:border-primary"
            />
            <button className="btn join-item bg-gradient-to-r from-primary to-secondary border-none text-primary-content">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
