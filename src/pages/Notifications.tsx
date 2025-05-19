
import React, { useState } from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Bell, MessageCircle, ThumbsUp, Users } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Notifications = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("all");
  
  return (
    <div className="min-h-screen bg-[#F3F2F0]">
      <Header />
      
      <div className="container mx-auto px-4 max-w-7xl py-6">
        <div className="flex gap-6">
          <LeftSidebar />
          
          <main className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h1 className="text-2xl font-bold">Notifications</h1>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <Button variant="ghost" size="sm">Mark all as read</Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                </Button>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full justify-start border-b rounded-none p-0 h-auto">
                    <TabsTrigger 
                      value="all" 
                      className="flex-1 rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger 
                      value="comments" 
                      className="flex-1 rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      Comments
                    </TabsTrigger>
                    <TabsTrigger 
                      value="mentions" 
                      className="flex-1 rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      Mentions
                    </TabsTrigger>
                    <TabsTrigger 
                      value="connections" 
                      className="flex-1 rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      Connections
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="p-0">
                    <NotificationsList />
                  </TabsContent>
                  <TabsContent value="comments" className="p-0">
                    <NotificationsList type="comment" />
                  </TabsContent>
                  <TabsContent value="mentions" className="p-0">
                    <NotificationsList type="mention" />
                  </TabsContent>
                  <TabsContent value="connections" className="p-0">
                    <NotificationsList type="connection" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </main>
          
          {!isMobile && (
            <div className="hidden lg:block min-w-[300px]">
              <NotificationsSettings />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface NotificationsListProps {
  type?: string;
}

const NotificationsList = ({ type }: NotificationsListProps) => {
  // In a real app, you would filter these based on the type
  const notifications = [
    {
      id: 1,
      type: "like",
      user: { name: "David Wilson", avatar: "DW" },
      content: "liked your post about \"New design trends for 2025\"",
      time: "Just now",
      unread: true
    },
    {
      id: 2,
      type: "comment",
      user: { name: "Sarah Johnson", avatar: "SJ" },
      content: "commented on your post: \"Great insights! I'd love to discuss this further.\"",
      time: "30 minutes ago",
      unread: true
    },
    {
      id: 3,
      type: "connection",
      user: { name: "Michael Chen", avatar: "MC" },
      content: "accepted your connection request",
      time: "2 hours ago",
      unread: false
    },
    {
      id: 4,
      type: "mention",
      user: { name: "Emily Parker", avatar: "EP" },
      content: "mentioned you in a comment: \"I think @John Doe would have some valuable input on this topic.\"",
      time: "Yesterday",
      unread: false
    },
    {
      id: 5,
      type: "connection",
      user: { name: "Lisa Rodriguez", avatar: "LR" },
      content: "wants to connect with you",
      time: "2 days ago",
      unread: false,
      actionable: true
    },
    {
      id: 6,
      type: "like",
      user: { name: "James Taylor", avatar: "JT" },
      content: "and 8 others liked your comment",
      time: "3 days ago",
      unread: false
    }
  ];
  
  const filteredNotifications = type 
    ? notifications.filter(n => n.type === type) 
    : notifications;
  
  if (filteredNotifications.length === 0) {
    return (
      <div className="py-8 text-center">
        <Bell className="mx-auto h-10 w-10 text-muted-foreground opacity-40" />
        <p className="mt-2 text-muted-foreground">No notifications to display</p>
      </div>
    );
  }
  
  return (
    <div className="divide-y">
      {filteredNotifications.map((notification) => (
        <div 
          key={notification.id} 
          className={`p-4 flex items-start hover:bg-muted/50 ${notification.unread ? 'bg-muted/30' : ''}`}
        >
          <div className="relative">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${notification.user.avatar}`} />
              <AvatarFallback>{notification.user.avatar}</AvatarFallback>
            </Avatar>
            {getNotificationIcon(notification.type)}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm">
              <span className="font-medium">{notification.user.name}</span>{' '}
              {notification.content}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
            
            {notification.actionable && (
              <div className="flex space-x-2 mt-2">
                <Button size="sm">Accept</Button>
                <Button size="sm" variant="outline">Ignore</Button>
              </div>
            )}
          </div>
          
          {notification.unread && (
            <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

const getNotificationIcon = (type: string) => {
  let icon = null;
  
  switch (type) {
    case 'like':
      icon = <ThumbsUp className="h-4 w-4 text-white" />;
      break;
    case 'comment':
      icon = <MessageCircle className="h-4 w-4 text-white" />;
      break;
    case 'connection':
      icon = <Users className="h-4 w-4 text-white" />;
      break;
    case 'mention':
      icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white lucide lucide-at-sign"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>;
      break;
    default:
      icon = <Bell className="h-4 w-4 text-white" />;
  }
  
  let bgColor;
  switch (type) {
    case 'like':
      bgColor = 'bg-blue-500';
      break;
    case 'comment':
      bgColor = 'bg-green-500';
      break;
    case 'connection':
      bgColor = 'bg-primary';
      break;
    case 'mention':
      bgColor = 'bg-purple-500';
      break;
    default:
      bgColor = 'bg-gray-500';
  }
  
  return (
    <div className={`absolute bottom-0 right-1 rounded-full ${bgColor} h-5 w-5 flex items-center justify-center`}>
      {icon}
    </div>
  );
};

const NotificationsSettings = () => {
  return (
    <Card className="animate-fade-in">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">Notification Preferences</h3>
        <p className="text-sm text-muted-foreground mb-4">Customize which notifications you receive and how you receive them.</p>
        
        <Button variant="outline" className="w-full">
          Manage Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default Notifications;
