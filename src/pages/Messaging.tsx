
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Phone, Video, MoreHorizontal, Send, Image, Paperclip, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Messaging = () => {
  const isMobile = useIsMobile();
  const [activeChat, setActiveChat] = useState<string | null>("1");
  
  return (
    <div className="min-h-screen bg-[#F3F2F0]">
      <Header />
      
      <div className="container mx-auto px-4 max-w-7xl py-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex h-[calc(100vh-12rem)]">
            {/* Chat list */}
            {(!isMobile || !activeChat) && (
              <div className={cn(
                "border-r flex flex-col", 
                isMobile && activeChat ? "hidden" : "w-full md:w-1/3 lg:w-1/4"
              )}>
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Messaging</h2>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search messages" className="pl-10" />
                  </div>
                </div>
                
                <div className="overflow-y-auto flex-1">
                  <ChatList setActiveChat={setActiveChat} activeChat={activeChat} />
                </div>
              </div>
            )}
            
            {/* Chat window */}
            {(!isMobile || activeChat) && (
              <div className={cn(
                "flex flex-col", 
                isMobile && activeChat ? "w-full" : "hidden md:flex md:w-2/3 lg:w-3/4"
              )}>
                <ChatHeader activeChat={activeChat} setActiveChat={setActiveChat} />
                <ChatMessages activeChat={activeChat} />
                <ChatInput />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ChatListProps {
  setActiveChat: (id: string) => void;
  activeChat: string | null;
}

const ChatList = ({ setActiveChat, activeChat }: ChatListProps) => {
  const chats = [
    {
      id: "1",
      name: "Sarah Johnson",
      avatar: "SJ",
      lastMessage: "Let's schedule a meeting to discuss the proposal",
      time: "10:30 AM",
      unread: true
    },
    {
      id: "2",
      name: "Michael Chen",
      avatar: "MC",
      lastMessage: "Thanks for sharing that article!",
      time: "Yesterday",
      unread: false
    },
    {
      id: "3",
      name: "Lisa Rodriguez",
      avatar: "LR",
      lastMessage: "I just sent you the updated design files",
      time: "Yesterday",
      unread: false
    },
    {
      id: "4",
      name: "David Wilson",
      avatar: "DW",
      lastMessage: "Looking forward to the conference next week",
      time: "Mon",
      unread: false
    },
    {
      id: "5",
      name: "Emily Parker",
      avatar: "EP",
      lastMessage: "Let me know if you have any questions about the report",
      time: "Sun",
      unread: false
    }
  ];
  
  return (
    <div>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={cn(
            "flex items-start p-4 hover:bg-muted/50 cursor-pointer",
            chat.id === activeChat && "bg-muted"
          )}
          onClick={() => setActiveChat(chat.id)}
        >
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${chat.avatar}`} />
            <AvatarFallback>{chat.avatar}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <p className={cn("font-medium truncate", chat.unread && "font-semibold")}>
                {chat.name}
              </p>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                {chat.time}
              </span>
            </div>
            <p className={cn(
              "text-sm truncate text-muted-foreground",
              chat.unread && "text-foreground font-medium"
            )}>
              {chat.lastMessage}
            </p>
            {chat.unread && (
              <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

interface ChatHeaderProps {
  activeChat: string | null;
  setActiveChat: (id: string | null) => void;
}

const ChatHeader = ({ activeChat, setActiveChat }: ChatHeaderProps) => {
  const isMobile = useIsMobile();
  
  // In a real app, you would fetch the actual chat details
  const activePerson = {
    name: "Sarah Johnson",
    status: "Online",
    avatar: "SJ"
  };
  
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <div className="flex items-center">
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2" 
            onClick={() => setActiveChat(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </Button>
        )}
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${activePerson.avatar}`} />
          <AvatarFallback>{activePerson.avatar}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{activePerson.name}</h3>
          <p className="text-xs text-muted-foreground">{activePerson.status}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Video className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

interface ChatMessagesProps {
  activeChat: string | null;
}

const ChatMessages = ({ activeChat }: ChatMessagesProps) => {
  // In a real app, you would fetch these messages from a database
  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Hey there! How's the project coming along?",
      time: "10:00 AM"
    },
    {
      id: 2,
      sender: "me",
      text: "Hi Sarah! It's going well. I'm just finalizing the presentation for tomorrow's meeting.",
      time: "10:05 AM"
    },
    {
      id: 3,
      sender: "them",
      text: "That sounds great! Do you think we'll be able to include the latest research findings?",
      time: "10:10 AM"
    },
    {
      id: 4,
      sender: "me",
      text: "Yes, I've already incorporated the data from last week's user testing. The results are quite promising!",
      time: "10:15 AM"
    },
    {
      id: 5,
      sender: "them",
      text: "Perfect! Let's schedule a quick call to go through the main points before presenting to the client.",
      time: "10:20 AM"
    },
    {
      id: 6,
      sender: "them",
      text: "Would 3 PM work for you today?",
      time: "10:21 AM"
    },
    {
      id: 7,
      sender: "me",
      text: "3 PM works for me. I'll send a calendar invite shortly.",
      time: "10:25 AM"
    },
    {
      id: 8,
      sender: "them",
      text: "Let's schedule a meeting to discuss the proposal in more detail. I think there are a few points we should clarify before the final submission.",
      time: "10:30 AM"
    }
  ];
  
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((message) => (
        <div 
          key={message.id}
          className={cn(
            "flex",
            message.sender === "me" ? "justify-end" : "justify-start"
          )}
        >
          <div 
            className={cn(
              "max-w-[70%] rounded-lg p-3",
              message.sender === "me" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted"
            )}
          >
            <p>{message.text}</p>
            <p className={cn(
              "text-xs mt-1 text-right",
              message.sender === "me" 
                ? "text-primary-foreground/80" 
                : "text-muted-foreground"
            )}>
              {message.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ChatInput = () => {
  return (
    <div className="p-4 border-t">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Smile className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Paperclip className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Image className="h-5 w-5" />
        </Button>
        
        <div className="relative flex-1">
          <Input 
            placeholder="Type a message..." 
            className="pr-10"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0 h-full"
          >
            <Send className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
