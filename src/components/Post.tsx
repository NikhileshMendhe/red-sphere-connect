
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { ThumbsUp, MessageCircle, Share2, Send } from 'lucide-react';

interface PostProps {
  id: number;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
}

const Post = ({
  id,
  author,
  timeAgo,
  content,
  image,
  likes,
  comments,
  shares,
  isLiked = false,
}: PostProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  return (
    <Card className="mb-4 overflow-hidden animate-slide-in">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${author.avatar}`} />
            <AvatarFallback>{author.avatar.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-sm">{author.name}</h3>
                <p className="text-xs text-muted-foreground">{author.role}</p>
              </div>
              <span className="text-xs text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-sm whitespace-pre-wrap">{content}</p>
        </div>
        
        {image && (
          <div className="mt-3 rounded-md overflow-hidden">
            <img src={image} alt="Post attachment" className="w-full h-auto object-cover" />
          </div>
        )}
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-3 px-1">
          <div className="flex items-center">
            {likeCount > 0 && (
              <>
                <span className="inline-flex items-center">
                  <span className="flex items-center justify-center bg-primary text-white rounded-full h-4 w-4 text-[10px]">
                    👍
                  </span>
                  <span className="ml-1">{likeCount}</span>
                </span>
              </>
            )}
          </div>
          
          <div>
            {comments > 0 && <span className="mr-2">{comments} comments</span>}
            {shares > 0 && <span>{shares} shares</span>}
          </div>
        </div>
      </CardContent>
      
      <Separator />
      
      <CardFooter className="p-1">
        <div className="grid grid-cols-3 w-full">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center justify-center rounded-md ${liked ? 'text-primary' : ''}`}
            onClick={handleLike}
          >
            <ThumbsUp className={`h-5 w-5 mr-2 ${liked ? 'fill-primary text-primary' : ''}`} />
            <span className="text-sm">Like</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center justify-center rounded-md"
            onClick={toggleComments}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            <span className="text-sm">Comment</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center justify-center rounded-md"
          >
            <Share2 className="h-5 w-5 mr-2" />
            <span className="text-sm">Share</span>
          </Button>
        </div>
      </CardFooter>
      
      {showComments && (
        <div className="px-4 py-3 bg-accent/50">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            
            <div className="relative flex-1">
              <Input 
                placeholder="Add a comment..." 
                className="pr-10 bg-background rounded-full"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 absolute right-1 top-1/2 -translate-y-1/2"
              >
                <Send className="h-4 w-4 text-primary" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Post;
