"use client";
import React, { ReactNode } from "react";
import { useLoginContext } from "../contexts/LoginContext"; // Import your context
import { useRouter } from "next/navigation"; // Use Next.js router

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { userData } = useLoginContext(); // Access user data from context
  const router = useRouter();

  // Check if the user is not logged in
  if (!userData.loggedIn) {
    // Redirect to login page
    router.replace("/login");
    return null; // While redirecting, don't render anything
  }

  // Render the children if the user is authenticated
  return <div className="bg-white">{children}</div>;
};

export default PrivateRoute;
