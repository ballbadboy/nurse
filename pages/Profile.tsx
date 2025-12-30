import React from 'react';
import { Download, Share2, Eye, Plus, Edit2, CheckCircle, Shield, Briefcase, FileText, Heart, School } from 'lucide-react';
import { User } from '../types';

const Profile: React.FC = () => {
  const user: User = {
    name: "Sarah Jenkins, RN",
    role: "ICU Registered Nurse",
    avatar: "https://i.pravatar.cc/300?u=sarah",
    completeness: 85
  };

  return (
    <div className="pb-24 pt-2">
      {/* Header Profile Section */}
      <div className="flex flex-col items-center px-4 mb-6">
        <div className="relative mb-3">
            <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-cyan-400">
                <img src={user.avatar} className="w-full h-full rounded-full border-4 border-slate-900 object-cover" />
            </div>
            <button className="absolute bottom-1 right-1 bg-blue-600 text-white p-1.5 rounded-full border-2 border-slate-900">
                <Edit2 size={12} />
            </button>
        </div>
        
        <div className="flex items-center gap-1.5 mb-1">
            <h1 className="text-xl font-bold text-white">{user.name}</h1>
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
        </div>
        <p className="text-slate-400 text-sm mb-3">{user.role}</p>
        
        <span className="bg-green-900/30 text-green-400 border border-green-900/50 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
            Open to Work
        </span>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-sm mb-6">
            <button className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-slate-500 transition-all">
                    <Download size={20} />
                </div>
                <span className="text-[10px] text-slate-500">Download</span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
                 <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-slate-500 transition-all">
                    <Share2 size={20} />
                </div>
                <span className="text-[10px] text-slate-500">Share Profile</span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
                 <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-slate-500 transition-all">
                    <Eye size={20} />
                </div>
                <span className="text-[10px] text-slate-500">Preview</span>
            </button>
        </div>

        {/* Profile Strength */}
        <div className="w-full bg-brand-card rounded-xl p-4 border border-slate-800 mb-6">
             <div className="flex justify-between mb-2">
                <span className="text-white text-sm font-medium">Profile Strength: <span className="text-blue-400">85%</span></span>
             </div>
             <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="flex gap-2 text-slate-400 text-xs">
                <div className="min-w-[16px]"><div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-slate-900 text-[10px] font-bold">i</div></div>
                <p>Add 2 more skills to reach All-Star status and boost your visibility to recruiters.</p>
            </div>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="px-4 space-y-4">
          {/* Summary */}
          <div>
              <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-bold">Summary</h3>
                  <button className="text-blue-400 text-xs">Edit</button>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                  Compassionate and dedicated ICU Registered Nurse with over 5 years of experience in high-acuity patient care. Proven track record in trauma stabilization and post-operative recovery. Committed to providing top-quality patient advocacy and support.
              </p>
          </div>

          {/* Experience */}
          <div>
              <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-bold">Experience</h3>
                  <button className="bg-slate-800 p-1.5 rounded-lg text-blue-400"><Plus size={16}/></button>
              </div>
              <div className="space-y-3">
                  <div className="bg-brand-card p-4 rounded-xl border border-slate-800 relative">
                       <button className="absolute top-4 right-4 text-slate-500"><Edit2 size={14}/></button>
                       <div className="flex gap-4">
                           <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                               <Briefcase size={20} className="text-slate-400"/>
                           </div>
                           <div>
                               <h4 className="text-white font-bold text-sm">Senior ICU Nurse</h4>
                               <p className="text-slate-400 text-xs mb-1">Sentara Norfolk General</p>
                               <p className="text-slate-500 text-[10px]">Jan 2019 - Present • 5 yrs</p>
                               <div className="flex gap-2 mt-2">
                                   <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded">Trauma Care</span>
                                   <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded">Epic EMR</span>
                               </div>
                           </div>
                       </div>
                  </div>
                   <div className="bg-brand-card p-4 rounded-xl border border-slate-800 relative">
                       <button className="absolute top-4 right-4 text-slate-500"><Edit2 size={14}/></button>
                       <div className="flex gap-4">
                           <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                               <div className="text-slate-400 font-bold text-lg">*</div>
                           </div>
                           <div>
                               <h4 className="text-white font-bold text-sm">ER Staff Nurse</h4>
                               <p className="text-slate-400 text-xs mb-1">Riverside Regional</p>
                               <p className="text-slate-500 text-[10px]">Jun 2016 - Dec 2018 • 2 yrs 6 mos</p>
                           </div>
                       </div>
                  </div>
              </div>
          </div>

          {/* Licenses & Certs */}
          <div>
               <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-bold">Licenses & Certs</h3>
                  <button className="bg-slate-800 p-1.5 rounded-lg text-blue-400"><Plus size={16}/></button>
              </div>
              <div className="space-y-3">
                   <div className="bg-brand-card p-4 rounded-xl border border-slate-800 flex justify-between items-start">
                        <div className="flex gap-3">
                            <div className="mt-1"><Shield className="text-blue-500" size={20} fill="currentColor" fillOpacity={0.2} /></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Registered Nurse (RN)</h4>
                                <p className="text-slate-400 text-[10px]">Lic #987654321 • Virginia Board of Nursing</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-green-400 bg-green-900/20 px-1.5 py-0.5 rounded text-[10px]">Active</span>
                                    <span className="text-slate-500 text-[10px]">Exp: 05/20/2025</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shadow-inner">
                            <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                <span className="text-blue-500 text-xs">★</span>
                            </div>
                        </div>
                   </div>

                    <div className="bg-brand-card p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex gap-3">
                            <div className="mt-1"><Heart className="text-white" size={20} fill="white" fillOpacity={0.2} /></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">ACLS Certification</h4>
                                <p className="text-slate-400 text-[10px]">American Heart Association</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-yellow-400 bg-yellow-900/20 px-1.5 py-0.5 rounded text-[10px]">Expiring Soon</span>
                                    <span className="text-yellow-500 text-[10px]">Exp: 11/15/2024</span>
                                </div>
                            </div>
                        </div>
                         <button className="text-blue-400"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></button>
                   </div>
              </div>
          </div>

          {/* Education */}
          <div>
               <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-bold">Education</h3>
                  <button className="bg-slate-800 p-1.5 rounded-lg text-blue-400"><Plus size={16}/></button>
              </div>
               <div className="bg-brand-card p-4 rounded-xl border border-slate-800 flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold border border-slate-600">VCU</div>
                   <div>
                       <h4 className="text-white font-bold text-sm">Bachelor of Science in Nursing</h4>
                       <p className="text-slate-400 text-xs">Virginia Commonwealth University • 2016</p>
                   </div>
               </div>
          </div>

          {/* Skills */}
          <div className="pb-8">
               <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-bold">Skills</h3>
                  <button className="text-blue-400"><Edit2 size={16}/></button>
              </div>
              <div className="flex flex-wrap gap-2">
                  {['ICU', 'Patient Advocacy', 'Telemetry', 'Wound Care', 'IV Therapy'].map((skill) => (
                      <span key={skill} className="bg-slate-800 text-blue-400 border border-slate-700 px-3 py-1.5 rounded-full text-xs font-medium">
                          {skill}
                      </span>
                  ))}
                  <button className="bg-transparent border border-dashed border-slate-600 text-slate-400 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 hover:border-slate-400 hover:text-white transition-colors">
                      <Plus size={12}/> Add Skill
                  </button>
              </div>
          </div>
          
           <button className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl mb-6 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2">
              <div className="bg-white text-blue-600 p-0.5 rounded text-[10px]"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
              Save & Update Profile
          </button>
      </div>
    </div>
  );
};

export default Profile;