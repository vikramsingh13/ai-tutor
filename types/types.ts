// types.ts contains all the types and enums used in the app

// Defines the enum types for the section navigation buttons.
// Values are -1 and 1 to represent the previous and next buttons.
// The enum values will be used to update the index directly.
export enum SectionNavigationButtonTypes {
  PREV = -1,
  NEXT = 1,
}

// Defines the enum types for the quiz questions.
export enum QuizQuestionTypes {
  MULTIPLE_CHOICE = "multipleChoice",
  TRUE_FALSE = "trueFalse",
  SHORT_ANSWER = "shortAnswer",
  ESSAY = "essay",
}

// Defines the AIChat props.
// The props require an object with numbers keys for order of chat messages.
// The values of the object is another object with attributes isUserMessage and message.
export type AIChatProps = {
  // chatData contains the conversation history as a JSON.
  chatData: {};
  // Function to handle user sending messages.
  handleSendMessage: () => void;
};
