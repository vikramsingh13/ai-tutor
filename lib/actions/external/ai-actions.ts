"use server";

// Get the API root address from the environment.
const API_ROOT =
  process.env.DEPLOYMENT_ENVIRONMENT === "production"
    ? process.env.NEXT_PUBLIC_AI_TUTOR_API_ADDRESS
    : "http://localhost:8000";

// Fetch AI generated course data with a user input.
// Takes a string param userInput and returns a JSON back.
export const getAIGeneratedCourseData = async (userInput: string) => {
  // API endpoint for getting course data from user input.
  const API_ENDPOINT = `${API_ROOT}/ai-operations/course-generation/${userInput}`;
  // JSON data to be returned.
  let result = {};
  // Use try/catch before attempting to make the HTTP request.
  try {
    const data = await fetch(`${API_ENDPOINT}`, {
      method: "GET",
    });
    result = await data.json();
    return result;
  } catch (e) {
    // TODO: handle server side error logging logic
    console.log((e as Error).message);
    return result;
  }
};

// Fetch AI Generated quiz data from module data.
// Takes a JSON param of module information and returns a JSON with quiz questions and answers.
export const getAIGeneratedQuizDataFromModule = async (moduleData: {}) => {
  // API endpoint for getting quiz data from module data.
  const API_ENDPOINT = `${API_ROOT}/ai-operations/quiz-generation`;
  // JSON data to be returned.
  let result = {};
  // Use try/catch before attempting to make the HTTP request.
  try {
    const data = await fetch(`${API_ENDPOINT}`, {
      method: "POST",
      body: JSON.stringify(moduleData),
    });
    result = await data.json();
    return result;
  } catch (e) {
    // TODO: handle server side error logging logic
    console.log((e as Error).message);
    return result;
  }
};
