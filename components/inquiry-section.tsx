import React from "react";

// Import the AIChat component to be used for user inquiries.
import AIChat from "@/components/ai-chat";

// Import the AIChat props type.
import { AIChatProps } from "@/types/types";

// Inquiry section props will extend the AIChatProps with a few other attributes on top of the chatData.
interface InquirySectionProps extends AIChatProps {}

const InquirySection = ({ chatData, handleSendMessage }: InquirySectionProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink">InquirySection</div>
      <div className="flex-grow">
        <AIChat chatData={chatData} handleSendMessage={handleSendMessage}/>
      </div>
    </div>
  );
};

export default InquirySection;
