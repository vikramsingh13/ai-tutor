"use client";
import { useState, useEffect, useContext } from "react";
// import the router hooks from next navigation.
import { useRouter, useParams } from "next/navigation";
// import the UserPageProps to further extend as DashboardProps.
import { UserPageProps } from "@/types/types";
// Import the KnowledgeContext to use display the modules.
import { KnowledgeContext } from "@/contexts/knowledge-wrapper";
// Import the custom KnowledgeCard component to display the course content cards.
import KnowledgeCard from "@/components/knowledge-card";

// Defines the Dashboard Props object.
interface DashboardProps extends UserPageProps {}

const Dashboard = () => {
  // Initialize the next router object.
  const router = useRouter();
  // use the useParams hooks to acquire the userId from the query slug.
  const { userId } = useParams();
  // Get the knowledge context from the KnowledgeWrapper.
  const knowledgeContext = useContext(KnowledgeContext);
  // Get the knowledge context data.
  const knowledgeContextData = knowledgeContext["knowledgeContextData"];
  // Get the setter for the knowledge context data.
  const setKnowledgeContextData = knowledgeContext["setKnowledgeContextData"];
  // Get the current module index.
  const currentModuleIndex = knowledgeContext["currentModuleIndex"];
  // Get the setter for current module index.
  const setCurrentModuleIndex = knowledgeContext["setCurrentModuleIndex"];

  // Function to handle start module button click in the knowledge cards.
  // Updates the current module index in the KnowledgeContext.
  // Pushes the learning section to the router.
  const handleStartModuleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // Update the currentModuleIndex using the setter provided by the context wrapper.
    setCurrentModuleIndex(event.currentTarget.getAttribute("moduleIndex"));
    console.log(
      "module index change: ",
      event.currentTarget.getAttribute("moduleIndex")
    );
    router.push(`/${userId}/learning-section`);
  };

  // Function to generate the Knowledge Cards from the Knowledge Context data
  const renderKnowledgeCards = () => {
    // Get the modules from the knowledgeContext.
    const modules = knowledgeContextData["modules"];
    return Object.keys(modules).map((i) => {
      return (
        <div className="flex-1" key={i}>
          <KnowledgeCard
            moduleIndex={i}
            title={modules[i]["title"]}
            description={modules[i]["description"]}
            cardMaxHeight={400}
            cardDescriptionMaxHeight={200}
            handleCardButtonClick={handleStartModuleButtonClick}
            buttonText={"Start Module"}
          />
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col justify-center text-center items-center h-full gap-4">
      <div className="text-[3rem]">Dashboard</div>
      <div className="text-[1.5rem]">
        Course: {knowledgeContextData["courseTopic"]}
      </div>
      <div className="flex flex-wrap max-w-[900px] gap-4">
        {renderKnowledgeCards()}
      </div>
    </div>
  );
};

export default Dashboard;
