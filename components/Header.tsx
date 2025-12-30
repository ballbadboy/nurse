import React from 'react';
import { Bell, Menu, LayoutGrid } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User;
  activeTab: string;
  isManagerMode: boolean;
  toggleManagerMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, activeTab, isManagerMode, toggleManagerMode }) => {
  let title = "Good Morning,";
  let subtitle = user.name.split(',')[0];

  if (activeTab === 'community') {
    title = "Community Hub";
    subtitle = "";
  } else if (activeTab === 'learning') {
    title = "Learning Hub";
    subtitle = "";
  } else if (activeTab === 'profile') {
    title = "My Profile";
    subtitle = "Preview";
  } else if (activeTab === 'jobs') {
    title = "Welcome back,";
    subtitle = user.name;
  } else if (activeTab === 'org') {
      title = "Organization Hub";
      subtitle = "";
  }

  // Different header style for pages with simple titles
  const isSimpleHeader = ['community', 'learning', 'org'].includes(activeTab);

  return (
    <header className={`sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md px-4 py-3 flex justify-between items-center ${activeTab === 'profile' ? 'border-b border-transparent' : 'border-b border-slate-800/50'}`}>
      {isSimpleHeader ? (
        <div className="flex items-center gap-2">
            {activeTab === 'org' && (
                <div className="p-1.5 bg-blue-500/20 rounded-md mr-1">
                    <LayoutGrid size={18} className="text-blue-400" />
                </div>
            )}
            <h1 className="text-xl font-bold text-white">{title}</h1>
        </div>
      ) : activeTab === 'profile' ? (
           <>
            <button className="text-white"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></button>
            <h1 className="text-lg font-bold text-white">My Profile</h1>
            <button className="text-blue-400 font-medium text-sm">Preview</button>
           </>
      ) : (
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={user.avatar} alt="Profile" className="w-10 h-10 rounded-full border border-slate-700" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
          </div>
          <div>
            <p className="text-slate-400 text-xs">{title}</p>
            <h1 className="text-white font-bold text-sm leading-tight">{subtitle}</h1>
          </div>
        </div>
      )}

      {activeTab !== 'profile' && (
        <div className="flex items-center gap-3">
            {/* Hidden Manager Toggle for Demo Purposes */}
            <button onClick={toggleManagerMode} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isManagerMode ? 'bg-blue-600 text-white' : 'bg-transparent text-transparent hover:text-slate-700'}`}>
               <LayoutGrid size={14} />
            </button>

            <button className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white relative hover:bg-slate-700 transition-colors">
                <Bell size={20} />
                <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border border-slate-800"></span>
            </button>
        </div>
      )}
    </header>
  );
};

export default Header;