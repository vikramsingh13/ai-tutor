"use server";

// Fetch AI generated course data with a user input.
// Takes a string param userInput and returns a JSON back.
export const getAIGeneratedCourseData = async (userInput: string) => {
  // Get the API root address from the environment.
  const API_ROOT = process.env.NEXT_PUBLIC_AI_TUTOR_API_ADDRESS ? process.env.NEXT_PUBLIC_AI_TUTOR_API_ADDRESS : "http://localhost:8000";
  // API endpoint for getting course data from user input.
  const API_ENDPOINT = `${API_ROOT}/ai-operations/course-generation/${userInput}`;
  // JSON data to be returned.
  let result = {};
  // Use try/catch before attempting to make the HTTP request.
  try {
    const data = await fetch(
      `${API_ENDPOINT}`, {
        method: "GET",
      }
    );
    result = await data.json();
    return result;
  } catch (e) {
    // TODO: handle server side error logging logic
    console.log((e as Error).message);
    return result;
  }
};
