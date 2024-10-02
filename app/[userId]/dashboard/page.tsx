"use client";
import { useState, useEffect, useContext } from "react";
// import the router hooks from next navigation.
import { useRouter, useParams } from "next/navigation";
// import the UserPageProps to further extend as DashboardProps.
import { UserPageProps } from "@/types/types";
// import the shadcn ui components.
import { Button } from "@/components/ui/button";
// Import the KnowledgeContext to use display the modules.
import { KnowledgeContext } from '@/contexts/knowledge-wrapper';

// Defines the Dashboard Props object.
interface DashboardProps extends UserPageProps {}

const Dashboard = () => {
  // Initialize the next router object.
  const router = useRouter();
  // use the useParams hooks to acquire the userId from the query slug.
  const { userId } = useParams();
  // Get the knowledge context from the KnowledgeWrapper.
  const knowledgeContext = useContext(KnowledgeContext);

  console.log(knowledgeContext);

  // Function to handle learning section click.
  const handleContinueLearningClick = () => {
    router.push(`/${userId}/learning-section`);
  };

  return (
    <div className="flex flex-col justify-center text-center items-center h-full">
      <div>Dashboard</div>
      <Button onClick={handleContinueLearningClick}>Continue Learning</Button>
    </div>
  );
};

export default Dashboard;
