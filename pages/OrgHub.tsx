import React from 'react';
import { Users, Clock, DollarSign, BookOpen, Star, ChevronRight, PieChart } from 'lucide-react';

const OrgHub: React.FC = () => {
  return (
    <div className="pb-24 pt-2 px-4">
        {/* Header */}
        <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center border border-blue-500/30">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                    <h1 className="text-white font-bold text-lg">Organization Hub</h1>
                    <p className="text-slate-400 text-xs">Manage Your Team</p>
                </div>
            </div>
        </div>

        {/* HR Management Suite Banner */}
        <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-1">HR Management <span className="text-blue-500">Suite</span></h2>
            <p className="text-slate-400 text-sm">Seamlessly manage your nursing staff operations with our all-in-one plug-and-play solution.</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-brand-card p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-slate-500 text-[10px] uppercase font-bold">Total Staff</span>
                    <Users size={16} className="text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">142</div>
                <div className="flex items-center text-green-400 text-xs font-medium">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    +12 this month
                </div>
            </div>

             <div className="bg-brand-card p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-slate-500 text-[10px] uppercase font-bold">Attendance</span>
                     <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                </div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-slate-500 text-xs">Last 7 days</div>
            </div>
        </div>

        {/* Management Tools List */}
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-bold text-lg">Management Tools</h3>
            <button className="text-blue-500 text-sm">Customize</button>
        </div>

        <div className="space-y-3">
            {[
                { icon: Users, label: 'Employee Records', desc: 'Manage profiles & contracts', color: 'bg-blue-500/10 text-blue-500' },
                { icon: Clock, label: 'Attendance Tracking', desc: 'Shifts, leaves & check-ins', color: 'bg-purple-500/10 text-purple-500' },
                { icon: DollarSign, label: 'Payroll & Benefits', desc: 'Salary processing & slips', color: 'bg-green-500/10 text-green-500' },
                { icon: BookOpen, label: 'E-Training', desc: 'Courses & skill assessments', color: 'bg-orange-500/10 text-orange-500' },
                { icon: Star, label: 'Performance Reviews', desc: 'Evaluations & feedback', color: 'bg-pink-500/10 text-pink-500' }
            ].map((tool, idx) => (
                <div key={idx} className="bg-brand-card p-4 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.color}`}>
                            <tool.icon size={22} />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm">{tool.label}</h4>
                            <p className="text-slate-500 text-xs">{tool.desc}</p>
                        </div>
                    </div>
                    <ChevronRight className="text-slate-600 group-hover:text-slate-300 transition-colors" size={20} />
                </div>
            ))}
        </div>

        {/* Unlock Analytics CTA */}
        <div className="mt-8 bg-blue-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-blue-900/40">
            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Unlock Advanced Analytics</h3>
                <p className="text-blue-100 text-sm mb-4 max-w-[80%]">Get deeper insights into workforce productivity and retention.</p>
                <button className="bg-white text-blue-600 px-5 py-2.5 rounded-lg font-bold text-sm">View Plans</button>
            </div>
             <div className="absolute top-[-20px] right-[-30px] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
             <div className="absolute bottom-[-20px] left-[100px] w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
        </div>
    </div>
  );
};

export default OrgHub;