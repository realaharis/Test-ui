'use client';

import { Chat } from '@/lib/mock-data';

interface ChatAreaProps {
  chat: Chat | null;
}

export function ChatArea({ chat }: ChatAreaProps) {
  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center">
        Select a chat
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-screen bg-[#0f0f0f]">
      <div className="p-4 border-b border-white/5">
        <h2 className="font-semibold">{chat.user.name}</h2>
      </div>

      <div className="flex-1 p-4">
        {chat.messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-[#8774e1] text-white px-4 py-2 rounded-2xl w-fit ml-auto"
          >
            {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
}
