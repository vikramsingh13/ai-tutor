import React from "react";

// import the shadcn ui components.
import { Button } from "@/components/ui/button";
// Import the Cards related shadcn ui components.
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Import the KnowledgePropsType from types.
import { KnowledgePropsType } from "@/types/types";

// Component to display the knowledge cards in dashboard and possibly other places.
const KnowledgeCard = ({moduleIndex, title, description, cardMaxHeight, cardDescriptionMaxHeight, handleCardButtonClick, buttonText}: KnowledgeCardProps) => {
  // Defines the class names for the card component.
  const cardClasses = `p-4 max-h-[${cardMaxHeight ? cardMaxHeight : 400}px]`
  // Defines the class names for the Card description.
  const descriptionClasses = `max-h-[${cardDescriptionMaxHeight ? cardDescriptionMaxHeight : 200}px] text-clip overflow-hidden ...`
  return (
    <Card className={cardClasses} key={moduleIndex}>
      <CardHeader>
        <CardTitle>
          {moduleIndex}. {title}
        </CardTitle>
        <CardDescription className={descriptionClasses}>
            {/* Description is optional. Makes the card reusable for data with no description and just a title/heading. */}
            {description ? description : ""}
        </CardDescription>
      </CardHeader>
      <Button onClick={handleCardButtonClick} module={moduleIndex}>
        {buttonText ? buttonText : "Start"}
      </Button>
    </Card>
  );
};

export default KnowledgeCard;
