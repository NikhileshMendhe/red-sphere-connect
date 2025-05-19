
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, Users, Briefcase, MessageCircle, Bell, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Logo />
            
            {!isMobile && (
              <div className="relative flex-1 max-w-md">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 bg-muted"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            )}
          </div>
          
          <nav className="flex items-center gap-1 md:gap-2">
            <NavItem icon={<Home />} text="Home" to="/" active={currentPath === '/'} />
            <NavItem icon={<Users />} text="Network" to="/network" active={currentPath === '/network'} />
            <NavItem icon={<Briefcase />} text="Jobs" to="/jobs" active={currentPath === '/jobs'} />
            {!isMobile && <NavItem icon={<MessageCircle />} text="Messaging" to="/messaging" active={currentPath === '/messaging'} />}
            <NavItem icon={<Bell />} text="Notifications" to="/notifications" active={currentPath === '/notifications'} />
            <NavItem icon={<User />} text="Me" to="/profile" active={currentPath === '/profile'} />
            
            {isMobile && (
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

type NavItemProps = {
  icon: React.ReactNode;
  text: string;
  to: string;
  active?: boolean;
};

const NavItem = ({ icon, text, to, active = false }: NavItemProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Link
      to={to}
      className={`flex flex-col items-center px-2 py-1 rounded-md transition-colors ${
        active 
          ? 'text-primary border-b-2 border-primary' 
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      <div className={`${active ? 'text-primary' : 'text-muted-foreground'}`}>
        {React.cloneElement(icon as React.ReactElement, {
          className: `h-5 w-5 ${active ? 'text-primary' : ''}`
        })}
      </div>
      {!isMobile && <span className="text-xs mt-1">{text}</span>}
    </Link>
  );
};

export default Header;
