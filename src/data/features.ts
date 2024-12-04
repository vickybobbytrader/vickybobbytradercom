import { BookOpen, Users, Trophy, TrendingUp } from 'lucide-react';
import { Feature } from '../types';
import React from 'react';

export const features: Feature[] = [
  {
    icon: React.createElement(BookOpen, { className: "w-12 h-12 text-blue-600" }),
    title: 'Expert Training',
    description: 'Learn from experienced traders with proven track records in the market.'
  },
  {
    icon: React.createElement(Users, { className: "w-12 h-12 text-blue-600" }),
    title: 'Community Support',
    description: 'Join our active community of traders for discussions and market insights.'
  },
  {
    icon: React.createElement(Trophy, { className: "w-12 h-12 text-blue-600" }),
    title: 'Proven Strategies',
    description: 'Access time-tested trading strategies that deliver consistent results.'
  },
  {
    icon: React.createElement(TrendingUp, { className: "w-12 h-12 text-blue-600" }),
    title: 'Live Trading',
    description: 'Experience real-time market analysis and trading sessions.'
  }
];