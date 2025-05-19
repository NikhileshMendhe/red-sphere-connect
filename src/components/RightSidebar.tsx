
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Plus } from 'lucide-react';

const RightSidebar = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="hidden lg:block space-y-4 min-w-[300px]">
      <TrendingCard />
      <PeopleCard />
    </div>
  );
};

const TrendingCard = () => {
  const trendingTopics = [
    { id: 1, name: '#remotework', posts: 5432 },
    { id: 2, name: '#techindustry', posts: 3219 },
    { id: 3, name: '#productivity', posts: 2837 },
    { id: 4, name: '#artificialintelligence', posts: 1984 },
    { id: 5, name: '#careeradvice', posts: 1652 }
  ];
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Trending in your network</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-100">
          {trendingTopics.map((topic) => (
            <li key={topic.id} className="px-4 py-2 hover:bg-accent/50">
              <Button variant="link" className="p-0 h-auto text-left">
                <div className="flex flex-col items-start">
                  <span className="font-medium text-sm">{topic.name}</span>
                  <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                </div>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const PeopleCard = () => {
  const people = [
    { id: 1, name: 'Sarah Johnson', role: 'Product Manager at TechCorp', avatar: 'S' },
    { id: 2, name: 'Michael Chen', role: 'Software Engineer at DevInc', avatar: 'M' },
    { id: 3, name: 'Lisa Rodriguez', role: 'UX Designer at Creative Co', avatar: 'L' }
  ];
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">People you may know</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-100">
          {people.map((person) => (
            <li key={person.id} className="px-4 py-3">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${person.avatar}`} />
                  <AvatarFallback>{person.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{person.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{person.role}</p>
                  <Button size="sm" variant="ghost" className="mt-1 h-8 text-primary border border-primary hover:bg-primary/10">
                    <Plus className="h-4 w-4 mr-1" />
                    Connect
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <Button variant="ghost" className="w-full justify-center text-sm p-3 rounded-t-none">
          Show more
        </Button>
      </CardContent>
    </Card>
  );
};

export default RightSidebar;
