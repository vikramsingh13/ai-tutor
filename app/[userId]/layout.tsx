"use client";

import React from "react";

// Import the KnowledgeWrapper for state management of the course content.
import { KnowledgeWrapper } from "@/contexts/knowledge-wrapper";
// Import the dummy course data to pass as the context.
import { dummyCourseData } from "@/data/dummyCourseData";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      {/* Use the knowledge wrapper provider to pass the dummy course data to be used by the child components. */}
      <KnowledgeWrapper>{children}</KnowledgeWrapper>
    </div>
  );
};

export default UserLayout;
