import React from 'react';
import { Home, Briefcase, GraduationCap, Users, User, LayoutDashboard } from 'lucide-react';

interface NavigationProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isManagerMode: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentTab, setCurrentTab, isManagerMode }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs' },
    { id: 'learning', icon: GraduationCap, label: 'Learn' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  if (isManagerMode) {
    // Simplified nav for manager mode preview
     const managerNavItems = [
        { id: 'org', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'jobs', icon: Briefcase, label: 'Recruit' },
        { id: 'profile', icon: User, label: 'Profile' },
     ];
     
     return (
        <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 pb-safe pt-2 px-6 z-50">
          <div className="flex justify-between items-center max-w-md mx-auto h-16">
            {managerNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex flex-col items-center gap-1 w-16 transition-colors duration-200 ${
                  currentTab === item.id ? 'text-primary-500' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <item.icon size={24} strokeWidth={currentTab === item.id ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      );
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-brand-card border-t border-slate-800 pb-safe pt-2 px-2 z-50">
      <div className="flex justify-between items-center max-w-lg mx-auto h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentTab(item.id)}
            className={`flex flex-col items-center gap-1 flex-1 transition-colors duration-200 ${
              currentTab === item.id ? 'text-primary-500' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <item.icon size={24} strokeWidth={currentTab === item.id ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;