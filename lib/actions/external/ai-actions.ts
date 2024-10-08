"use server";

// Fetch AI generated course data with a user input.
// Takes a string param userInput and returns a JSON back.
export const getAIGeneratedCourseData = async (userInput: string) => {
  // API endpoint for getting course data from user input.
  const API_ENDPOINT = `/ai-operations/course-generation/${userInput}`;
  // JSON data to be returned.
  let result = {};
  // Use try/catch before attempting to make the HTTP request.
  try {
    const data = await fetch(
      `http://localhost:8000${API_ENDPOINT}`, {
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
