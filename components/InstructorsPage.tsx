import React from 'react';
import { Instructor } from '../types';
import InstructorCard from './InstructorCard';

const instructors: Instructor[] = [
  {
    name: 'Grandmaster Chang Seong Dong',
    rank: '9th Dan Black Belt',
    bio: 'With over 40+  years of experience, Grandmaster Chang Seong Dong is the heart and soul of our academy. He is a world-renowned practitioner and a patient, inspiring teacher for all levels.',
    imageUrl: 'https://image2url.com/images/1762009202470-1d013655-a0a2-47e5-80a8-cfb9fb35090d.jpg',
  },
  {
    name: 'Master Manish Matkar',
    rank: '7th Dan Black Belt',
    bio: 'Master Manish specializes in competitive Poomsae (forms) and is a multiple national champion / Good Expierence In Referee  . His attention to detail and dynamic teaching style make his a student favorite.',
    imageUrl: 'https://image2url.com/images/1762009622620-3fb84c93-49ab-4be4-b43c-002e12846e75.jpg',
  },
  {
    name: 'Instructor Deep Khatri',
    rank: 'Red-1 Belt',
    bio: 'Instructor Deep leads our youth programs with boundless energy and a focus on fun. He excels at teaching foundational skills and building confidence in young/older students.',
    imageUrl: 'https://image2url.com/images/1762009541713-1368ca00-9166-416a-a187-382a8e08488f.jpg',
  },
];

const InstructorsPage: React.FC = () => {
  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Meet Our Masters</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Learn from dedicated experts who are passionate about sharing the art of Taekwondo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;