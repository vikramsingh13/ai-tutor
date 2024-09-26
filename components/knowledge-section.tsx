import { useState } from "react";

// import shadcn buttons to be used as prev, next, submit, quiz, etc.
import { Button } from "@/components/ui/button";
// import the enum for the section navigation buttons.
import { SectionNavigationButtonTypes } from "@/types/types";

// Defines the props type for the KnowledgeSection component.
// The props will have knowledgeData and topic.
type KnowledgeSectionProps = {
  // key/value pair JSON.
  // keys are integer ids.
  // values will have another JSON with keys "title" and "content".
  knowledgeData: {};
  // Topic heading for the knowledge section.
  topic: string;
  // boolean to check if the knowledge section is quizable with a default value of false.
  quizable?: boolean;
  // Function to handle the quiz button click.
  handleQuizButtonClick?: () => void;
};

// Function to take knowledgeSectionIndex and knowledgeData, and returns the jsx for the knowledge section.
const renderKnowledgeSection = (
  knowledgeSectionIndex: number,
  knowledgeData: {}
) => {
  // return the stylized title and content.
  return (
    <article key={knowledgeSectionIndex}>
      {/* Topic section title */}
      <h3 className="py-4">{knowledgeData[knowledgeSectionIndex].title}</h3>
      {/* Topic section content */}
      <p className="whitespace-pre-line text-justify">
        {knowledgeData[knowledgeSectionIndex].content}
      </p>
    </article>
  );
};

const KnowledgeSection = ({ knowledgeData, topic }: KnowledgeSectionProps) => {
  /* Todo: refactor the index tracking logic to the parent. */
  // Keeps track of the knowledge section index.
  const [knowledgeSectionIndex, setKnowledgeSectionIndex] = useState(0);

  // Function to handle the knowledge section navigation button clicks.
  // Takes the mouse event as an argument.
  const handleKnowledgeSectionNavigationButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // Get the index change value from the button click event.
    // getAttribute returns a string, so we need to convert it to a number.
    let indexChangeValue = event.currentTarget.getAttribute("navigation");
    try {
      // Convert the indexChangeValue to a number.
      indexChangeValue = parseInt(indexChangeValue);
    } catch (e) {
      // error logging can be added here.
      return;
    }

    // Calculate the new knowledge section index.
    let newIndex = knowledgeSectionIndex + indexChangeValue;

    // If the new index is less than 0 or greater than the total knowledge sections, then set it to 0 or the last index, respectively.
    newIndex =
      newIndex < 0
        ? 0
        : newIndex >= Object.keys(knowledgeData).length
        ? Object.keys(knowledgeData).length - 1
        : newIndex;
    setKnowledgeSectionIndex(newIndex);
  };

  return (
    <div className="flex flex-col w-full h-full p-8">
      {/* Topic heading applies to all  */}
      <h2 className="py-4">{topic}</h2>
      {/* Knowledge section. Can make this part scrollable later on. */}
      {/* flex-grow will make the div take up the remaining space and force the buttons to be at the bottom */}
      <div className="flex-grow py-4">
        {
          // Render the knowledge data with the renderKnowledgeSection function.
          // Customized styling for the divs will be added by the renderKnowledgeSection function.
          renderKnowledgeSection(knowledgeSectionIndex, knowledgeData)
        }
      </div>
      {/* Buttons for the knowledge section */}
      <div className="flex flex-row w-full py-4 gap-4 justify-between">
        {/* The prev button will be disabled if at the first knowledge section index */}
        <Button
          disabled={knowledgeSectionIndex === 0}
          onClick={handleKnowledgeSectionNavigationButtonClick}
          navigation={SectionNavigationButtonTypes.PREV}
        >
          Prev
        </Button>
        {/* The quiz button will be disabled if the content is not quizable */}
        <Button disabled={!knowledgeData[knowledgeSectionIndex].isQuizable}>
          Quiz
        </Button>
        {/* The next button will be disabled if at the last knowledge section index */}
        <Button
          disabled={
            knowledgeSectionIndex + 1 >= Object.keys(knowledgeData).length
          }
          onClick={handleKnowledgeSectionNavigationButtonClick}
          navigation={SectionNavigationButtonTypes.NEXT}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default KnowledgeSection;
