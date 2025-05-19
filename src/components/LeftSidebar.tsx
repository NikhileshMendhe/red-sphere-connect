
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bookmark, Calendar } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const LeftSidebar = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="hidden md:block space-y-4 min-w-[240px]">
      <ProfileCard />
      <ShortcutsCard />
    </div>
  );
};

const ProfileCard = () => {
  return (
    <Card className="overflow-hidden animate-fade-in">
      <div className="h-16 bg-gradient-to-r from-primary/80 to-primary"></div>
      <CardContent className="p-0">
        <div className="p-4 text-center relative">
          <Avatar className="h-16 w-16 border-4 border-white absolute -top-8 left-1/2 transform -translate-x-1/2 card-shadow">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          
          <div className="mt-8 mb-1">
            <Link to="/profile" className="font-semibold text-lg hover:underline">
              John Doe
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Senior Developer at TechCorp
          </p>
        </div>
        
        <Separator />
        
        <div className="p-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Profile views</span>
            <span className="font-medium">247</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-muted-foreground">Post impressions</span>
            <span className="font-medium">2,584</span>
          </div>
        </div>
        
        <Separator />
        
        <Link to="/premium" className="flex items-center p-4 text-sm hover:bg-accent">
          <span className="text-muted-foreground">Access exclusive tools & insights</span>
          <span className="ml-1 text-primary font-medium">Try Premium</span>
        </Link>
        
        <Separator />
        
        <Link to="/bookmarks" className="flex items-center p-4 text-sm hover:bg-accent">
          <Bookmark className="h-4 w-4 mr-2" />
          <span>My bookmarks</span>
        </Link>
      </CardContent>
    </Card>
  );
};

const ShortcutsCard = () => {
  return (
    <Card className="animate-fade-in">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">Groups & Events</h3>
        
        <div className="space-y-3 mt-3">
          <Button variant="ghost" className="w-full justify-start text-sm font-normal">
            <Users className="h-4 w-4 mr-2" />
            My Groups
          </Button>
          
          <Button variant="ghost" className="w-full justify-start text-sm font-normal">
            <Calendar className="h-4 w-4 mr-2" />
            Events
          </Button>
          
          <Button variant="ghost" className="w-full justify-start text-sm font-normal">
            <Users className="h-4 w-4 mr-2" />
            Followed Hashtags
          </Button>
        </div>
        
        <Separator className="my-3" />
        
        <Button variant="ghost" className="w-full justify-center text-sm" size="sm">
          Discover more
        </Button>
      </CardContent>
    </Card>
  );
};

export default LeftSidebar;
