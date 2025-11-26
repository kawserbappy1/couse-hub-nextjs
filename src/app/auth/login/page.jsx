// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { signIn, getSession } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect } from "react";

// const Login = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || "/";

//   useEffect(() => {
//     getSession().then((session) => {
//       if (session) {
//         router.push(callbackUrl);
//       }
//     });
//   }, [router, callbackUrl]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleEmailLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       if (!formData.email || !formData.password) {
//         alert("Please fill in all required fields");
//         setIsLoading(false);
//         return;
//       }

//       const result = await signIn("credentials", {
//         email: formData.email,
//         password: formData.password,
//         redirect: false,
//       });

//       if (result?.error) {
//         console.error("Login error:", result.error);
//         alert("Login failed. Please check your credentials.");
//       } else {
//         console.log("Redirecting to:", callbackUrl);
//         router.push(callbackUrl);
//         router.refresh();
//       }
//     } catch (error) {
//       console.error("Authentication error:", error);
//       alert("An unexpected error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     setIsLoading(true);
//     try {
//       const result = await signIn("google", {
//         callbackUrl: callbackUrl,
//         redirect: true,
//       });

//       if (result?.error) {
//         alert("Google login failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Google login error:", error);
//       alert("An error occurred during Google login.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLinkedInLogin = async () => {
//     alert(
//       "LinkedIn login is not configured yet. Please use Google or email login."
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
//       <div className="max-w-md w-full">
//         <div className="bg-base-100 rounded-3xl shadow-2xl p-8 border border-base-300">
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center">
//                 <span className="text-2xl text-white font-bold">⚡</span>
//               </div>
//             </div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               Welcome Back
//             </h1>
//             <p className="text-base-content/70 mt-2">
//               Sign in to your account to continue
//             </p>
//           </div>

//           <div className="space-y-4 mb-6">
//             <button
//               onClick={handleGoogleLogin}
//               disabled={isLoading}
//               className="btn btn-outline w-full hover:btn-primary transition-all disabled:opacity-50"
//             >
//               {isLoading ? (
//                 <span className="loading loading-spinner loading-sm"></span>
//               ) : (
//                 <span className="mr-2">🔍</span>
//               )}
//               Continue with Google
//             </button>
//             <button
//               onClick={handleLinkedInLogin}
//               disabled={isLoading}
//               className="btn btn-outline w-full hover:btn-secondary transition-all disabled:opacity-50"
//             >
//               {isLoading ? (
//                 <span className="loading loading-spinner loading-sm"></span>
//               ) : (
//                 <span className="mr-2">💼</span>
//               )}
//               Continue with LinkedIn
//             </button>
//           </div>

//           <div className="flex items-center my-6">
//             <div className="flex-1 border-t border-base-300"></div>
//             <span className="px-4 text-base-content/50 text-sm">
//               or continue with email
//             </span>
//             <div className="flex-1 border-t border-base-300"></div>
//           </div>

//           <form className="space-y-4" onSubmit={handleEmailLogin}>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-semibold">Email Address</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
//                 required
//               />
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-semibold">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 className="input input-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
//                 required
//                 minLength={6}
//               />
//             </div>

//             <div className="flex justify-between items-center">
//               <label className="label cursor-pointer justify-start gap-2">
//                 <input
//                   type="checkbox"
//                   name="rememberMe"
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                   className="checkbox checkbox-primary checkbox-sm"
//                 />
//                 <span className="label-text text-sm">Remember me</span>
//               </label>

//               <button
//                 type="button"
//                 className="text-sm text-primary hover:text-secondary transition-colors"
//               >
//                 Forgot password?
//               </button>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="btn btn-primary btn-lg w-full text-lg font-bold bg-gradient-to-r from-primary to-secondary border-none hover:shadow-lg transition-all disabled:opacity-50"
//             >
//               {isLoading ? (
//                 <>
//                   <span className="loading loading-spinner"></span>
//                   Signing In...
//                 </>
//               ) : (
//                 <>
//                   Sign In
//                   <span className="ml-2">🚀</span>
//                 </>
//               )}
//             </button>
//           </form>

//           <div className="text-center mt-6">
//             <p className="text-base-content/70">
//               Don't have an account?
//               <Link
//                 href="/auth/signin"
//                 className="text-primary hover:text-secondary font-semibold ml-2 transition-colors"
//               >
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-4 mt-8">
//           {[
//             { icon: "📚", text: "10,000+ Courses" },
//             { icon: "👥", text: "Expert Instructors" },
//             { icon: "🏆", text: "Certificates" },
//           ].map((feature, index) => (
//             <div
//               key={index}
//               className="text-center bg-base-100/20 backdrop-blur-sm rounded-xl p-3"
//             >
//               <div className="text-2xl mb-1">{feature.icon}</div>
//               <div className="text-white text-xs font-medium">
//                 {feature.text}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  // If already logged in → redirect away
  useEffect(() => {
    getSession().then((session) => {
      if (session) router.push(callbackUrl);
    });
  }, [router, callbackUrl]);

  // ✔ Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✔ Credentials Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.email || !formData.password) {
        alert("Please fill in all required fields");
        setIsLoading(false);
        return;
      }

      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        alert("Invalid email or password");
      } else {
        router.push(callbackUrl);
      }
    } catch (error) {
      console.error(error);
      alert("Unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // ✔ Google OAuth login
  const handleGoogleLogin = async () => {
    setIsLoading(true);

    await signIn("google", {
      callbackUrl: callbackUrl, // NEXTAUTH_URL + callback
      redirect: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-base-100 rounded-3xl shadow-2xl p-8 border border-base-300">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-base-content/70 mt-2">
              Sign in to your account to continue
            </p>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-4 mb-6">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="btn btn-outline w-full hover:btn-primary transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <span>🔍 Continue with Google</span>
              )}
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-base-300"></div>
            <span className="px-4 text-base-content/50 text-sm">
              or continue with email
            </span>
            <div className="flex-1 border-t border-base-300"></div>
          </div>

          {/* Email Login */}
          <form className="space-y-4" onSubmit={handleEmailLogin}>
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
                className="input input-bordered w-full"
                required
              />
            </div>

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
                className="input input-bordered w-full"
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary btn-lg w-full text-lg"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner"></span> Signing
                  In...
                </>
              ) : (
                "Sign In 🚀"
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-base-content/70">
              Don't have an account?
              <Link
                href="/auth/signin"
                className="text-primary font-semibold ml-2"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
