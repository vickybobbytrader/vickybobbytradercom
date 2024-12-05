import React from 'react';
import { Check } from 'lucide-react';
import { courses } from '../../data/courses';

export function Courses() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trading Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`rounded-lg ${
                course.featured 
                  ? 'bg-blue-600 text-white transform scale-105' 
                  : 'bg-white'
              } shadow-xl p-8`}
            >
              <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
              <div className="text-3xl font-bold mb-6">{course.price}</div>
              <ul className="space-y-4 mb-8">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className={`w-5 h-5 mr-2 ${course.featured ? 'text-white' : 'text-blue-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-full font-semibold transition ${
                  course.featured
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}