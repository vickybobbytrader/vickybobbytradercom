import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Button } from '../shared/Button';
import { Container } from '../shared/Container';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-32 pb-20 text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master the Art of <span className="text-black">Trading</span>
            </h1>
            <p className="text-xl mb-8">
              Learn professional trading strategies from experienced mentors and transform your trading journey.
            </p>
            <div className="flex space-x-4">
              <Button variant="secondary"><a href='#courses'>Get Started</a></Button>
            </div>
          </div>
          <div className="md:w-1/2 flex ">
            <div className="bg-white p-2 rounded-lg shadow-xl">
            <img 
              src="./images/vicky.jpg" 
              alt="Trading Analysis"
             // className="rounded-lg shadow-xl"
            />
            </div>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}