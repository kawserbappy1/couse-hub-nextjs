"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? " text-secondary font-bold" : ""}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/about-us"
          className={
            pathname === "/about-us" ? "text-secondary  font-bold" : ""
          }
        >
          About Us
        </Link>
      </li>

      <li>
        <Link
          href="/courses"
          className={pathname === "/courses" ? "text-secondary  font-bold" : ""}
        >
          Courses
        </Link>
      </li>

      <li>
        <Link
          href="/blog"
          className={pathname === "/blog" ? "text-secondary  font-bold" : ""}
        >
          Blog
        </Link>
      </li>

      <li>
        <Link
          href="/testimonial"
          className={
            pathname === "/testimonial" ? "text-secondary  font-bold" : ""
          }
        >
          Testimonial
        </Link>
      </li>

      <li>
        <Link
          href="/contact-us"
          className={
            pathname === "/contact-us" ? "text-secondary font-bold" : ""
          }
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="/add-course"
          className={
            pathname === "/add-course" ? "text-secondary font-bold" : ""
          }
        >
          Add Course
        </Link>
      </li>
    </>
  );

  return (
    <div className="container mx-auto navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
          >
            {navLinks}
          </ul>
        </div>

        <a className="text-xl font-bold text-primary">
          Course <span className="text-secondary">Hub</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        <Link
          href={"/"}
          className="btn text-white bg-secondary capitalize tracking-wider"
        >
          login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
