import React from 'react';
import { Search, Star, Award, PlayCircle, BookOpen } from 'lucide-react';

const Learning: React.FC = () => {
  return (
    <div className="pb-24 pt-2 px-4">
        {/* Search */}
        <div className="relative mb-6">
            <Search className="absolute left-3 top-3 text-slate-500" size={18} />
            <input
                type="text"
                placeholder="Search courses, skills, certification"
                className="w-full bg-slate-800 text-white rounded-lg py-2.5 pl-10 pr-10 border border-slate-700 focus:outline-none focus:border-blue-500"
            />
             <button className="absolute right-3 top-3 text-slate-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
             </button>
        </div>

        {/* CE Progress */}
        <div className="bg-brand-card p-5 rounded-2xl border border-slate-800 mb-6 shadow-lg">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h2 className="text-white font-bold">Your CE Progress</h2>
                    <p className="text-slate-500 text-xs uppercase tracking-wide">License Renewal</p>
                </div>
                <span className="bg-blue-900/40 text-blue-400 text-xs font-bold px-2 py-1 rounded-md">75%</span>
            </div>
            <div className="flex justify-between text-sm text-slate-300 mb-1">
                <span>12/30 Credits</span>
                <span className="text-slate-500">Due Dec 31</span>
            </div>
             <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>

            <div className="flex justify-between divide-x divide-slate-700">
                <div className="flex-1 text-center px-2">
                    <p className="text-xl font-bold text-white">8</p>
                    <p className="text-[10px] text-slate-500 uppercase">Completed</p>
                </div>
                 <div className="flex-1 text-center px-2">
                    <p className="text-xl font-bold text-white">2</p>
                    <p className="text-[10px] text-slate-500 uppercase">Ongoing</p>
                </div>
                 <div className="flex-1 text-center px-2">
                    <p className="text-xl font-bold text-white">45h</p>
                    <p className="text-[10px] text-slate-500 uppercase">Learned</p>
                </div>
            </div>
        </div>

        {/* Pro Access Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-5 mb-6 text-white shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                 <div className="flex justify-between items-start">
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Award size={14} />
                            <span className="text-xs font-bold uppercase text-purple-200">Pro Access</span>
                        </div>
                        <h2 className="text-xl font-bold mb-1">Unlimited Certifications</h2>
                        <p className="text-purple-100 text-xs mb-4">Get access to all 50+ premium courses.</p>
                     </div>
                     <div className="text-right">
                         <span className="text-2xl font-bold">$14.99</span>
                         <p className="text-[10px] text-purple-200">/ MONTH</p>
                     </div>
                 </div>
                 <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-1 text-[10px] text-purple-200">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm2 2v-2h6v2H7z" clipRule="evenodd" /></svg>
                        Secure SSL Payment
                    </div>
                    <button className="bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1">
                        Subscribe <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                 </div>
             </div>
             {/* Abstract circles */}
             <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
             <div className="absolute bottom-[-10px] left-[-10px] w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">All</button>
            <button className="bg-slate-800 text-slate-300 border border-slate-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                <Star size={14} className="text-purple-400"/> Premium
            </button>
            <button className="bg-slate-800 text-slate-300 border border-slate-700 px-4 py-2 rounded-full text-sm font-medium">Certifications</button>
        </div>

        {/* Featured Course */}
        <div className="mb-6">
            <h2 className="text-white font-bold text-lg mb-3">Featured Course</h2>
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-brand-card shadow-lg">
                <div className="h-40 relative">
                     <img src="https://picsum.photos/600/300?random=10" className="w-full h-full object-cover" />
                     <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                            <Star size={10} fill="currentColor"/> PREMIUM
                        </span>
                        <span className="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">
                            MANDATORY
                        </span>
                     </div>
                </div>
                <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-1">ACLS Renewal 2024</h3>
                    <p className="text-slate-400 text-xs mb-4">Advanced Cardiac Life Support - Updated Guidelines</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                             <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 4h 30m</span>
                             <span className="flex items-center gap-1"><BookOpen size={12}/> 4 Credits</span>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium">Start Now</button>
                    </div>
                </div>
            </div>
        </div>

        {/* My Learning List */}
        <div>
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-white font-bold text-lg">My Learning</h2>
                <button className="text-blue-400 text-sm">See All</button>
            </div>
            
            <div className="space-y-3">
                 <div className="bg-brand-card p-3 rounded-xl border border-slate-800 flex gap-3 items-center">
                    <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                         <img src="https://picsum.photos/100/100?random=11" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between mb-1">
                            <h4 className="text-white font-medium text-sm">IV Therapy Basics</h4>
                            <span className="text-blue-400 text-xs font-bold">65%</span>
                        </div>
                        <p className="text-slate-500 text-xs mb-2">Module 3: Vein Selection</p>
                        <div className="w-full bg-slate-700 rounded-full h-1">
                             <div className="bg-blue-500 h-1 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-500">
                        <PlayCircle size={20} />
                    </button>
                 </div>
            </div>
        </div>
        
        {/* Recommended Certifications Grid (Bottom) */}
        <div className="mt-6 grid grid-cols-2 gap-3">
            {[
                { title: 'Pediatrics', level: 'Intermediate', color: 'bg-blue-500', icon: '👶' },
                { title: 'Mental Health', level: 'Advanced', color: 'bg-orange-500', icon: '🧠' },
                { title: 'Critical Care', level: 'Expert', color: 'bg-red-500', icon: '🏥' },
                { title: 'Leadership', level: 'Beginner', color: 'bg-green-500', icon: '👥' },
            ].map((cert, idx) => (
                <div key={idx} className="bg-brand-card p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                    <div className={`w-10 h-10 ${cert.color} rounded-full flex items-center justify-center text-lg mb-2 shadow-lg`}>
                        {cert.icon}
                    </div>
                    <h4 className="text-white font-medium text-sm">{cert.title}</h4>
                    <p className="text-slate-500 text-xs">{cert.level}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Learning;