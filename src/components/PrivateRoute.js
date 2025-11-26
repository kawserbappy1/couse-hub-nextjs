"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading

    if (!session) {
      // Redirect to login page if not authenticated
      router.push("/auth/login");
    }
  }, [session, status, router]);

  // Show loading while checking authentication
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

  // If user is authenticated, show the children (protected content)
  if (session) {
    return <>{children}</>;
  }

  // If not authenticated, show nothing (will redirect)
  return null;
};

export default PrivateRoute;
