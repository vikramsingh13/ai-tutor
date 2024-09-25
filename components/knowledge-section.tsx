import { useState } from "react";

// import shadcn buttons to be used as prev, next, submit, quiz, etc.
import { Button } from "@/components/ui/button";

// Defines the props type for the KnowledgeSection component.
// The props will have knowledgeData and topic.
type KnowledgeSectionProps = {
  // key/value pair JSON.
  // keys are integer ids.
  // values will have another JSON with keys "title" and "content".
  knowledgeData: {};
  // Topic heading for the knowledge section.
  topic: string;
};

// Function to take knowledgeData and return the jsx for the knowledge section.
const renderKnowledgeData = (knowledgeData: {}) => {
  // Keeps track of the knowledge section index.
  const [knowledgeSectionIndex, setKnowledgeSectionIndex] = useState(0);

  // for each section in the knowledgeData, return the title and content.
  return Object.keys(knowledgeData).map((i) => (
    <div key={i}>
      {/* Topic section title */}
      <div>{knowledgeData[i].title}</div>
      {/* Topic section content */}
      <div>{knowledgeData[i].content}</div>
    </div>
  ));
};

const KnowledgeSection = ({ knowledgeData, topic }: KnowledgeSectionProps) => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Topic heading applies to all  */}
      <div className="p-8">{topic}</div>
      {/* Knowledge section. Can make this part scrollable later on. */}
      {/* flex-grow will make the div take up the remaining space and force the buttons to be at the bottom */}
      <div className="flex-grow">
        {
          // Render the knowledge data with the renderKnowledgeData function.
          // Customized styling for the divs will be added by the renderKnowledgeData function.
          renderKnowledgeData(knowledgeData)
        }
      </div>
      {/* Buttons for the knowledge section */}
      <div className="flex flex-row w-full pb-8 px-8 gap-4 justify-between">
        <Button className="">Prev</Button>
        <Button>Quiz</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default KnowledgeSection;
