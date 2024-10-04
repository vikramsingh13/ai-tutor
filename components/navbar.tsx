"use client";

import { useState, useEffect } from "react";
// Import the sessions consumer from "next-auth/react" to verify if the user has logged in or not and general session management.
import { useSession } from "next-auth/react";
// Import useRouter, redirect, usePathname from 'next/navigation' to help with basic routing and redirction.
import { useRouter, redirect, usePathname } from "next/navigation";
// Import the UserNotLoggedin component to delegate no user session found logic.
import UserNotLoggedin from "@/components/user-not-loggedin";
// Import shadcn ui components.
import { Button } from "@/components/ui/button";
// Import User login types for redirecting to the sign in/up page.
import { UserLoginType } from "@/types/types";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  // Use the useSession consumer to manage sessions.
  // Destructure the data from useSession as session for better readability.
  const { data: session } = useSession();
  // Track if valid session exists or not.
  const [isSessionValid, setIsSessionValid] = useState(false);

  // Update isSessionValid based on the changes to the session object.
  useEffect(() => {
    session ? setIsSessionValid(true) : setIsSessionValid(false);
  }, [session]);

  // Initialize the router.
  const router = useRouter();
  // Get pathname so when the session is not valid, the landing page and other non sign in pages will still be showing.
  const pathname = usePathname();
  // Function to handle the login button click by the user.
  const handleLoginButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // Get the login type from the button click event.
    const loginType = event.currentTarget.getAttribute("logintype");
    // Push the login page with the login type to the router.
    router.push(`/login/${loginType}`);
  };

  // Function to handle logo click.
  const handleLogoClick = () => {
    // Redirect to homepage.
    router.push("/");
  };

  console.log("nav pathname: ", pathname);
  return (
    <div className="w-full">
      <navbar className="flex bg-custom-bg-dark w-full p-4 justify-center text-center items-center">
        <p
          onClick={handleLogoClick}
          className="cursor-pointer text-[2rem] max-sm:text-[1rem]"
        >
          TutorFlex.app
        </p>
        {/* Takes the user to the signin/signup pages. */}
        {/* This Login button redirects to the sign in page by using the loginType prop */}
        <div className="flex flex-grow justify-end">
          <Button
            onClick={handleLoginButtonClick}
            logintype={UserLoginType.SIGN_IN}
          >
            Login
          </Button>
        </div>
      </navbar>
      {/* If the session is invalid and the user is trying to access dashboard, learning-section, etc. show the UserNotLoggedin component instead of the children. */}
      {!isSessionValid &&
      (pathname.includes("/dashboard") ||
        pathname.includes("/learning-section")) ? (
        <UserNotLoggedin />
      ) : (
        children
      )}
    </div>
  );
};

export default Navbar;
