"use client";
// Imports to handle the user input and state management.
import { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
// Import the shadcn ui components.
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Import the login type enums.
import { UserLoginType } from "@/types/types";

export default function Home() {
  // Track user search/generate course input.
  const [courseInput, setCourseInput] = useState("");

  // Handles the generate course button click.
  const handleGenerateCourseButtonClick = () => {
    // Delegates the generate course logic as courses can be generated with the topic buttons as well without the need to press the generate course button.
    generateCourseWithTopic(courseInput);
  };

  // Handles the predefined course button click.
  const handlePredefinedCourseButtonClick = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    // Get the predefined course topic from the button attribute "course"
    let course = event.currentTarget.getAttribute("course");
    // Delegates the generate course logic with the button "course" value.
    generateCourseWithTopic(course);
  };

  // Defines the logic to handle course generation.
  // Takes a courseTopic string as a param.
  const generateCourseWithTopic = (courseTopic: string) => {
    /* Todo: implement the course generation logic. */
    console.log("app/page: generating course for ", courseTopic);
  };

  // Handles on the user course input value change.
  // Will be used to add a debounce as the input element will act as a search bar displaying auto complete or similar results in a dropdown.
  const handleCourseInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Update the courseInput value.
    setCourseInput(event.target.value);
  };
  return (
    <div className="flex flex-col p-2 justify-start items-center text-center min-h-[900px] w-full">
      <header className="flex flex-col mt-[4rem] mb-[3rem] max-w-[800px] ">
        <h1 className="p-4 font-bold text-[4rem] max-md:text-[3rem] max-sm:text-[2rem]">
          Enhanced Tutoring for Life-long Learners
        </h1>
        <p className="p-2 max-md:text-[1.5rem] max-sm:text-[1rem] text-[1.5rem]">
          Personalize a learning pathway to amplify your learning, improve
          knowledge retention, and achieve success.
        </p>
      </header>

      {/* Users will use this input to start generating a course. */}
      <div className="flex flex-col gap-4 justify-center items-center text-center md:min-w-[600px] md:max-w-[800px]">
        <div className="flex gap-4 justify-center items-center text-center w-full py-4 max-sm:flex-col">
          {/* This input updates the courseInput value for now. Eventually, it will also have a dropdown displaying auto completed results or similar results. */}
          <Input
            type="text"
            placeholder="Choose any topic..."
            className="flex-grow h-16 text-lg"
            value={courseInput}
            onChange={handleCourseInputOnChange}
          />
          {/* Clicking generate course button will trigger the course generation logic flow with the courseInput value set with the above Input tag. */}
          <Button type="submit" onClick={handleGenerateCourseButtonClick}>
            Generate Course
          </Button>
        </div>
        <div className="flex flex-row justify-center items-center text-center gap-2 flex-wrap">
          <p>Popular topics:</p>
          {/* Each of these buttons will will trigger the course generation logic flow with with predefined values. */}
          <Button onClick={handlePredefinedCourseButtonClick} course="Python">
            Python
          </Button>
          <Button
            onClick={handlePredefinedCourseButtonClick}
            course="Public Speaking"
          >
            Public Speaking
          </Button>
          <Button
            onClick={handlePredefinedCourseButtonClick}
            course="How to be happy"
          >
            How to be happy
          </Button>
        </div>
      </div>
    </div>
  );
}
