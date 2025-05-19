
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Pencil, Plus, MapPin, Briefcase, Mail, Calendar, FileText, Link2 } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F3F2F0]">
      <Header />
      
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Profile Header */}
        <Card className="mt-6 overflow-hidden">
          {/* Cover Photo */}
          <div className="h-40 md:h-60 bg-gradient-to-r from-primary/40 to-primary/80 relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-foreground"
            >
              <Pencil className="h-4 w-4 mr-2" />
              Edit Cover
            </Button>
          </div>
          
          <CardContent className="relative px-6 pb-6">
            {/* Profile Picture */}
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white absolute -top-12 md:-top-16 left-6 card-shadow">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            
            <div className="pt-16 md:pt-20 flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
                <p className="text-lg text-muted-foreground">Senior Developer at TechCorp</p>
                <div className="flex items-center flex-wrap gap-y-2 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center mr-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1 lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                    netsphere-pro.com/johndoe
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    247 connections
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button size="sm" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Profile Tabs */}
        <Tabs defaultValue="about" className="mt-6">
          <TabsList className="bg-card border">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  About
                  <Button variant="ghost" size="sm">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full-stack developer with 8+ years of experience building web and mobile applications. 
                  Passionate about creating elegant solutions to complex problems. 
                  Currently working on cloud-native architectures and AI-powered applications at TechCorp.
                </p>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Work</h3>
                      <p className="text-sm text-muted-foreground">Senior Developer at TechCorp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Joined</h3>
                      <p className="text-sm text-muted-foreground">January 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Resume</h3>
                      <Button variant="link" className="h-auto p-0 text-primary">View Resume</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Link2 className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Portfolio</h3>
                      <Button variant="link" className="h-auto p-0 text-primary">johndoe.dev</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="posts" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Your posts will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Experience
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Experience
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-12 w-12 rounded bg-muted flex items-center justify-center mr-4 flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Senior Developer</h3>
                      <p className="text-muted-foreground">TechCorp</p>
                      <p className="text-sm text-muted-foreground">Jan 2022 - Present · 3 years</p>
                      <p className="text-sm mt-2">
                        Leading development efforts for cloud-native applications and mentoring junior developers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-12 w-12 rounded bg-muted flex items-center justify-center mr-4 flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Full Stack Developer</h3>
                      <p className="text-muted-foreground">DevInnovate Inc.</p>
                      <p className="text-sm text-muted-foreground">Mar 2019 - Dec 2021 · 2 years 10 months</p>
                      <p className="text-sm mt-2">
                        Designed and implemented RESTful APIs and frontend applications for various clients.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="education" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Education
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Education
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-12 w-12 rounded bg-muted flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Computer Science, BSc</h3>
                      <p className="text-muted-foreground">University of Technology</p>
                      <p className="text-sm text-muted-foreground">2015 - 2019</p>
                      <p className="text-sm mt-2">
                        Graduated with honors. Specialized in software engineering and machine learning.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Skills
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Skill
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">React</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">Node.js</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">TypeScript</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">GraphQL</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">Docker</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">AWS</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">CI/CD</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">MongoDB</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">PostgreSQL</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">UI/UX Design</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const Users = ({ className, ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
};

export default Profile;
