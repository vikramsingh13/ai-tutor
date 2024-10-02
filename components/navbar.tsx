"use client";

import { useState, useEffect } from "react";
// Import the sessions consumer from "next-auth/react" to verify if the user has logged in or not and general session management.
import { useSession } from "next-auth/react";
// Import useRouter, redirect, usePathname from 'next/navigation' to help with basic routing and redirction.
import { useRouter, redirect, usePathname } from "next/navigation";
// Import the UserNotLoggedin component to delegate no user session found logic.
import UserNotLoggedin from "@/components/user-not-loggedin";

const Navbar = ({ children } : {children: React.ReactNode}) => {
  // Use the useSession consumer to manage sessions.
  // Destructure the data from useSession as session for better readability.
  const { data: session } = useSession();
  // Track if valid session exists or not.
  const [isSessionValid, setIsSessionValid] = useState(false);

  // Update isSessionValid based on the changes to the session object.
  useEffect(() => {
    session ? setIsSessionValid(true) : setIsSessionValid(false);
  }, [session])

  return (
    <>
      <navbar> Navbar code goes here </navbar>
      { !isSessionValid ? <UserNotLoggedin /> : children }
    </>
  );
};

export default Navbar;
