import React, { useState } from 'react';
import { Search, Filter, Map, Bookmark, DollarSign, Clock, MapPin } from 'lucide-react';
import { Job } from '../types';

const Jobs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Pediatric Nurse',
      hospital: "St. Mary's Hospital",
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$45 - $55',
      matchPercentage: 98,
      urgent: false,
      postedTime: 'Just now',
      shift: 'Day'
    },
    {
      id: '2',
      title: 'ICU Registered Nurse',
      hospital: 'Northwell Health',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$62',
      matchPercentage: 88,
      urgent: true,
      postedTime: '2h ago',
      shift: 'Night'
    },
    {
        id: '3',
        title: 'Clinical Nurse Manager',
        hospital: 'Kaiser Permanente',
        location: 'Oakland, CA',
        type: 'Full-time',
        salary: '$110k - $140k',
        matchPercentage: 0,
        urgent: false,
        postedTime: '5h ago',
        shift: 'Day'
    },
    {
        id: '4',
        title: 'Telehealth Nurse',
        hospital: 'HealthConnect Remote',
        location: 'Remote',
        type: 'Part-time',
        salary: '$45',
        matchPercentage: 0,
        urgent: false,
        postedTime: '1d ago',
        shift: 'Flexible'
    }
  ];

  return (
    <div className="pb-24 pt-2 h-full flex flex-col">
        <div className="px-4 mb-4">
             <div className="relative">
                <Search className="absolute left-3 top-3.5 text-slate-500" size={20} />
                <input
                    type="text"
                    placeholder="Search by hospital or role..."
                    className="w-full bg-slate-800 text-white rounded-xl py-3 pl-10 pr-10 border border-slate-700 focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-3 top-3 text-blue-400">
                    <Filter size={20} />
                </button>
            </div>
        </div>

        {/* Filter Pills */}
        <div className="flex px-4 gap-2 mb-6 overflow-x-auto hide-scrollbar">
            {['All Jobs', 'Specialty', 'Location', 'Shift Type'].map((filter, idx) => (
                <button
                    key={idx}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border ${
                        idx === 0
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>

        {/* Recommended Header */}
        <div className="px-4 flex justify-between items-center mb-4">
             <h2 className="text-lg font-bold text-white">Recommended for you</h2>
             <button className="text-blue-400 text-sm">See All</button>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="pl-4 mb-8 overflow-x-auto hide-scrollbar flex gap-4">
             {jobs.slice(0, 2).map(job => (
                 <div key={job.id} className="min-w-[280px] bg-brand-card p-4 rounded-xl border border-slate-700">
                      <div className="flex justify-between items-start mb-3">
                          <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-xl font-bold text-blue-400 border border-slate-600">
                              +
                          </div>
                          {job.matchPercentage > 0 && (
                            <span className="bg-blue-900/40 text-blue-400 text-xs px-2 py-1 rounded flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
                                {job.matchPercentage}% Match
                            </span>
                          )}
                      </div>
                      <h3 className="text-white font-bold text-lg leading-tight mb-1">{job.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{job.hospital}</p>

                      <div className="flex gap-2 mb-4">
                           <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded flex items-center gap-1">
                               <MapPin size={10} /> {job.location.split(',')[0]}
                           </span>
                           <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded flex items-center gap-1">
                               <Clock size={10} /> {job.type}
                           </span>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                           <span className="text-white font-bold">{job.salary}<span className="text-slate-500 text-sm font-normal">/hr</span></span>
                           <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg font-medium">Apply Now</button>
                      </div>
                 </div>
             ))}
        </div>

        {/* Recent Opportunities List */}
        <div className="px-4 pb-20">
            <h2 className="text-lg font-bold text-white mb-4">Recent Opportunities</h2>
            <div className="space-y-4">
                {jobs.slice(1).map(job => (
                    <div key={job.id} className="bg-brand-card p-4 rounded-xl border border-slate-700 flex gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                             {/* Placeholder logo */}
                             <img src={`https://picsum.photos/seed/${job.id}/100/100`} alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-white font-bold">{job.title}</h3>
                                <Bookmark size={18} className="text-slate-500" />
                            </div>
                            <p className="text-slate-400 text-sm mb-2">{job.hospital}</p>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400 mb-2">
                                <span className="flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
                                <span className="flex items-center gap-1"><Clock size={12}/> {job.shift} Shift</span>
                                <span className="flex items-center gap-1"><DollarSign size={12}/> {job.salary}/hr</span>
                            </div>
                            <div className="flex justify-between items-center">
                                {job.urgent ? (
                                    <span className="text-red-400 bg-red-900/20 px-2 py-1 rounded text-xs border border-red-900/50">Urgent Need</span>
                                ) : (
                                    <span className="text-green-400 bg-green-900/20 px-2 py-1 rounded text-xs border border-green-900/50">New</span>
                                )}
                                <span className="text-slate-600 text-xs">Posted {job.postedTime}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Map View Float Button */}
        <div className="fixed bottom-20 right-4 z-40">
            <button className="bg-white text-slate-900 px-5 py-2.5 rounded-full shadow-lg font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors">
                <Map size={18} />
                Map View
            </button>
        </div>
    </div>
  );
};

export default Jobs;