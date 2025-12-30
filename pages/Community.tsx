import React from 'react';
import { Search, MoreHorizontal, MessageSquare, ThumbsUp, Share2, Heart, TrendingUp } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="pb-24 pt-2">
      {/* Search Header */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search topics or nurses..."
            className="w-full bg-slate-800 text-slate-200 rounded-lg py-2.5 pl-10 border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-500"
          />
        </div>
      </div>

      {/* Topics Tabs */}
      <div className="px-4 flex gap-3 mb-6 overflow-x-auto hide-scrollbar">
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          All
        </button>
        <button className="bg-slate-800 text-slate-300 border border-slate-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 whitespace-nowrap">
           <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
           Clinical Q&A
        </button>
        <button className="bg-slate-800 text-slate-300 border border-slate-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 whitespace-nowrap">
           <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
           Mental Health
        </button>
      </div>

      {/* Trending Now */}
      <div className="px-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-white font-bold text-lg">Trending Now</h2>
          <button className="text-blue-400 text-sm">View all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            <div className="min-w-[200px] group cursor-pointer">
                <div className="h-28 rounded-xl overflow-hidden relative mb-2 border border-slate-800">
                    <img src="https://picsum.photos/300/200?random=1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <span className="absolute bottom-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">HOT</span>
                </div>
                <h3 className="text-white font-medium text-sm leading-tight">ICU Staffing Ratios</h3>
                <p className="text-slate-500 text-xs">1.2k nurses discussing</p>
            </div>
            <div className="min-w-[200px] group cursor-pointer">
                <div className="h-28 rounded-xl overflow-hidden relative mb-2 border border-slate-800">
                    <img src="https://picsum.photos/300/200?random=2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-white font-medium text-sm leading-tight">New Shift Protocols</h3>
                <p className="text-slate-500 text-xs">850 new comments</p>
            </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4 px-4">
        {/* Text Post */}
        <div className="bg-brand-card p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                    <img src="https://i.pravatar.cc/150?u=sarah" className="w-10 h-10 rounded-full border border-slate-700" />
                    <div>
                        <h4 className="text-white font-semibold text-sm flex items-center gap-1">
                            Sarah Jenkins
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        </h4>
                        <p className="text-slate-500 text-xs">RN, BSN • 2 hours ago</p>
                    </div>
                </div>
                <button className="text-slate-400"><MoreHorizontal size={18}/></button>
            </div>
            <h3 className="text-white font-bold mb-2">Question about heparin drip protocols?</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Hey everyone, just started in the ICU and I'm finding the new weight-based heparin nomogram a bit confusing compared to what I learned in school. Specifically regarding the initial bolus adjustments... <span className="text-blue-400">Read more</span>
            </p>
            <div className="flex gap-2 mb-4">
                <span className="bg-slate-800 text-blue-400 text-xs px-2 py-1 rounded">#ClinicalHelp</span>
                <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded">#ICU</span>
                <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded">#MedicationSafety</span>
            </div>
            <div className="flex items-center justify-between border-t border-slate-700 pt-3">
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 text-sm">
                    <ThumbsUp size={16} /> 24
                </button>
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 text-sm">
                    <MessageSquare size={16} /> 8 Comments
                </button>
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 text-sm">
                    <Share2 size={16} /> Share
                </button>
            </div>
        </div>

        {/* Poll Post */}
        <div className="bg-brand-card p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                     <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">MK</div>
                    <div>
                        <h4 className="text-white font-semibold text-sm">Mike K.</h4>
                        <p className="text-slate-500 text-xs">LPN • 5 hours ago</p>
                    </div>
                </div>
            </div>
            <h3 className="text-white font-bold mb-4">Poll: What's your preferred shift schedule?</h3>
            
            <div className="space-y-2 mb-4">
                <div className="relative h-10 bg-slate-800 rounded-lg overflow-hidden flex items-center px-4">
                    <div className="absolute top-0 left-0 h-full bg-blue-900/50" style={{ width: '62%' }}></div>
                    <span className="relative z-10 text-slate-200 text-sm font-medium">Day Shift (7a - 7p)</span>
                    <span className="absolute right-4 z-10 text-blue-400 font-bold text-sm">62%</span>
                </div>
                <div className="relative h-10 bg-slate-800 rounded-lg overflow-hidden flex items-center px-4">
                    <div className="absolute top-0 left-0 h-full bg-slate-700/30" style={{ width: '38%' }}></div>
                    <span className="relative z-10 text-slate-200 text-sm font-medium">Night Shift (7p - 7a)</span>
                    <span className="absolute right-4 z-10 text-slate-400 font-bold text-sm">38%</span>
                </div>
            </div>
            <p className="text-slate-500 text-xs mb-3">1,042 votes • 2 days left</p>
            
            <div className="flex items-center justify-between border-t border-slate-700 pt-3">
                <button className="flex items-center gap-1.5 text-blue-500 text-sm font-medium">
                    <ThumbsUp size={16} fill="currentColor" /> 156
                </button>
                <button className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <MessageSquare size={16} /> 45 Comments
                </button>
                <button className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <Share2 size={16} />
                </button>
            </div>
        </div>

        {/* Image Post */}
         <div className="bg-brand-card p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                    <img src="https://i.pravatar.cc/150?u=david" className="w-10 h-10 rounded-full border border-slate-700" />
                    <div>
                        <h4 className="text-white font-semibold text-sm flex items-center gap-1">
                            David Chen
                             <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        </h4>
                        <p className="text-slate-500 text-xs">NP • 1 day ago</p>
                    </div>
                </div>
            </div>
            <h3 className="text-white font-bold mb-2">Small wins matter!</h3>
            <p className="text-slate-300 text-sm mb-3">
                Had a patient today who walked for the first time in 3 weeks post-surgery. The smile on their face made all the double shifts worth it. Reminder to cherish these moments! 💙
            </p>
            <div className="rounded-lg overflow-hidden mb-3 border border-slate-800">
                <img src="https://picsum.photos/600/300?grayscale" className="w-full h-auto" />
            </div>
             <div className="flex gap-2 mb-4">
                <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded">#NurseLife</span>
                <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded">#Inspiration</span>
            </div>
            <div className="flex items-center justify-between border-t border-slate-700 pt-3">
                 <button className="flex items-center gap-1.5 text-slate-400 hover:text-red-500 text-sm">
                    <Heart size={16} /> 342
                </button>
                <button className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <MessageSquare size={16} /> 12 Comments
                </button>
                 <button className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <Share2 size={16} />
                </button>
            </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4">
        <button className="w-14 h-14 bg-blue-500 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Community;