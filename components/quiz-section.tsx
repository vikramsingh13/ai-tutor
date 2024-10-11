"use client";

import { useState } from "react";
// Import the QuizQuestionTypes enum from the types/types.ts file.
import { QuizQuestionTypes, SectionNavigationButtonTypes } from "@/types/types";

// Import the shadcn ui components
import { Button } from "@/components/ui/button";

type QuizSectionProps = {
  // JSON object for the quiz data.
  quizData: {};
  // Setter function to set the quiz data.
  setQuizData: () => void;
  // Function to handle quiz submission.
  // The parent will take care of the quiz submission logic and further business logic implementation.
  submitQuiz: () => void;
  // To keep track of the quiz submission state.
  isQuizSubmitted: boolean;
};

const QuizSection = ({
  quizData,
  setQuizData,
  submitQuiz,
  isQuizSubmitted,
}: QuizSectionProps) => {
  /* Todo: refactor the index tracking logic to the parent. */
  // Keep track of the quiz question index.
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);

  //console.log(quizData);

  // Function to handle user radio button click
  const handleUserRadioButtonClick = (
    event: React.ChangeEvent<HTMLButtonEvent>
  ) => {
    // Copy of the quiz data.
    const quizDataCopy = { ...quizData };
    // Get the value of the option selected by the user.
    const userOptionValue = event.target.value;
    // Update the user answer in the quiz data.
    quizDataCopy[quizQuestionIndex].userAnswer = userOptionValue;
    // Update the isAnswered flag to true.
    // This will be used later on to disable the radio buttons or checkboxes, according to business logic.
    quizDataCopy[quizQuestionIndex].isAnswered = true;
    // Set the updated quiz data.
    setQuizData(quizDataCopy);
  };

  // Function to handle quiz section navigation button click.
  const handleQuizSectionNavigationButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // Get the index change value from the button click event.
    let indexChangeValue = event.currentTarget.getAttribute("navigation");
    // Convert the indexChangeValue to a number.
    try {
      indexChangeValue = parseInt(indexChangeValue);
    } catch (e) {
      // Error logging can go here.
      return;
    }

    // Calculate the new quizQuestionIndex.
    let newQuizQuestionIndex = quizQuestionIndex + indexChangeValue;

    // If new index is less than 0, set it to 0.
    // If new index is greater the index of the last element, set it to the last element's index
    newQuizQuestionIndex =
      newQuizQuestionIndex < 0
        ? 0
        : newQuizQuestionIndex >= Object.keys(quizData).length
        ? Object.keys(quizData).length - 1
        : newQuizQuestionIndex;

    // Set the new quiz question index
    setQuizQuestionIndex(newQuizQuestionIndex);
  };

  // Function to render the stylized quiz question.
  const renderQuizQuestion = () => {
    // If quiz hasn't started, the quizData will be an empty object.
    // In that case, early return a div with an info message.
    if (!quizData || Object.keys(quizData).length === 0) {
      return <div>Press the 'Quiz' button to start the quiz.</div>;
    }
    // Get the current quiz question.
    const quizQuestion = quizData[quizQuestionIndex];
    // Check if the question has already been answered or not.
    /*if(quizQuestion.isAnswered){
      return <p>answered</p>
    }*/
    // Check if the question is a multiple choice question.
    if (quizQuestion.questionType === QuizQuestionTypes.MULTIPLE_CHOICE) {
      return (
        <div className="flex flex-col w-full">
          <h3>{quizQuestion.question}</h3>
          {/* Radio buttons for MCQ */}
          <ul className="p-4">
            {quizQuestion.options.map((option, index) => {
              return (
                <li key={index} className="p-2 flex flex-row">
                  <input
                    type="radio"
                    name="quiz"
                    value={option}
                    key={index}
                    checked={
                      quizQuestion.userAnswer === quizQuestion.options[index]
                    }
                    onChange={handleUserRadioButtonClick}
                    disabled={isQuizSubmitted}
                  />
                  <label>{option}</label>
                </li>
              );
            })}
          </ul>
          {/* The quiz questions will have a message to indicate if the answer was correct or will display the right answer.  */}
          {/* Message section will remain hidden until the quizQuestion is marked isAnswered. */}
          <div hidden={!isQuizSubmitted}>
            {quizQuestion.userAnswer === quizQuestion.correctAnswer ? (
              <p className="text-green-400">Correct! {quizQuestion.correctAnswer}</p>
            ) : (
              <p className="text-red-300">
                Correct Answer: {quizQuestion.correctAnswer}
              </p>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col p-4 text-center h-full">
      <h2 className="flex-1 ">QuizSection</h2>
      <div className="flex-grow gap-4 w-full">
        {/* Show the stylized quiz qustion here*/}
        {renderQuizQuestion()}
      </div>
      {/* Disable the Prev or Next button if at the first or last question respectively */}
      <div className="flex flex-1 flex-row py-4 justify-between">
        <Button
          disabled={quizQuestionIndex === 0}
          onClick={handleQuizSectionNavigationButtonClick}
          navigation={SectionNavigationButtonTypes.PREV}
        >
          Prev
        </Button>
        {/* Quiz submission will invoke the parent sent submitQuit function and delegate further submission logic implementation to the parent. */}
        <Button onClick={submitQuiz}>Submit</Button>
        <Button
          disabled={quizQuestionIndex + 1 >= Object.keys(quizData).length}
          onClick={handleQuizSectionNavigationButtonClick}
          navigation={SectionNavigationButtonTypes.NEXT}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuizSection;
