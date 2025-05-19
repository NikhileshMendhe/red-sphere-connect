
import React from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bookmark, Briefcase, MapPin, Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Jobs = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-[#F3F2F0]">
      <Header />
      
      <div className="container mx-auto px-4 max-w-7xl py-6">
        <div className="flex gap-6">
          <LeftSidebar />
          
          <main className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h1 className="text-2xl font-bold">Find your next opportunity</h1>
              <Button variant="outline" className="mt-2 md:mt-0">
                <Bookmark className="h-4 w-4 mr-2" />
                Saved Jobs
              </Button>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Job title or keyword" className="pl-10" />
                  </div>
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Location" className="pl-10" />
                  </div>
                  <Button>Search Jobs</Button>
                </div>
              </CardContent>
            </Card>
            
            <JobListingSection />
          </main>
          
          {!isMobile && (
            <div className="hidden lg:block min-w-[300px]">
              <RecentSearches />
              <JobAlerts />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const JobListingSection = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120K - $150K',
      posted: '2 days ago',
      logo: 'TC'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateApps',
      location: 'New York, NY (Remote)',
      type: 'Full-time',
      salary: '$110K - $140K',
      posted: '3 days ago',
      logo: 'IA'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'CreativeDesign Co.',
      location: 'Austin, TX (Hybrid)',
      type: 'Full-time',
      salary: '$90K - $120K',
      posted: '1 week ago',
      logo: 'CD'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'Remote',
      type: 'Contract',
      salary: '$60-$80/hour',
      posted: '5 days ago',
      logo: 'CT'
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'AnalyticsPro',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$130K - $160K',
      posted: 'Just now',
      logo: 'AP'
    }
  ];
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recommended for you</h2>
      
      {jobs.map((job) => (
        <Card key={job.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-md flex items-center justify-center font-bold text-lg mr-4">
                {job.logo}
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium text-lg">{job.title}</h3>
                <p className="text-muted-foreground">{job.company}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {job.location}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Briefcase className="h-3 w-3 mr-1" />
                    {job.type}
                  </span>
                  <span className="text-sm font-medium">{job.salary}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-muted-foreground">{job.posted}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      <div className="flex justify-center mt-4">
        <Button variant="outline">Show more jobs</Button>
      </div>
    </div>
  );
};

const RecentSearches = () => {
  const searches = [
    { id: 1, term: 'Frontend Developer' },
    { id: 2, term: 'UX Designer in San Francisco' },
    { id: 3, term: 'Remote Product Manager' }
  ];
  
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Recent Searches</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-100">
          {searches.map(search => (
            <li key={search.id} className="px-4 py-2 hover:bg-accent/50">
              <Button variant="link" className="p-0 h-auto text-left">
                <div className="flex items-center">
                  <Search className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{search.term}</span>
                </div>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const JobAlerts = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Job Alerts</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-3">
          Create job alerts to get notified when new jobs match your preferences
        </p>
        <Button className="w-full">Create Job Alert</Button>
      </CardContent>
    </Card>
  );
};

export default Jobs;
