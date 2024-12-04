import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-56">
        <img 
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {course.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 mr-1" />
            <span>{course.rating}</span>
          </div>
        </div>
        {course.enrollLink ? (
          <a 
            href={course.enrollLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Enroll Now
          </a>
        ) : (
          <button 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            onClick={() => window.location.href = '#contact'}
          >
            Contact Us
          </button>
        )}
      </div>
    </div>
  );
}