'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ChatArea } from '@/components/ChatArea';
import { mockChats } from '@/lib/mock-data';

export default function MessagingApp() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>('1');

  const selectedChat =
    mockChats.find((chat) => chat.id === selectedChatId) || null;

  return (
    <main className="flex h-screen bg-[#0f0f0f] text-white">
      <Sidebar
        chats={mockChats}
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
      />

      <ChatArea chat={selectedChat} />
    </main>
  );
}
