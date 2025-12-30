import React, { useState } from 'react';
import { Eye, EyeOff, Activity } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Abstract Element */}
      <div className="absolute top-0 right-0 w-full h-2/3 opacity-20 pointer-events-none">
         <div className="w-full h-full bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950" />
         {/* Simplified visual representation of the DNA helix */}
         <svg viewBox="0 0 200 400" className="absolute top-10 right-0 h-full w-full text-blue-500 animate-pulse" style={{ animationDuration: '4s'}}>
             <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,0 Q150,50 100,100 T100,200 T100,300" opacity="0.5"/>
             <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,0 Q50,50 100,100 T100,200 T100,300" opacity="0.5"/>
         </svg>
      </div>

      <div className="w-full max-w-md z-10 flex flex-col h-full justify-center">
        <div className="mb-12 text-center">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-slate-700">
                 <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                    <Activity className="text-white" size={28} />
                 </div>
            </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome, Caregiver</h1>
          <p className="text-slate-400">Empowering your nursing journey every day</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-1 rounded-xl flex mb-8">
          <button className="flex-1 py-3 rounded-lg bg-slate-800 text-white font-medium shadow-sm">Log In</button>
          <button className="flex-1 py-3 rounded-lg text-slate-400 font-medium">Sign Up</button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                </div>
                <input
                    type="email"
                    defaultValue="nurse@example.com"
                    className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3.5 placeholder-slate-500"
                    placeholder="name@company.com"
                />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Password</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3.5 placeholder-slate-500"
                    placeholder="Enter your password"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2 mb-6">
            <button className="text-sm text-blue-400 hover:text-blue-300">Forgot Password?</button>
        </div>

        <button
            onClick={onLogin}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-3.5 mb-6 text-center shadow-lg shadow-blue-900/50 transition-all"
        >
          Log In
        </button>

        <div className="relative flex items-center justify-center mb-6">
            <hr className="w-full border-slate-800" />
            <span className="absolute bg-slate-950 px-3 text-slate-500 text-xs uppercase">Or continue with</span>
        </div>

        <div className="flex space-x-4">
            <button className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg py-3 flex items-center justify-center transition-colors">
                <span className="text-white font-medium text-sm">iOS Apple</span>
            </button>
            <button className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg py-3 flex items-center justify-center transition-colors">
                 <span className="text-white font-medium text-sm">Google</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;