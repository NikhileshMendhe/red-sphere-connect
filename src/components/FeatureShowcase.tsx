
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Book, Building, Newspaper, Briefcase, Mic, 
  Pen, Mail, Badge, Award, TrendingUp, Globe,
  Calendar, Users, Search
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
}

const FeatureShowcase = () => {
  const features: Feature[] = [
    {
      icon: <Search className="h-5 w-5 text-red-500" />,
      emoji: '🔍',
      title: 'Advanced Search Filters',
      description: 'Find people, jobs, posts, and more with pinpoint accuracy.'
    },
    {
      icon: <Book className="h-5 w-5 text-red-500" />,
      emoji: '🎓',
      title: 'NetSphere Learning',
      description: 'Courses with certifications integrated into your profile.'
    },
    {
      icon: <Building className="h-5 w-5 text-red-500" />,
      emoji: '🏢',
      title: 'Company & Showcase Pages',
      description: 'Highlight businesses and specific products/services.'
    },
    {
      icon: <Newspaper className="h-5 w-5 text-red-500" />,
      emoji: '📣',
      title: 'Editorial & Trending News',
      description: 'Curated updates by our in-house team.'
    },
    {
      icon: <Briefcase className="h-5 w-5 text-red-500" />,
      emoji: '💼',
      title: 'Services Marketplace',
      description: 'Freelancers offer and promote their services directly.'
    },
    {
      icon: <Mic className="h-5 w-5 text-red-500" />,
      emoji: '🎙',
      title: 'Live & Audio Events',
      description: 'Host live sessions or join professional audio chats.'
    },
    {
      icon: <Pen className="h-5 w-5 text-red-500" />,
      emoji: '🧠',
      title: 'Creator Mode',
      description: 'Boosts visibility, enables newsletters, live, and topic highlights.'
    },
    {
      icon: <Mail className="h-5 w-5 text-red-500" />,
      emoji: '📰',
      title: 'Newsletters',
      description: 'Publish long-form content with email alerts to followers.'
    },
    {
      icon: <Badge className="h-5 w-5 text-red-500" />,
      emoji: '✨',
      title: 'Professional Badges',
      description: 'Visually show availability or hiring needs.'
    },
    {
      icon: <Award className="h-5 w-5 text-red-500" />,
      emoji: '🧪',
      title: 'Skill Assessments',
      description: 'Prove your skills with badges for tools and tech.'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-red-500" />,
      emoji: '📈',
      title: 'Analytics & Private Mode',
      description: 'See who viewed your profile and rank insights.'
    },
    {
      icon: <Globe className="h-5 w-5 text-red-500" />,
      emoji: '🌐',
      title: 'Multilingual Profiles',
      description: 'Create versions of your profile in different languages.'
    },
    {
      icon: <Briefcase className="h-5 w-5 text-red-500" />,
      emoji: '📢',
      title: 'NetSphere Ads',
      description: 'Promote content or job openings with advanced targeting.'
    },
    {
      icon: <Calendar className="h-5 w-5 text-red-500" />,
      emoji: '📅',
      title: 'Events & RSVPs',
      description: 'Host, promote, and manage online or offline events.'
    },
    {
      icon: <Users className="h-5 w-5 text-red-500" />,
      emoji: '👥',
      title: 'Groups',
      description: 'Join niche communities for discussions and networking.'
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md mb-4">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Explore NetSphere Pro Features</h2>
        <p className="text-muted-foreground">Discover tools to enhance your professional journey</p>
      </div>

      <ScrollArea className="h-[350px] md:h-[400px] px-4 py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-2">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col p-4 border rounded-lg hover:border-red-400 hover:shadow-md transition-all cursor-pointer bg-white"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">{feature.emoji}</span>
                <div className="bg-red-100 p-2 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FeatureShowcase;
