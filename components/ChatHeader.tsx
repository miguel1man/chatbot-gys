import ThemeButton from "./ThemeButton";

const ChatHeader = () => {
  return (
    <header className="chatbot-header pb-2 md:pb-4">
      <section className="flex justify-between">
        <h1 className="chatbot-text-primary text-xl md:text-2xl font-medium">
          Chatbot G<span className="title-span text-[0.75em]">&</span>S
        </h1>
        <ThemeButton />
      </section>
    </header>
  );
};

export default ChatHeader;
