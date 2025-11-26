// src/components/AuthToast.js
"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "@/lib/toast";

export default function AuthToast() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      // Only show toast once when they first log in
      const hasShown = sessionStorage.getItem("loginToastShown");

      if (!hasShown) {
        toast.fire({
          icon: "success",
          title: `Welcome back, ${
            session.user.name?.split(" ")[0] || "Friend"
          }!`,
          text: "You are now signed in",
        });

        sessionStorage.setItem("loginToastShown", "true");
      }
    }

    // Reset when they log out
    if (status === "unauthenticated") {
      sessionStorage.removeItem("loginToastShown");
    }
  }, [status, session]);

  return null; // This component renders nothing
}
