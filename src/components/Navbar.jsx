"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

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
        {session ? (
          <Link
            href="/add-course"
            className={
              pathname === "/add-course" ? "text-secondary font-bold" : ""
            }
          >
            Add Course
          </Link>
        ) : (
          <Link
            href="/auth/login"
            className={
              pathname === "/add-course" ? "text-secondary font-bold" : ""
            }
          >
            Add Course
          </Link>
        )}
      </li>
    </>
  );

  if (status === "loading") {
    return (
      <div className="container mx-auto navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="text-xl font-bold text-primary">
            Course <span className="text-secondary">Hub</span>
          </a>
        </div>
        <div className="navbar-end">
          <div className="btn btn-ghost loading">Loading...</div>
        </div>
      </div>
    );
  }

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
            {/* Mobile menu auth section */}
            {session ? (
              <li className="border-t mt-2 pt-2">
                <div className="flex items-center gap-3 p-2">
                  {session.user?.image && (
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <Image
                          src={session.user.image}
                          alt={session.user.name || "User"}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  )}
                  <span className="text-sm font-medium">
                    {session.user?.name}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="btn btn-ghost btn-sm justify-start mt-2 text-error"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <li className="border-t mt-2 pt-2">
                <Link href="/auth/login" className="btn btn-secondary btn-sm">
                  Log In
                </Link>
              </li>
            )}
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
        {status === "loading" && (
          <div className="btn btn-ghost loading">Loading...</div>
        )}

        {status === "unauthenticated" && (
          <Link
            href="/auth/login"
            className="btn text-white bg-secondary capitalize tracking-wider"
          >
            Log In
          </Link>
        )}

        {status === "authenticated" && session && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar placeholder tooltip tooltip-bottom"
              data-tip={session.user?.name || "User"}
            >
              <div className="w-10 rounded-full bg-neutral text-neutral-content">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-xl font-bold">
                    {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li className="p-2 border-b">
                <p className="font-semibold">{session.user?.name}</p>
                <p className="text-sm text-gray-600">{session.user?.email}</p>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="text-error justify-start"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
