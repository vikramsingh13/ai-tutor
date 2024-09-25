"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// component imports for the learning section
import KnowledgeSection from "@/components/knowledge-section";
import QuizSection from "@/components/quiz-section";
import InquirySection from "@/components/inquiry-section";

type Props = {};

// Learning Section component is the main learning page of the application.
// It will have primarily 3 components: knowledge section, quiz section, and inquiry section.
// The user will be able to learn new concepts, take quizzes, and ask questions in the above sections, respectively.
const LearningSection = (props: Props) => {
  // Initialize the router.
  // Will be used for further routing and accessing query parameters, e.g. userId
  const router = useRouter();

  // Will keep track of the user id from the query parameters to fetch the user's learning section
  const [userId, setUserId] = useState("");

  // useEffect to check if the router is ready,
  // and if it is, then we can access the query parameters to get the user id
  useEffect(() => {
    if (router.isReady) {
      setUserId(router.query.userId);
      console.log("User ID: ", userId);
    }
  }, [router.isReady]);

  return (
    /* Learning Section should take up full width and height available to it. */
    <div className="flex flex-col w-full min-h-screen bg-blue-300 text-center items-align">
      {/* learning section heading will be at the top followed by the 3 components. */}
      <div>LearningSection Heading</div>
      {/* Kwowledge section will take up the left 50% of the rest of the column */}
      <div className="flex flex-1 w-full">
        <div className="flex-1 flex-grow bg-blue-200 border-y-4 border-l-4 border-r-2">
          <KnowledgeSection />
        </div>
        {/* Quiz and Inquiry sections will take up the right 50% of the rest of the column and they will be stacked on top of each other */}
        <div className="flex-1 flex flex-col flex-grow bg-orange-300 border-y-4 border-l-2 border-r-4">
          <div className="h-1/2 bg-orange-300 border-b-2">
            <QuizSection />
          </div>
          <div className="h-1/2 bg-orange-300 border-t-2">
            <InquirySection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;
