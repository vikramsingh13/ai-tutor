'use client';

import { useRouter, redirect } from "next/navigation";
// Import the shadcn ui components.
import { Button } from "@/components/ui/button";
// Import the login type enums.
import { UserLoginType } from "@/types/types";

export default function Home() {
  // Initialize the router.
  const router = useRouter();
  // test user for development.
  const userId = 'test-user';
  // Function to handle the login button click by the user.
  const handleLoginButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Get the login type from the button click event.
    const loginType = event.currentTarget.getAttribute('loginType')
    // Push the login page with the login type to the router.
    router.push(`login/${loginType}`);
  }
  return (
    <div className="bg-custom-bg-dark text-white">
      { /* Redirect to /test-user/learning-section for now */ }
      {/* { redirect(`/${userId}/dashboard`) } */}

      {/* Takes the user to the signin/signup pages. */}
      {/* This Login button redirects to the sign in page by using the loginType prop */}
      <Button onClick={handleLoginButtonClick} loginType={UserLoginType.SIGN_IN}>Login</Button>
    </div>
  );
}
