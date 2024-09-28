"use client";

import { useRouter, useParams } from "next/navigation";
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

// Dummy inquiry section chat messages
const dummyChatMessages = {
  0: { isUserMessage: true, message: "hello how are you?"},
  1: { isUserMessage: false, message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique facere dolorum mollitia assumenda esse pariatur sed inventore quaerat quod harum ipsam molestiae ad ullam, rerum ex odio? Explicabo, enim nostrum."},
  2: { isUserMessage: true, message: "That is very odd :O "},
  3: { isUserMessage: false, message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, itaque voluptatem? Distinctio minima numquam ea quisquam vel officiis itaque natus quis atque blanditiis, magnam consequatur maiores et id earum impedit."}
}

// Learning Section component is the main learning page of the application.
// It will have primarily 3 components: knowledge section, quiz section, and inquiry section.
// The user will be able to learn new concepts, take quizzes, and ask questions in the above sections, respectively.
const LearningSection = (props: Props) => {
  // Initialize the router.
  // Will be used for further routing and accessing query parameters, e.g. userId
  const router = useRouter();
  // use the useParams hooks to acquire the userId from the query slug.
  const { userId } = useParams();

  // Track the quiz data for the quiz section.
  const [quizData, setQuizData] = useState(dummyQuizData);

  // Function to handle Quiz submission.
  const handleQuizSubmission = () => {
    /* Todo */
    console.log(`/${userId}/learning-section/page.tsx: Quiz Submitted!`);
  }

  // Function to handle user sending chat messages in the inquiry section.
  const handleSendMessage = (chatData, message) => {
    /* Todo */
    /* Make the API call to the AI model with the chat data and user message and additional context */
    console.log(`/${userId}/learning-section/page.tsx: Message sent!`)
  }

  return (
    /* Learning Section should take up full width and height available to it. */
    <div className="flex flex-col w-full min-h-screen bg-custom-bg-dark text-center items-align text-white">
      {/* learning section heading will be at the top followed by the 3 components. */}
      <div className="p-4 bg-blue-950">LearningSection Heading</div>
      {/* Kwowledge section will take up the left 50% of the rest of the column */}
      <div className="flex flex-1 w-full">
        <div className="flex-1 flex-grow border-y-4 border-l-4 border-r-2 bg-custom-bg-dark-2">
          {/* KnowledgeSection takes knowledgeData and topic as props */}
          <KnowledgeSection knowledgeData={knowledgeData} topic={topic}/>
        </div>
        {/* Quiz and Inquiry sections will take up the right 50% of the rest of the column and they will be stacked on top of each other */}
        <div className="flex-1 flex flex-col flex-grow border-y-4 border-l-2 border-r-4">
          <div className="h-1/2 border-b-2 bg-black">
            {/* QuizSection takes quizData and setQuizData as props */}
            <QuizSection quizData={quizData} setQuizData={setQuizData} submitQuiz={handleQuizSubmission}/>
          </div>
          <div className="h-1/2 border-t-2">
            <InquirySection chatData={dummyChatMessages} handleSendMessage={handleSendMessage}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;