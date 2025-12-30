import React from 'react';
import { Calendar, CheckSquare, QrCode, Clock, MapPin, ChevronRight, Play } from 'lucide-react';
import { Job, Course } from '../types';

const Home: React.FC = () => {
  const jobs: Job[] = [
    {
      id: '1',
      title: 'ICU Registered Nurse',
      hospital: "St. Mary's Hospital",
      location: '2.4mi',
      type: 'Full-time',
      salary: '$55/hr',
      matchPercentage: 98,
      urgent: false,
      postedTime: '2h ago',
      shift: 'Night (12h)'
    },
    {
      id: '2',
      title: 'Pediatric Nurse',
      hospital: "General Hospital",
      location: '5.1mi',
      type: 'Contract',
      salary: '$62/hr',
      matchPercentage: 92,
      urgent: true,
      postedTime: '5h ago',
      shift: 'Day (12h)'
    }
  ];

  const course: Course = {
    id: '101',
    title: 'Advanced Cardiac Life Support',
    module: 'Module 3 of 5',
    progress: 60,
    image: 'https://picsum.photos/100/100',
    credits: 4
  };

  return (
    <div className="pb-24 pt-2 px-4 space-y-6">
      {/* Profile Completeness */}
      <div className="bg-brand-card p-5 rounded-2xl border border-slate-800 shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-white">Profile Completeness</h2>
          <span className="text-blue-400 font-bold">85%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
        </div>
        <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 p-3 rounded-lg">
          <div className="bg-slate-700 p-1 rounded-full mr-3">
             <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          Add ACLS cert to reach 100%
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { icon: Calendar, label: 'Availability', color: 'text-blue-400' },
          { icon: CheckSquare, label: 'My Shifts', color: 'text-cyan-400' },
          { icon: QrCode, label: 'Scan ID', color: 'text-purple-400' },
          { icon: Clock, label: 'Log Hours', color: 'text-orange-400' },
        ].map((action, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <button className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-2 shadow-md hover:bg-slate-700 transition-colors border border-slate-700">
              <action.icon className={action.color} size={24} />
            </button>
            <span className="text-xs text-slate-400 text-center">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Job Matches */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Job Matches</h2>
          <button className="text-blue-400 text-sm font-medium">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {jobs.map((job) => (
            <div key={job.id} className="min-w-[280px] bg-brand-card p-4 rounded-2xl border border-slate-800 relative shadow-lg">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-2xl"></div>
              <div className="flex justify-between items-start mb-3">
                <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-2 py-1 rounded-md">
                  {job.matchPercentage}% Match
                </span>
                <button className="text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>
                </button>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {job.hospital.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{job.title}</h3>
                  <p className="text-slate-400 text-xs flex items-center">
                    {job.hospital} • {job.location}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-1">Rate</p>
                  <p className="text-white font-bold">{job.salary}</p>
                </div>
                <div>
                    <p className="text-slate-500 text-xs uppercase mb-1">Shift</p>
                    <p className="text-white font-bold">{job.shift.split(' ')[0]}</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-blue-900/30">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Learning */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Continue Learning</h2>
        <div className="bg-brand-card p-4 rounded-2xl border border-slate-800 flex gap-4 items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg flex-shrink-0 relative overflow-hidden">
             <div className="absolute inset-0 bg-white/10"></div>
             <svg className="absolute bottom-1 right-1 w-8 h-8 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-sm mb-1">{course.title}</h3>
            <p className="text-slate-400 text-xs mb-2">{course.module} • 20m remaining</p>
            <div className="w-full bg-slate-700 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
          </div>
          <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-slate-600 transition-colors">
            <Play size={16} fill="white" />
          </button>
        </div>
      </div>

       {/* Community Update */}
       <div>
         <div className="flex justify-between items-center mb-4">
           <h2 className="text-xl font-bold text-white">Community Updates</h2>
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
         </div>
         <div className="bg-brand-card p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-500/20 text-purple-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Discussion</span>
                <span className="text-slate-500 text-xs">2h ago</span>
            </div>
            <h3 className="text-white font-medium mb-3">Tips for managing sleep schedules during consecutive night shifts? Need advice!</h3>
            <div className="flex gap-4 text-slate-400 text-sm">
                <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    <span>24</span>
                </div>
                <div className="flex items-center gap-1">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    <span>12</span>
                </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default Home;