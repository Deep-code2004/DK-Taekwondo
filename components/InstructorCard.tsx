
import React from 'react';
import { Instructor } from '../types';

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 group transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative">
        <img src={instructor.imageUrl} alt={instructor.name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white">{instructor.name}</h3>
          <p className="text-md font-semibold text-red-400">{instructor.rank}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-300 leading-relaxed">{instructor.bio}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
