
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Users, Calendar, Briefcase, Search } from 'lucide-react';

const AppInfo = () => {
  return (
    <div className="space-y-6 mb-10">
      <Card>
        <CardHeader className="bg-primary text-white">
          <CardTitle className="text-xl font-bold">About NetSphere Pro</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-muted-foreground mb-6">
            NetSphere Pro is a comprehensive professional networking platform designed to connect professionals, 
            businesses, and opportunities in one powerful ecosystem. Our platform helps you build meaningful professional 
            relationships, discover career opportunities, and grow your knowledge through industry insights and professional development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <FeatureCard 
              icon={<Users className="h-6 w-6 text-primary" />} 
              title="Connect with Professionals" 
              description="Build your network with like-minded professionals in your industry and beyond."
            />
            <FeatureCard 
              icon={<Briefcase className="h-6 w-6 text-primary" />} 
              title="Discover Opportunities" 
              description="Find job openings, freelance work, and business opportunities tailored to your skills."
            />
            <FeatureCard 
              icon={<MessageCircle className="h-6 w-6 text-primary" />} 
              title="Engage in Discussions" 
              description="Participate in industry discussions and share your expertise with your network."
            />
            <FeatureCard 
              icon={<Calendar className="h-6 w-6 text-primary" />} 
              title="Professional Events" 
              description="Discover and attend virtual and in-person events relevant to your interests."
            />
            <FeatureCard 
              icon={<Search className="h-6 w-6 text-primary" />} 
              title="Advanced Search" 
              description="Find exactly what you're looking for with our powerful search tools."
            />
            <FeatureCard 
              icon={<Mail className="h-6 w-6 text-primary" />} 
              title="Direct Messaging" 
              description="Communicate directly with your connections in a secure environment."
            />
          </div>
        </CardContent>
      </Card>
      
      <ContactSection />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const ContactSection = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary to-red-700 text-white">
        <CardTitle className="text-xl font-bold">Contact Us</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Get in Touch</h3>
            <p className="text-muted-foreground mb-4">
              We're always here to help. Reach out to us with any questions, feedback, or inquiries.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:contact@netsphere.com" className="text-primary hover:underline">
                  contact@netsphere.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 text-primary mr-3" />
                <span>Live chat available 9am-5pm EST</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <span className="block">Support team available 24/7</span>
                  <span className="text-sm text-muted-foreground">Response within 24 hours</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-8 mt-4 md:mt-0">
            <h3 className="text-lg font-medium mb-3">Company Information</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>NetSphere Professional Networks, Inc.</li>
              <li>123 Business Avenue, Suite 400</li>
              <li>San Francisco, CA 94107</li>
              <li>United States</li>
              <li className="pt-2">
                <span className="text-primary font-medium">Hours:</span> Monday-Friday, 9:00 AM - 6:00 PM PST
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((platform) => (
                  <a 
                    key={platform}
                    href="#" 
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NetSphere Pro. All rights reserved. 
            <span className="mx-2">|</span>
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppInfo;
