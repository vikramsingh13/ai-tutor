// types.ts contains all the types and enums used in the app

// Defines the user page props type.
// It takes the userId.
export type UserPageProps = {
  // userId will be used by various pages to render user specific content.
  userId: string;
};

// Defines the enum types for login: SIGN_IN, SIGN_UP.
export enum UserLoginType {
  SIGN_IN = "sign-in",
  SIGN_UP = "sign-up"
}

// Defines the enum types for OAuth vendors.
export enum OAuthVendorType {
  GOOGLE = "google",
  GITHUB = "github"
}

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
