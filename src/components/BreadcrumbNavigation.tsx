import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ 
  items, 
  className = '' 
}) => {
  return (
    <nav 
      className={`flex items-center space-x-2 text-sm ${className}`}
      aria-label="Breadcrumb navigation"
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center text-gray-500 hover:text-primary-teal transition-colors"
        aria-label="Go to homepage"
      >
        <Home className="h-4 w-4" />
      </button>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {item.isActive ? (
            <span className="text-gray-900 font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <button
              onClick={item.onClick}
              className="text-gray-500 hover:text-primary-teal transition-colors"
            >
              {item.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadcrumbNavigation;