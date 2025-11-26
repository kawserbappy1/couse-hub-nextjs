"use client";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      // Get the current path for redirect after login
      const currentPath = window.location.pathname;
      // Redirect to your existing login page with callbackUrl
      router.push(`/auth/login?callbackUrl=${encodeURIComponent(currentPath)}`);
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg"></span>
          <p className="mt-4">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (session) {
    return <>{children}</>;
  }

  return null;
};

export default PrivateRoute;
