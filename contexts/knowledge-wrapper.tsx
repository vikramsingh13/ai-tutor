// Import the react hooks.
import { createContext } from "react";
// Import the dummy course data to pass as the context.
import { dummyCourseData } from "@/data/dummyCourseData";

// Takes the course data json with the modules and submodules.
// This is the default course content.
export const KnowledgeContext = createContext(dummyCourseData);

/*
// KnowledgeWrapper takes children of type ReactNode as a param.
// Returns the children wrapped by the CourseContext context object.
const KnowledgeWrapper = (children: React.ReactNode) => {
  // Wrap the children with the CourseContext and return it.
  return <CourseContext.Provider value={dummyCourseData}>{children}</CourseContext.Provider>;
};

export default KnowledgeWrapper;
*/
