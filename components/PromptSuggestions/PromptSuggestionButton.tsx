const PromptSuggestionButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="prompt-button text-sm py-2 px-4 rounded-lg overflow-hidden whitespace-normal text-left focus:outline-none focus:shadow-outline overflow-wrap: break-word;"
    >
      {text}
    </button>
  );
};

export default PromptSuggestionButton;
