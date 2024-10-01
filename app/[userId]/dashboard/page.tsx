"use client";
import { useState, useEffect } from "react";
// import the router hooks from next navigation.
import { useRouter, useParams } from "next/navigation";
// Import the sessions consumer from "next-auth/react" to verify if the user has logged in or not and general session management.
import { useSession } from "next-auth/react";
// import the UserPageProps to further extend as DashboardProps.
import { UserPageProps } from "@/types/types";
// import the shadcn ui components
import { Button } from "@/components/ui/button";
// Import the the UserNotLoggedin component to delegate the business logic for handling no login.
import UserNotLoggedin from "@/components/user-not-loggedin";

// Defines the Dashboard Props object.
interface DashboardProps extends UserPageProps {}

const Dashboard = () => {
  // Initialize the next router object.
  const router = useRouter();
  // use the useParams hooks to acquire the userId from the query slug.
  const { userId } = useParams();

  // Use the useSession consumer to manage sessions.
  // Destructure the data from useSession as session for better readability.
  const { data: session } = useSession();

  // Function to handle learning section click.
  const handleContinueLearningClick = () => {
    router.push(`/${userId}/learning-section`);
  };

  return (
    <>
      {session ? (
        <>
          <div>Dashboard</div>
          <Button onClick={handleContinueLearningClick}>
            Continue Learning
          </Button>
        </>
      ) : (
        <UserNotLoggedin />
      )}
    </>
  );
};

export default Dashboard;
