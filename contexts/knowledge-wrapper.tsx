// Import the react hooks.
import { createContext } from "react";
// Import the dummy course data to pass as the context.
import { dummyCourseData } from "@/data/dummyCourseData";

/* TODO
// Helper function to update the current module index.
const UpdateCourseDataCurrentModuleIndex = (moduleIndex: number) => {
  dummyCourseData
}
*/

// Takes the course data json with the modules and submodules.
// This is the default course content.
export const KnowledgeContext = createContext(dummyCourseData);


