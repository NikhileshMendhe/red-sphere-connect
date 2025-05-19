
import React from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import PostCreate from '@/components/PostCreate';
import PostFeed from '@/components/PostFeed';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-[#F3F2F0]">
      <Header />
      
      <div className="container mx-auto px-4 max-w-7xl py-6">
        <div className="flex gap-6">
          <LeftSidebar />
          
          <main className="flex-1 min-w-0">
            <PostCreate />
            <PostFeed />
          </main>
          
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
