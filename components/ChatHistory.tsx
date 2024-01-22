import React from "react";
import Bubble from "./Bubble";
import { ChatHistoryProps } from "../types/ChatTypes";

const ChatHistory: React.FC<ChatHistoryProps> = ({
  messages,
  messagesEndRef,
}) => {
  return (
    <div className="flex-1 relative overflow-y-auto my-4 md:my-6">
      <div className="absolute w-full overflow-x-hidden">
        {messages.map((message, index) => (
          <Bubble
            ref={messagesEndRef}
            key={`message-${index}`}
            content={message}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
