// Import the react hooks.
import { createContext, useState } from "react";
// Import the dummy course data to pass as the context.
import { dummyCourseData } from "@/data/dummyCourseData";

// Takes the course data json with the modules and submodules.
// This is the default course content.
export const KnowledgeContext = createContext(null);

export const KnowledgeWrapper = ({
  children,
  value,
}: {
  chidlren: React.ReactNode;
  value?: {};
}) => {
  // UseState for the context content and setter.
  const [knowledgeContextData, setKnowledgeContextData] =
    useState(dummyCourseData);
  // Track the state of the current module index to display for learning sections and such.
  const [currentModuleIndex, setCurrentModuleIndex] = useState(1);

  return (
    <KnowledgeContext.Provider
      value={{
        knowledgeContextData,
        setKnowledgeContextData,
        currentModuleIndex,
        setCurrentModuleIndex,
      }}
    >
      {children}
    </KnowledgeContext.Provider>
  );
};
