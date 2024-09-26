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
};


