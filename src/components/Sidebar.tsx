'use client';

import { Chat } from '@/lib/mock-data';

interface SidebarProps {
  chats: Chat[];
  selectedChatId: string | null;
  onSelectChat: (id: string) => void;
}

export function Sidebar({ chats, selectedChatId, onSelectChat }: SidebarProps) {
  return (
    <div className="w-[350px] bg-[#181818] border-r border-white/5 h-screen p-4">
      <h1 className="text-xl font-bold mb-4">Chats</h1>

      <div className="space-y-2">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-full p-3 rounded-xl text-left transition ${
              selectedChatId === chat.id
                ? 'bg-[#8774e1]'
                : 'bg-[#212121] hover:bg-[#2c2c2c]'
            }`}
          >
            <div className="font-medium">{chat.user.name}</div>
            <div className="text-sm text-gray-400">
              {chat.messages[0]?.content}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
