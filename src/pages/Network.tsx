
import React from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserPlus, Users } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Network = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-[#F3F2F0]">
      <Header />
      
      <div className="container mx-auto px-4 max-w-7xl py-6">
        <div className="flex gap-6">
          <LeftSidebar />
          
          <main className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold mb-4">My Network</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ConnectionsCard />
              <PendingInvitationsCard />
              <GroupsCard />
            </div>
            
            <PeopleYouMayKnowSection />
          </main>
          
          {!isMobile && (
            <div className="hidden lg:block min-w-[300px]">
              <NetworkStats />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ConnectionsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold flex items-center">
          <Users className="h-5 w-5 mr-2 text-primary" />
          Connections
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">You have 183 connections</p>
        <Button variant="outline" className="w-full mt-3">
          Manage connections
        </Button>
      </CardContent>
    </Card>
  );
};

const PendingInvitationsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold flex items-center">
          <UserPlus className="h-5 w-5 mr-2 text-primary" />
          Invitations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">You have 5 pending invitations</p>
        <Button variant="outline" className="w-full mt-3">
          Manage invitations
        </Button>
      </CardContent>
    </Card>
  );
};

const GroupsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold flex items-center">
          <Users className="h-5 w-5 mr-2 text-primary" />
          Groups
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">You're a member of 7 groups</p>
        <Button variant="outline" className="w-full mt-3">
          Manage groups
        </Button>
      </CardContent>
    </Card>
  );
};

const PeopleYouMayKnowSection = () => {
  const people = [
    { id: 1, name: 'Sarah Johnson', role: 'Product Manager at TechCorp', avatar: 'SJ' },
    { id: 2, name: 'Michael Chen', role: 'Software Engineer at DevInc', avatar: 'MC' },
    { id: 3, name: 'Lisa Rodriguez', role: 'UX Designer at Creative Co', avatar: 'LR' },
    { id: 4, name: 'David Wilson', role: 'Marketing Director at GrowthHub', avatar: 'DW' },
    { id: 5, name: 'Emily Parker', role: 'Data Scientist at AnalyticsPro', avatar: 'EP' },
    { id: 6, name: 'James Taylor', role: 'Project Manager at BuildTech', avatar: 'JT' },
  ];
  
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>People you may know</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {people.map((person) => (
            <div key={person.id} className="border rounded-md p-4">
              <div className="flex items-start">
                <Avatar className="h-12 w-12 mr-3">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${person.avatar}`} />
                  <AvatarFallback>{person.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{person.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{person.role}</p>
                  <Button size="sm" variant="ghost" className="mt-2 h-8 text-primary border border-primary hover:bg-primary/10">
                    <UserPlus className="h-4 w-4 mr-1" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const NetworkStats = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Network Statistics</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Profile views</span>
            <span className="font-medium">247</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Post impressions</span>
            <span className="font-medium">2,584</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Search appearances</span>
            <span className="font-medium">142</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Connection growth</span>
            <span className="text-primary font-medium">+12% ↑</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Network;
