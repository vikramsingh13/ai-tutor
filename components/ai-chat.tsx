"use client";

// Import the Shadcn ui components.
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Import the props types.
import { AIChatProps } from "@/types/types";

// Function to render a chat bubble.
// Takes the chat message, index of the message, and a boolean isUserMessage as params.
// The boolean will decide the left/right alignment and color scheme of the bubble.
const renderChatBubble = (message, isUserMessage, index) => {
  if (isUserMessage) {
    return (
      <div className="flex flex-row text-justify p-2 justify-end" key={index}>
        <p className="flex p-4 bg-ai-chat-user-bubble rounded-lg">{message}</p>
      </div>
    );
  }
  return (
    <div className="flex w-full text-justify p-2 justify-start" key={index}>
      <p className="">{message}</p>
    </div>
  );
};

const AIChat = ({ chatData, handleSendMessage }: AIChatProps) => {
  return (
    <div className="flex flex-col h-full bg-ai-chat-background text-white">
      <div className="flex-grow p-2">
        {/* Iterate through the chatData JSON and render the chat bubbles. */}
        {Object.keys(chatData).map((chatMessageIndex) => {
          return renderChatBubble(chatData[chatMessageIndex].message, chatData[chatMessageIndex].isUserMessage, chatMessageIndex)
        })}
      </div>
      <div className="flex flex-row items-center justify-center p-4 gap-2">
        {/* Textarea is for user to send chat messages. */}
        <Textarea placeholder="Type your message here." className="" />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default AIChat;
