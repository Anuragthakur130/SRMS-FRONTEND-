import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FacultyPortal() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-[90vh] px-4 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full blur-[160px] animate-blob" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-400/8 rounded-full blur-[140px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-amber-200/40 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-[10px] font-black tracking-widest text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 rounded-full border border-orange-300/40">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              FACULTY SESSION
            </div>
            <h2 className="text-3xl font-black text-amber-900 dark:text-amber-100 mb-1">Faculty Dashboard</h2>
            <span className="inline-block text-amber-600 dark:text-amber-400 font-black bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full text-sm border border-amber-200/50">
              Welcome back, Dr. Alan 👋
            </span>
          </div>
          <button onClick={() => navigate('/login')} className="btn-shimmer px-8 py-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-black rounded-2xl hover-lift transition-all duration-300 border border-orange-200/50 text-sm uppercase tracking-widest shadow-sm">
            Logout →
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: 'Classes Assigned', value: '4', icon: '📚', border: 'amber' },
            { label: 'Total Students', value: '245', icon: '🎓', border: 'green' },
            { label: 'Pending Evaluations', value: '1 Class', icon: '⏳', border: 'orange', warn: true },
          ].map((stat, i) => (
            <div key={i}
              className={`stat-card hover-lift animate-card-enter flex items-center gap-5`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-${stat.border}-100 dark:bg-${stat.border}-900/30 shadow-sm group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-slate-400 dark:text-slate-500 font-black uppercase text-[10px] tracking-widest mb-1">{stat.label}</p>
                <span className={`text-3xl font-black ${stat.warn ? 'text-orange-500' : 'text-amber-900 dark:text-amber-100'}`}>{stat.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Upload panel */}
        <div className="glass rounded-[2.5rem] shadow-xl overflow-hidden animate-card-enter animation-delay-200 hover-lift">
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 px-8 py-5">
            <h3 className="text-xl font-black text-white">📤 Upload Marks — Ongoing Courses</h3>
          </div>
          <div className="p-8">
            <div className="grid gap-5">
              {[
                'Computer Networks (CS302) – 6th Sem',
                'Operating Systems (CS301) – 6th Sem',
                'Artificial Intelligence (CS401) – 8th Sem'
              ].map((cls, i) => (
                <div key={i} className="gradient-border flex flex-col md:flex-row justify-between items-center p-5 glass rounded-2xl hover:shadow-neon-amber transition-all duration-300 group">
                  <span className="font-black text-amber-900 dark:text-amber-100 mb-4 md:mb-0 text-base group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    📖 {cls}
                  </span>
                  <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-2.5 glass text-amber-800 dark:text-amber-300 font-black rounded-xl hover-lift transition-all duration-300 text-sm border border-amber-200/50 dark:border-amber-700/30">
                      View List
                    </button>
                    <button className="btn-shimmer flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black rounded-xl hover-lift transition-all duration-300 shadow-neon-brown text-sm">
                      Upload Result
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
