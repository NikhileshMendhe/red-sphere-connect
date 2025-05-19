
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { toast } from 'sonner';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m NetSphere Assistant. How can I help you today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      handleBotResponse(userMessage.text);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleBotResponse = (userQuery: string) => {
    let botResponse = "I'm not sure how to help with that yet. I'm still learning!";
    
    // Simple response logic based on keywords
    const query = userQuery.toLowerCase();
    
    if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
      botResponse = "Hello! How can I assist you with NetSphere today?";
    } else if (query.includes('feature') || query.includes('what can you do')) {
      botResponse = "NetSphere offers many features including advanced networking, job search, messaging, and professional development tools. Check out our feature showcase above!";
    } else if (query.includes('connect') || query.includes('network')) {
      botResponse = "To connect with others, visit the Network tab where you can find and connect with professionals in your industry.";
    } else if (query.includes('job') || query.includes('work')) {
      botResponse = "You can find job opportunities in the Jobs tab. Filter by location, industry, and experience level to find the perfect match.";
    } else if (query.includes('message') || query.includes('chat')) {
      botResponse = "You can message your connections directly through the Messaging tab. It's a great way to maintain professional relationships.";
    } else if (query.includes('profile')) {
      botResponse = "Your profile showcases your professional experience, skills, and accomplishments. Keep it updated to make a strong impression!";
    } else if (query.includes('help') || query.includes('support')) {
      botResponse = "Need help? You can contact support at support@netsphere.com or check our FAQ section for common questions.";
    }
    
    const newBotMessage: Message = {
      id: Date.now().toString(),
      text: botResponse,
      sender: 'bot',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newBotMessage]);
    setIsLoading(false);
  };

  return (
    <div className="relative z-50">
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 md:w-96 shadow-lg animate-scale-in">
          <div className="flex items-center justify-between bg-primary text-white p-3 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">NetSphere Assistant</span>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary/90" onClick={toggleChat}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <ScrollArea className="h-96 p-3 bg-accent/30">
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-white rounded-tl-none'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <div className="flex items-center mb-1">
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarFallback className="bg-primary text-white text-xs">NS</AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium">NetSphere</span>
                      </div>
                    )}
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 block text-right mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-2 rounded-lg rounded-tl-none">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <div className="p-3 border-t flex">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 mr-2"
            />
            <Button onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
      
      <Button 
        onClick={toggleChat}
        className={`rounded-full h-14 w-14 shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'}`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default Chatbot;
