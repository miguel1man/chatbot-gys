import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionRow = ({ onPromptClick }) => {
  const prompts = [
    "¿Qué servicios ofrecen?",
    "¿Cuál es la visión de G&S?",
    "¿Cuál es la misión de G&S?",
    "¿Cuáles son los beneficios de AI?",
  ];

  return (
    <div className="flex flex-row flex-wrap justify-start items-center py-4 gap-2">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton
          key={`suggestion-${index}`}
          text={prompt}
          onClick={() => onPromptClick(prompt)}
        />
      ))}
    </div>
  );
};

export default PromptSuggestionRow;
