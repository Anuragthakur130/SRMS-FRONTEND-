import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 py-12 overflow-hidden">
      {/* Bg blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/20" />
      <div className="absolute top-[-5%] left-[10%] w-80 h-80 bg-orange-400/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-[-5%] right-[10%] w-72 h-72 bg-amber-400/15 rounded-full blur-[100px] animate-blob animation-delay-2000" />

      <div className="relative z-10 w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 rounded-full border border-orange-300/40">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            JOIN THE PLATFORM
          </div>
        </div>

        <div className="glass gradient-border p-8 rounded-[2.5rem] shadow-2xl shadow-orange-200/30 dark:shadow-orange-900/20 animate-card-enter hover-lift">
          <h2 className="text-3xl font-black text-center text-amber-900 dark:text-amber-100 mb-1">Create Account</h2>
          <p className="text-center text-amber-600/80 dark:text-amber-400/80 mb-8 text-sm font-bold">Join the completely automated SRMS system</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full px-4 py-3.5 border-2 border-orange-100 dark:border-slate-700 rounded-2xl focus:border-orange-400 outline-none transition-all duration-300 bg-white/80 dark:bg-slate-800/80 text-amber-900 dark:text-amber-100 font-bold" placeholder="First Name" />
              </div>
              <div>
                <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full px-4 py-3.5 border-2 border-orange-100 dark:border-slate-700 rounded-2xl focus:border-orange-400 outline-none transition-all duration-300 bg-white/80 dark:bg-slate-800/80 text-amber-900 dark:text-amber-100 font-bold" placeholder="Last Name" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full px-5 py-4 border-2 border-orange-100 dark:border-slate-700 rounded-2xl focus:border-orange-400 outline-none transition-all duration-300 bg-white/80 dark:bg-slate-800/80 text-amber-900 dark:text-amber-100 font-bold" placeholder="Enter Email Address" />
            </div>
            <div>
              <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">Role</label>
              <select className="w-full px-5 py-4 border-2 border-orange-100 dark:border-slate-700 rounded-2xl focus:border-orange-400 outline-none transition-all duration-300 text-amber-900 dark:text-amber-100 bg-white/80 dark:bg-slate-800/80 font-bold appearance-none">
                <optgroup label="Select your role">
                  <option value="student">🎓 Student</option>
                  <option value="faculty">👨‍🏫 Faculty</option>
                </optgroup>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">Password</label>
              <input type="password" className="w-full px-5 py-4 border-2 border-orange-100 dark:border-slate-700 rounded-2xl focus:border-orange-400 outline-none transition-all duration-300 bg-white/80 dark:bg-slate-800/80 text-amber-900 dark:text-amber-100 font-bold" placeholder="Create strong password" />
            </div>
            <button className="btn-shimmer w-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-700 text-white font-black py-4 rounded-2xl hover-lift shadow-neon-brown mt-2 text-sm uppercase tracking-widest transition-all duration-300">
              🚀 Register Account
            </button>
          </form>

          <div className="mt-7 pt-6 border-t border-orange-100 dark:border-slate-700 text-center">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
              Already have an account?{' '}
              <button onClick={() => navigate('/login')} className="font-black text-amber-700 dark:text-amber-400 hover:text-orange-600 transition link-underline">
                Sign In here →
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
