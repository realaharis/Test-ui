export interface User {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  seen: boolean;
  type: 'text' | 'voice';
}

export interface Chat {
  id: string;
  user: User;
  messages: Message[];
  unreadCount: number;
}

export const currentUser: User = {
  id: 'me',
  name: 'Alex Developer',
  avatar: 'https://i.pravatar.cc/150?u=me',
  online: true,
};

export const mockChats: Chat[] = [
  {
    id: '1',
    unreadCount: 2,
    user: {
      id: 'u1',
      name: 'Sarah Jenkins',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      online: true,
    },
    messages: [
      {
        id: 'm1',
        senderId: 'me',
        content: 'Hey Sarah!',
        timestamp: '10:42 AM',
        seen: true,
        type: 'text'
      }
    ]
  }
]
