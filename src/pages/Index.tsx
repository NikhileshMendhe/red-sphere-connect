
import React from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import PostCreate from '@/components/PostCreate';
import PostFeed from '@/components/PostFeed';
import FeatureShowcase from '@/components/FeatureShowcase';
import AppInfo from '@/components/AppInfo';
import Chatbot from '@/components/Chatbot';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-[#F3F2F0]">
      <Header />
      
      <div className="container mx-auto px-4 max-w-7xl py-6">
        <div className="flex gap-6">
          <LeftSidebar />
          
          <main className="flex-1 min-w-0 space-y-6">
            <FeatureShowcase />
            <PostCreate />
            <PostFeed />
            <AppInfo />
            <div className="fixed bottom-6 right-6 z-40">
              <Chatbot />
            </div>
          </main>
          
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
