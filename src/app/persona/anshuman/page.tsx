"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ✅ Type for chat messages
interface ChatMessage {
  sender: "user" | "anshuman";
  text: string;
  time?: string;
}

// ✅ Type for API response
interface ApiResponse {
  reply: string;
}

export default function Anshuman() {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const anshumanImg =
    "https://res.cloudinary.com/dvjuuotdg/image/upload/v1760241512/anshuman-mishra_puk0as.jpg";

  // ✅ Default message from anshuman
  useEffect(() => {
    setChat([
      {
        sender: "anshuman",
        text: "Kaise hai aap, sir?",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }, []);

  // ✅ Auto-scroll to bottom on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat, isTyping]);

  // ✅ Send message
  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    setChat((prev) => [...prev, { sender: "user", text: message }]);

    const currentMessage = message;
    setMessage("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/anshuman", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentMessage }),
      });

      const data: ApiResponse = await res.json();

      setIsTyping(false);
      setChat((prev) => [
        ...prev,
        {
          sender: "anshuman",
          text: data.reply,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch (error) {
      console.error("❌ Error fetching AI response:", error);
      setIsTyping(false);
    }
  };

  return (
    <div className="font-sans min-h-screen text-white relative isolation-isolate overflow-hidden">
      <main className="pt-16 px-4 max-w-3xl mx-auto flex flex-col h-[calc(100vh-4rem)]">
        {/* Chat container */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto space-y-6 p-4 rounded-2xl mb-3"
        >
          {chat.map((c, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                c.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div className="flex items-start gap-3">
                {c.sender === "anshuman" && (
                  <Image
                    src={anshumanImg}
                    alt="Anshuman Mishra"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                )}
                <div
                  className={`px-4 py-2 rounded-lg ${
                    c.sender === "user"
                      ? "bg-orange-500 text-white"
                      : "bg-[#2b2b2b] text-white"
                  }`}
                >
                  {c.text}
                </div>
              </div>
              {c.sender === "anshuman" && (
                <span className="text-xs text-gray-400 ml-11 mt-1">
                  Anshuman Mishra • {c.time}
                </span>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start gap-3">
              <Image
                src={anshumanImg}
                alt="Anshuman Mishra"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <div className="px-4 py-2 rounded-lg bg-[#2b2b2b] text-white flex items-center gap-1">
                <span className="typing-dot animate-bounce delay-[0ms]">•</span>
                <span className="typing-dot animate-bounce delay-[150ms]">•</span>
                <span className="typing-dot animate-bounce delay-[300ms]">•</span>
              </div>
            </div>
          )}
        </div>

        {/* Input box */}
        <div className="flex items-center gap-2 p-2 border-t border-gray-700 bg-[#1a1a1a]">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg bg-[#2b2b2b] text-white focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10l9-6 9 6-9 6-9-6z"
              />
            </svg>
          </button>
        </div>
      </main>

      <style jsx>{`
        .typing-dot {
          font-size: 1.5rem;
          line-height: 1;
        }
        .animate-bounce {
          animation: bounce 0.6s infinite;
        }
        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
        .delay-[0ms] {
          animation-delay: 0ms;
        }
        .delay-[150ms] {
          animation-delay: 150ms;
        }
        .delay-[300ms] {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
}
