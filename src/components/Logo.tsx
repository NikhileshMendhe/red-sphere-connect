
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" className={cn("flex items-center", className)}>
      <div className="flex items-center">
        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
          N
        </div>
        <span className="ml-1 text-lg font-bold">
          <span className="text-primary">Net</span>
          <span className="text-gray-800">Sphere</span>
          <span className="text-primary ml-1">Pro</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
