import React from 'react';
import { ClassSchedule } from '../types';

const dojangScheduleData: ClassSchedule[] = [
  { 
    day: 'Saturday', 
    classes: [
      { time: '9:00 AM - 10:00 AM', level: 'All Ranks', ageGroup: 'All Ages' },
    ]
  },
  { 
    day: 'Sunday', 
    classes: [
      { time: '9:00 AM - 10:00 AM', level: 'Open Mat / Family Class', ageGroup: 'All Ages' },
    ]
  },
];

const onlineScheduleData: ClassSchedule[] = [
  { 
    day: 'Saturday', 
    classes: [
      { time: '5:00 PM - 6:00 PM', level: 'Live-Stream Class', ageGroup: 'All Ages' },
    ]
  },
  { 
    day: 'Sunday', 
    classes: [
      { time: '5:00 PM - 6:00 PM', level: 'Live-Stream Class', ageGroup: 'All Ages' },
    ]
  },
];

const ScheduleGrid: React.FC<{ schedule: ClassSchedule[] }> = ({ schedule }) => (
  <div className="overflow-x-auto bg-slate-800 rounded-lg border border-slate-700 shadow-2xl max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 min-w-max md:min-w-full">
      {schedule.map((daySchedule) => (
        <div key={daySchedule.day} className="border-b md:border-b-0 md:border-r border-slate-700 last:border-r-0 last:border-b-0">
          <h3 className="text-xl font-bold text-center py-4 bg-slate-900 text-white">{daySchedule.day}</h3>
          <div className="p-4 space-y-4">
            {daySchedule.classes.map((cls, index) => (
              <div key={index} className="bg-slate-700 p-3 rounded-md">
                <p className="font-semibold text-white">{cls.time}</p>
                <p className="text-slate-200">{cls.level}</p>
                <p className="text-sm text-slate-400">{cls.ageGroup}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SchedulePage: React.FC = () => {
  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Class Schedule</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            We offer both in-person and online classes to fit your needs.
          </p>
        </div>
        
        {/* In-Person Schedule */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-500">In-Person (Dojang) Schedule</h2>
            <ScheduleGrid schedule={dojangScheduleData} />
        </div>

        {/* Online Schedule */}
        <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Online (Live-Stream) Schedule</h2>
            <ScheduleGrid schedule={onlineScheduleData} />
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;