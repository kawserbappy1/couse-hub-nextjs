"use client";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SignUpForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    agreeToTerms: false,
  });

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push("/dashboard");
      }
    });
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCredentialsSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        photoURL: formData.photo,
        action: "signup",
        redirect: false,
      });

      if (result?.error) {
        alert("Sign up failed. Please try again.");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      alert("An error occurred during sign up.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      const result = await signIn("google", {
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (result?.error) {
        alert("Google sign in failed. Please try again.");
      }
    } catch (error) {
      console.error("Google sign in error:", error);
      alert("An error occurred during Google sign in.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-base-100 rounded-3xl shadow-2xl p-8 border border-base-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">👤</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-base-content/70 mt-2">
              Join our community and start your journey
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleCredentialsSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50">
                  👤
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="input input-bordered w-full pl-12 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50">
                  📧
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-12 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Profile Photo URL
                </span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50">
                  📸
                </span>
                <input
                  type="url"
                  name="photo"
                  value={formData.photo}
                  onChange={handleInputChange}
                  placeholder="Paste your photo URL"
                  className="input input-bordered w-full pl-12 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <label className="label">
                <span className="label-text-alt text-base-content/50">
                  Optional - we'll use a default avatar if not provided
                </span>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50">
                  🔒
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
                  className="input input-bordered w-full pl-12 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <label className="label">
                <span className="label-text-alt text-base-content/50">
                  Must be at least 8 characters
                </span>
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.agreeToTerms}
              className="btn btn-primary btn-lg w-full text-lg font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <span className="ml-2">🚀</span>
                </>
              )}
            </button>
          </form>

          <div className="divider my-8">OR</div>

          <button
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="btn btn-outline btn-lg w-full hover:bg-base-200 transition-all group disabled:opacity-50"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <>
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
                <span className="ml-2 group-hover:scale-110 transition-transform">
                  🔗
                </span>
              </>
            )}
          </button>

          <div className="text-center mt-8">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-primary font-semibold hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          {[
            { icon: "⚡", text: "Fast" },
            { icon: "🔒", text: "Secure" },
            { icon: "🎯", text: "Easy" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-xl p-3 shadow-sm border border-base-300"
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-sm text-base-content/70">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
