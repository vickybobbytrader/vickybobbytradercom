import React from 'react';
import { CourseCard } from './CourseCard';
import { courses } from '../../data/courses';

export function Courses() {
  return (
    <section className="py-20 bg-gray-50" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trading Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of comprehensive trading courses designed to help you succeed in the financial markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}