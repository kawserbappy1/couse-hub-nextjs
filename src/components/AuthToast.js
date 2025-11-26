"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "@/lib/toast";

export default function AuthToast() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
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

    if (status === "unauthenticated") {
      sessionStorage.removeItem("loginToastShown");
    }
  }, [status, session]);

  return null;
  g;
}
