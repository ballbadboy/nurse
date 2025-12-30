import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Community from './pages/Community';
import Learning from './pages/Learning';
import Profile from './pages/Profile';
import Login from './pages/Login';
import OrgHub from './pages/OrgHub';
import { User } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTab, setCurrentTab] = useState('home');
  // Manager mode toggle to show the Organization Hub screen requested in images
  const [isManagerMode, setIsManagerMode] = useState(false);

  const user: User = {
    name: "Sarah Jenkins, RN",
    role: "ICU Registered Nurse",
    avatar: "https://i.pravatar.cc/300?u=sarah",
    completeness: 85
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderContent = () => {
    if (isManagerMode) {
        switch(currentTab) {
            case 'org': return <OrgHub />;
            case 'jobs': return <Jobs />; // Recruiter view could be different, but reusing for demo
            case 'profile': return <Profile />;
            default: return <OrgHub />;
        }
    }

    switch (currentTab) {
      case 'home':
        return <Home />;
      case 'jobs':
        return <Jobs />;
      case 'community':
        return <Community />;
      case 'learning':
        return <Learning />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100 flex flex-col max-w-md mx-auto relative shadow-2xl overflow-hidden">
      <Header 
        user={user} 
        activeTab={currentTab} 
        isManagerMode={isManagerMode}
        toggleManagerMode={() => {
            setIsManagerMode(!isManagerMode);
            setCurrentTab(isManagerMode ? 'home' : 'org');
        }}
      />
      
      <main className="flex-1 overflow-y-auto hide-scrollbar scroll-smooth">
        {renderContent()}
      </main>

      <Navigation 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        isManagerMode={isManagerMode}
      />
    </div>
  );
};

export default App;