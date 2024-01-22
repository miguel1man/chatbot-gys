export interface ChatFormProps {
  handleSend: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
}

interface Message {
  id: string;
  content: string;
  role: "function" | "user" | "system" | "assistant";
}

export interface ChatHistoryProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}
