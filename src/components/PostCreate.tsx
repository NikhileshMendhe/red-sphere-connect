
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Image, FileText, Calendar, Video } from 'lucide-react';

const PostCreate = () => {
  return (
    <Card className="mb-4 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <Button 
            variant="outline" 
            className="h-12 rounded-full bg-muted/50 border border-gray-300 flex-1 justify-start px-4 font-normal text-muted-foreground"
            onClick={() => alert('Post creation modal would open here')}
          >
            Start a post
          </Button>
        </div>
        
        <div className="flex justify-between mt-3 pt-1">
          <PostButton icon={<Image className="h-5 w-5 mr-2 text-blue-500" />} label="Photo" />
          <PostButton icon={<Video className="h-5 w-5 mr-2 text-green-500" />} label="Video" />
          <PostButton icon={<Calendar className="h-5 w-5 mr-2 text-amber-500" />} label="Event" />
          <PostButton icon={<FileText className="h-5 w-5 mr-2 text-orange-500" />} label="Article" />
        </div>
      </CardContent>
    </Card>
  );
};

type PostButtonProps = {
  icon: React.ReactNode;
  label: string;
};

const PostButton = ({ icon, label }: PostButtonProps) => (
  <Button variant="ghost" className="flex-1 h-9" size="sm">
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </Button>
);

export default PostCreate;
