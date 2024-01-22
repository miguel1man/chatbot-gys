import React from "react";
import SendIcon from "./assets/SendIcon";
import { ChatFormProps } from "../types/ChatTypes";

const ChatForm: React.FC<ChatFormProps> = ({
  handleSend,
  handleInputChange,
  input,
}) => {
  return (
    <form className="flex h-[40px] gap-2" onSubmit={handleSend}>
      <input
        onChange={handleInputChange}
        value={input}
        className="chatbot-input flex-1 text-sm md:text-base outline-none bg-transparent rounded-md p-2"
        placeholder="Envía un mensaje..."
      />
      <button
        type="submit"
        className="chatbot-send-button flex rounded-md items-center justify-center px-2.5 origin:px-3"
      >
        <SendIcon />
        <span className="hidden origin:block font-semibold text-sm ml-2">
          Enviar
        </span>
      </button>
    </form>
  );
};

export default ChatForm;
