import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPortal() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-[90vh] px-4 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute top-0 right-[10%] w-96 h-96 bg-slate-400/8 rounded-full blur-[180px] animate-blob" />
      <div className="absolute bottom-0 left-[10%] w-80 h-80 bg-amber-400/8 rounded-full blur-[160px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-200/60 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-[10px] font-black tracking-widest text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30 rounded-full border border-red-300/40">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              ADMIN — ELEVATED ACCESS
            </div>
            <h2 className="text-3xl font-black text-amber-900 dark:text-amber-100 mb-1">Admin Control Center</h2>
            <p className="text-slate-400 dark:text-slate-500 font-black text-xs uppercase tracking-widest">System Overview & Management</p>
          </div>
          <button onClick={() => navigate('/login')} className="btn-shimmer px-8 py-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-black rounded-2xl hover-lift transition-all duration-300 border border-orange-200/50 text-sm uppercase tracking-widest shadow-sm">
            Logout →
          </button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Students', value: '3,450', icon: '🎓', color: 'blue' },
            { label: 'Total Faculty', value: '128', icon: '👨‍🏫', color: 'indigo' },
            { label: 'Results Published', value: '8,920', icon: '📋', color: 'green' },
            { label: 'System Errors', value: '0', icon: '🛡️', color: 'red' },
          ].map((stat, i) => (
            <div key={i}
              className={`stat-card hover-lift animate-card-enter flex flex-col items-center justify-center text-center`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <span className={`text-${stat.color}-500 dark:text-${stat.color}-400 text-4xl font-black mb-1`}>{stat.value}</span>
              <span className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="glass rounded-[2.5rem] shadow-xl overflow-hidden animate-card-enter hover-lift">
            <div className="px-8 py-5 border-b border-amber-200/30 dark:border-slate-700">
              <h3 className="text-xl font-black text-amber-900 dark:text-amber-100 flex items-center gap-2">⚡ Quick Actions</h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4">
              {[
                { icon: '👤', label: 'Add Student', bg: 'emerald' },
                { icon: '👨‍🏫', label: 'Add Faculty', bg: 'orange' },
                { icon: '📚', label: 'Courses', bg: 'emerald' },
                { icon: '⚙️', label: 'Settings', bg: 'slate' },
              ].map((action, i) => (
                <button key={i}
                  className={`py-7 px-4 rounded-[1.5rem] font-black flex flex-col items-center justify-center gap-3 group hover-lift transition-all duration-300 glass gradient-border text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white`}
                >
                  <span className="text-4xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">{action.icon}</span>
                  <span className="text-sm uppercase tracking-wider font-black">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* System Logs */}
          <div className="glass rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col animate-card-enter animation-delay-200 hover-lift">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-5">
              <h3 className="text-lg font-black text-white flex items-center gap-2">📋 System Logs</h3>
            </div>
            <div className="flex-grow flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { role: 'Admin', msg: 'created new Faculty "Dr. Alan"', time: '2 mins ago', color: 'amber' },
                { role: 'System', msg: 'Auto-backup completed', time: '1 hour ago', color: 'green' },
                { role: 'Faculty', msg: '(ID: F102) updated grades', time: '3 hours ago', color: 'amber' },
                { role: 'Security', msg: 'Failed login attempt flag', time: '4 hours ago', color: 'orange' },
              ].map((log, i) => (
                <div key={i} className="px-6 py-5 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group">
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                    <span className={`font-black text-${log.color}-600 dark:text-${log.color}-400 mr-2`}>{log.role}</span>
                    {log.msg}
                  </span>
                  <span className="text-slate-400 text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg whitespace-nowrap ml-3">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
