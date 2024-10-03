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
  // Currently displayed module's index.
  moduleIndex?: number;
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
      {/* submodule heading */}
      <h3 className="py-4">{knowledgeData[knowledgeSectionIndex].heading}</h3>
      {/* submodule content */}
      <p className="whitespace-pre-line text-justify">
        {knowledgeData[knowledgeSectionIndex].content}
      </p>
    </article>
  );
};

const KnowledgeSection = ({
  knowledgeData,
  topic,
  moduleIndex,
  handleQuizButtonClick,
}: KnowledgeSectionProps) => {
  /* Todo: refactor the index tracking logic to the parent. */
  // Keeps track of the knowledge section index.
  const [knowledgeSectionIndex, setKnowledgeSectionIndex] = useState(1);

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
      newIndex < 1
        ? 1
        : newIndex > Object.keys(knowledgeData["subModules"]).length
        ? Object.keys(knowledgeData["subModules"]).length
        : newIndex;
    setKnowledgeSectionIndex(newIndex);
  };

  return (
    <div className="flex flex-col w-full h-full p-8">
      {/* Topic heading applies to all  */}
      <h2 className="py-4">{knowledgeData["title"]}</h2>
      {/* Knowledge section. Can make this part scrollable later on. */}
      {/* flex-grow will make the div take up the remaining space and force the buttons to be at the bottom */}
      <div className="flex-grow py-4">
        {
          // Render the knowledge data with the renderKnowledgeSection function.
          // Customized styling for the divs will be added by the renderKnowledgeSection function.
          renderKnowledgeSection(
            knowledgeSectionIndex,
            knowledgeData["subModules"]
          )
        }
      </div>
      {/* Buttons for the knowledge section */}
      <div className="flex flex-row w-full py-4 gap-4 justify-between">
        {/* The prev button will be disabled if at the first knowledge section index */}
        <Button
          disabled={knowledgeSectionIndex === 1}
          onClick={handleKnowledgeSectionNavigationButtonClick}
          navigation={SectionNavigationButtonTypes.PREV}
        >
          Prev
        </Button>
        {/* The quiz button will be disabled if the content is not quizable */}
        <Button
          disabled={
            !(
              knowledgeData["subModules"][knowledgeSectionIndex].hasOwnProperty(
                "isQuizable"
              ) &&
              knowledgeData["subModules"][knowledgeSectionIndex]["isQuizable"]
            )
          }
          onClick={handleQuizButtonClick}
        >
          Quiz
        </Button>
        {/* The next button will be disabled if at the last knowledge section index */}
        <Button
          disabled={
            knowledgeSectionIndex >=
            Object.keys(knowledgeData["subModules"]).length
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
