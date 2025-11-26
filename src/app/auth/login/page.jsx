"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push("/");
      }
    });
  }, [router]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle email/password login - FIXED VERSION
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form data
      if (!formData.email || !formData.password) {
        alert("Please fill in all required fields");
        setIsLoading(false);
        return;
      }

      // Call NextAuth signIn function for login ONLY
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        // REMOVED the action and name fields - this is purely for login
        redirect: false,
      });

      if (result?.error) {
        console.error("Login error:", result.error);
        alert("Login failed. Please check your credentials.");
      } else {
        // Successful login - redirect to home page
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Authentication error:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const result = await signIn("google", {
        callbackUrl: "/", // Redirect to home after successful login
        redirect: true, // Let NextAuth handle the redirect
      });

      // If there's an error, it will be handled by the error page
      if (result?.error) {
        alert("Google login failed. Please try again.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("An error occurred during Google login.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle LinkedIn login (placeholder - you'll need to set up LinkedIn provider)
  const handleLinkedInLogin = async () => {
    alert(
      "LinkedIn login is not configured yet. Please use Google or email login."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-base-100 rounded-3xl shadow-2xl p-8 border border-base-300">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-white font-bold">⚡</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-base-content/70 mt-2">
              Sign in to your account to continue
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-4 mb-6">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="btn btn-outline w-full hover:btn-primary transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <span className="mr-2">🔍</span>
              )}
              Continue with Google
            </button>
            <button
              onClick={handleLinkedInLogin}
              disabled={isLoading}
              className="btn btn-outline w-full hover:btn-secondary transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <span className="mr-2">💼</span>
              )}
              Continue with LinkedIn
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-base-300"></div>
            <span className="px-4 text-base-content/50 text-sm">
              or continue with email
            </span>
            <div className="flex-1 border-t border-base-300"></div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleEmailLogin}>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input input-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
                minLength={6}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span className="label-text text-sm">Remember me</span>
              </label>

              <button
                type="button"
                className="text-sm text-primary hover:text-secondary transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary btn-lg w-full text-lg font-bold bg-gradient-to-r from-primary to-secondary border-none hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <span className="ml-2">🚀</span>
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link - Redirects to custom signin page */}
          <div className="text-center mt-6">
            <p className="text-base-content/70">
              Don't have an account?
              <Link
                href="/auth/signin" // This will redirect to your custom signin page
                className="text-primary hover:text-secondary font-semibold ml-2 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { icon: "📚", text: "10,000+ Courses" },
            { icon: "👥", text: "Expert Instructors" },
            { icon: "🏆", text: "Certificates" },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center bg-base-100/20 backdrop-blur-sm rounded-xl p-3"
            >
              <div className="text-2xl mb-1">{feature.icon}</div>
              <div className="text-white text-xs font-medium">
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
