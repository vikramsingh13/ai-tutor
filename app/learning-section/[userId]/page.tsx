"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// component imports for the learning section
import KnowledgeSection from "@/components/knowledge-section";
import QuizSection from "@/components/quiz-section";
import InquirySection from "@/components/inquiry-section";

// Import quiz question types for the quiz section.
import { QuizQuestionTypes } from "@/types/types";

type Props = {};

// dummy knowledge data for the knowledge section.
const knowledgeData = {
  0: {
    title: "Title 0",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut saepe, quas provident perspiciatis earum voluptatibus fugiat autem quod fugit, neque in rerum impedit corrupti tenetur. Distinctio aspernatur eveniet recusandae? \n

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat nemo eveniet odit sed alias minima eaque laborum, perferendis ipsam aut aperiam laboriosam. Recusandae maiores veritatis placeat eveniet accusamus at! \n

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut saepe, quas provident perspiciatis earum voluptatibus fugiat autem quod fugit, neque in rerum impedit corrupti tenetur. Distinctio aspernatur eveniet recusandae? \n

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat nemo eveniet odit sed alias minima eaque laborum, perferendis ipsam aut aperiam laboriosam. Recusandae maiores veritatis placeat eveniet accusamus at!`
  },
  1: {
    title: "Title 1",
    isQuizable: true,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut saepe, quas provident perspiciatis earum voluptatibus fugiat autem quod fugit, neque in rerum impedit corrupti tenetur. Distinctio aspernatur eveniet recusandae? \n

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat nemo eveniet odit sed alias minima eaque laborum, perferendis ipsam aut aperiam laboriosam. Recusandae maiores veritatis placeat eveniet accusamus at! \n

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut saepe, quas provident perspiciatis earum voluptatibus fugiat autem quod fugit, neque in rerum impedit corrupti tenetur. Distinctio aspernatur eveniet recusandae? \n

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat nemo eveniet odit sed alias minima eaque laborum, perferendis ipsam aut aperiam laboriosam. Recusandae maiores veritatis placeat eveniet accusamus at!`,
  },
  2: {
    title: "Title 2",
    isQuizable: true,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut saepe, quas provident perspiciatis earum voluptatibus fugiat autem quod fugit, neque in rerum impedit corrupti tenetur. Distinctio aspernatur eveniet recusandae? \n

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat nemo eveniet odit sed alias minima eaque laborum, perferendis ipsam aut aperiam laboriosam. Recusandae maiores veritatis placeat eveniet accusamus at! \n

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut saepe, quas provident perspiciatis earum voluptatibus fugiat autem quod fugit, neque in rerum impedit corrupti tenetur. Distinctio aspernatur eveniet recusandae? \n

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat nemo eveniet odit sed alias minima eaque laborum, perferendis ipsam aut aperiam laboriosam. Recusandae maiores veritatis placeat eveniet accusamus at!`,
  },
};

// dummy topic for the knowledge section.
const topic = "User picked topic";

// Dummy quiz data for the quiz section.
const dummyQuizData = {
  0: {
    questionType: QuizQuestionTypes.MULTIPLE_CHOICE,
    question: "Question 0",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 1",
    isAnswered: false,
    userAnswer: "",
  },
  1: {
    questionType: QuizQuestionTypes.MULTIPLE_CHOICE,
    question: "Question 1",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 1",
    isAnswered: false,
    userAnswer: "",
  },
  2: {
    questionType: QuizQuestionTypes.MULTIPLE_CHOICE,
    question: "Question 2",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 2",
    isAnswered: false,
    userAnswer: "",
  },
  3: {
    questionType: QuizQuestionTypes.MULTIPLE_CHOICE,
    question: "Question 3",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 3",
    isAnswered: false,
    userAnswer: "",
  },
};

// Learning Section component is the main learning page of the application.
// It will have primarily 3 components: knowledge section, quiz section, and inquiry section.
// The user will be able to learn new concepts, take quizzes, and ask questions in the above sections, respectively.
const LearningSection = (props: Props) => {
  // Initialize the router.
  // Will be used for further routing and accessing query parameters, e.g. userId
  const router = useRouter();

  // Will keep track of the user id from the query parameters to fetch the user's learning section
  const [userId, setUserId] = useState("");

  // Track the quiz data for the quiz section.
  const [quizData, setQuizData] = useState(dummyQuizData);

  // useEffect to check if the router is ready,
  // and if it is, then we can access the query parameters to get the user id
  useEffect(() => {
    if (router.isReady) {
      setUserId(router.query.userId);
      console.log("User ID: ", userId);
    }
  }, [router.isReady]);

  // Function to handle Quiz submission
  const handleQuizSubmission = () => {
    /* Todo */
    console.log("learning-section/userId/page.tsx: Quiz Submitted!");
  }

  return (
    /* Learning Section should take up full width and height available to it. */
    <div className="flex flex-col w-full min-h-screen bg-blue-300 text-center items-align">
      {/* learning section heading will be at the top followed by the 3 components. */}
      <div>LearningSection Heading</div>
      {/* Kwowledge section will take up the left 50% of the rest of the column */}
      <div className="flex flex-1 w-full">
        <div className="flex-1 flex-grow bg-blue-200 border-y-4 border-l-4 border-r-2">
          {/* KnowledgeSection takes knowledgeData and topic as props */}
          <KnowledgeSection knowledgeData={knowledgeData} topic={topic}/>
        </div>
        {/* Quiz and Inquiry sections will take up the right 50% of the rest of the column and they will be stacked on top of each other */}
        <div className="flex-1 flex flex-col flex-grow bg-orange-300 border-y-4 border-l-2 border-r-4">
          <div className="h-1/2 bg-orange-300 border-b-2">
            {/* QuizSection takes quizData and setQuizData as props */}
            <QuizSection quizData={quizData} setQuizData={setQuizData} submitQuiz={handleQuizSubmission}/>
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
