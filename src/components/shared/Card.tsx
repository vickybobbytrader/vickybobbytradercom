import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export function Card({ children, className = '', featured = false }: CardProps) {
  return (
    <div 
      className={`
        rounded-lg shadow-xl p-8
        ${featured ? 'bg-blue-600 text-white transform scale-105' : 'bg-white'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}