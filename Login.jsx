import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [loginRole, setLoginRole] = useState('student');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginRole === 'student') {
      if (id === 'BTET24O1030' && password === '1234') {
        alert('Student Login Successful');
      } else {
        alert('Invalid Student Credentials');
      }
    } else if (loginRole === 'faculty') {
      if (id === 'FAC001' && password === '1234') {
        alert('Faculty Login Successful');
      } else {
        alert('Invalid Faculty Credentials');
      }
    } else if (loginRole === 'admin') {
      if (id === 'ADMIN' && password === 'admin123') {
        alert('Admin Login Successful');
      } else {
        alert('Invalid Admin Credentials');
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 py-12 pt-28 overflow-hidden">

      {/* ✅ FIX: click blocking remove */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/20" />
      <div className="absolute top-[-5%] right-[-5%] w-80 h-80 pointer-events-none bg-amber-400/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 pointer-events-none bg-orange-400/15 rounded-full blur-[100px] animate-blob animation-delay-2000" />

      <div className="relative z-10 w-full max-w-md">

        <div className="glass gradient-border p-8 rounded-[2.5rem] shadow-2xl shadow-amber-200/30 dark:shadow-amber-900/20 animate-card-enter hover-lift">

          <h2 className="text-2xl font-black text-center text-amber-900 dark:text-amber-100 mb-6">
            Login to Portal
          </h2>

          {/* ✅ ROLE TABS FIX */}
          <div className="flex justify-between mb-8 bg-slate-100/70 dark:bg-slate-800/70 p-1 rounded-2xl">
            {['student', 'faculty', 'admin'].map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => {
                  setLoginRole(role);
                  setId('');
                  setPassword('');
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl capitalize font-black text-sm transition-all duration-300 ${
                  loginRole === role
                    ? 'bg-white dark:bg-slate-700 text-amber-700 dark:text-amber-400 shadow-md scale-[1.02]'
                    : 'text-slate-500 dark:text-slate-400 hover:text-amber-600'
                }`}
              >
                {loginRole === role ? '✦ ' : ''}{role}
              </button>
            ))}
          </div>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleLogin}>

            {/* ID FIELD */}
            <div>
              <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">
                {loginRole === 'student'
                  ? 'Roll Number / PRN'
                  : loginRole === 'faculty'
                  ? 'Faculty ID'
                  : 'Admin Username'}
              </label>

              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full px-5 py-4 border-2 border-amber-100 dark:border-slate-700 rounded-2xl focus:border-amber-400 outline-none bg-white/80 dark:bg-slate-800/80 font-bold"
                placeholder={
                  loginRole === 'student'
                    ? 'Enter Roll Number'
                    : loginRole === 'faculty'
                    ? 'Enter Faculty ID'
                    : 'Enter Admin Username'
                }
              />
            </div>

            {/* PASSWORD FIELD WITH EYE */}
            <div className="relative">
              <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">
                Password
              </label>

              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 pr-12 border-2 border-amber-100 dark:border-slate-700 rounded-2xl focus:border-amber-400 outline-none bg-white/80 dark:bg-slate-800/80 font-bold"
                placeholder="Enter password"
              />

              {/* 👁️ */}
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-[50px] cursor-pointer text-lg"
              >
                {showPass ? '🙈' : '👁️'}
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center text-sm font-bold text-amber-700 dark:text-amber-400 gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <span className="text-sm font-black text-orange-600 cursor-pointer">
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              className="btn-shimmer w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-black py-4 rounded-2xl hover-lift shadow-neon-amber mt-2"
            >
              🔐 Sign In as {loginRole.charAt(0).toUpperCase() + loginRole.slice(1)}
            </button>
          </form>

          {/* ✅ DYNAMIC TEXT */}
          <div className="mt-7 pt-6 border-t border-amber-100 dark:border-slate-700 text-center">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
              {loginRole === 'student'
                ? "Don't have a student account?"
                : loginRole === 'faculty'
                ? "Faculty not registered?"
                : "Admin access required?"}{' '}
              <button
                onClick={() => navigate('/register')}
                className="font-black text-amber-600 hover:text-orange-600"
              >
                Register here →
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}