import {
  forwardRef,
  JSXElementConstructor,
  RefObject,
  useState,
  useRef,
} from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import generateWav from "../scripts/generateWav";
import PauseIcon from "./assets/PauseIcon";
import PlayIcon from "./assets/PlayIcon";

const Bubble: JSXElementConstructor<any> = forwardRef(function Bubble(
  { content },
  ref
) {
  const { role } = content;
  const isUser = role === "user";
  const isAssistant = role === "assistant";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playbackStatus, setPlaybackStatus] = useState("idle");

  const handlePlayButtonClick = async (text) => {
    setIsLoading(true);

    try {
      const response = await generateWav({ id: content.id, text });
      console.log(response.message);

      const audioUrl = response.audio_url;
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setPlaybackStatus("playing");
          })
          .catch(() => {
            setIsPlaying(false);
            setPlaybackStatus("idle");
          });
      }
    } catch (error) {
      console.error("Error playing audio:", error);
    } finally {
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setPlaybackStatus("ended");
  };

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={`block mt-4 md:mt-6 pb-[7px] clear-both ${
        isUser ? "float-right" : "float-left"
      }`}
    >
      <div className={`flex justify-${isUser ? "end" : "start"}`}>
        <div className={`talk-bubble${isUser ? " user" : ""} p-2 md:p-4`}>
          <>
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, children, ...props }) {
                  return <code {...props}>{children}</code>;
                },
              }}
            >
              {content?.content}
            </Markdown>
            {isAssistant && (
              <button
                className="mt-2 p-3 bg-white color-black rounded-full flex items-center rounded"
                onClick={() => handlePlayButtonClick(content?.content)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <PlayIcon />
                ) : isPlaying ? (
                  playbackStatus === "ended" ? (
                    <PlayIcon />
                  ) : (
                    <PauseIcon />
                  )
                ) : (
                  <PlayIcon />
                )}
              </button>
            )}
            <audio ref={audioRef} onEnded={handleAudioEnded} />
          </>
        </div>
      </div>
    </div>
  );
});

export default Bubble;
