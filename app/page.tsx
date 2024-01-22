"use client";
import { useEffect, useRef } from "react";
import { useChat, Message } from "ai/react";
import Footer from "../components/Footer";
import PromptSuggestionRow from "../components/PromptSuggestions/PromptSuggestionsRow";
import ChatHeader from "../components/ChatHeader";
import ChatForm from "../components/ChatForm";
import ChatHistory from "../components/ChatHistory";
import useConfiguration from "./hooks/useConfiguration";

export default function Home() {
  const { append, messages, input, handleInputChange, handleSubmit } =
    useChat();
  const { useRag, llm, similarityMetric } = useConfiguration();
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    handleSubmit(e, { options: { body: { useRag, llm, similarityMetric } } });
  };

  const handlePrompt = (promptText) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      content: promptText,
      role: "user",
    };
    append(msg, { options: { body: { useRag, llm, similarityMetric } } });
  };

  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center">
        <section className="chatbot-section flex flex-col origin:w-[800px] w-full origin:h-[735px] h-full rounded-md p-2 md:p-4">
          <ChatHeader />
          <ChatHistory messages={messages} messagesEndRef={messagesEndRef} />
          {!messages ||
            (messages.length === 0 && (
              <PromptSuggestionRow onPromptClick={handlePrompt} />
            ))}
          <ChatForm
            handleSend={handleSend}
            handleInputChange={handleInputChange}
            input={input}
          />
          <Footer />
        </section>
      </main>
    </>
  );
}
