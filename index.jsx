import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Page imports
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import StudentPortal from './pages/StudentPortal';
import FacultyPortal from './pages/FacultyPortal';
import AdminPortal from './pages/AdminPortal';
import ResultVerification from './pages/Verify';
import CourseCatalog from './pages/Courses';
import AcademicCalendar from './pages/Timeline';
import Announcements from './pages/Announcements';

const SmoothLoader = () => (
  <div className="fixed inset-0 z-[9999] bg-white dark:bg-slate-950 pt- flex flex-col items-center justify-center perspective-1000">
    <div className="relative transform-gpu transition-transform duration-1000 scale-125">
      <div className="w-32 h-32 border-8 border-amber-500/10 border-t-amber-600 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center animate-float-3d">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-900 rounded-2xl shadow-neon-amber rotate-45"></div>
      </div>
    </div>
    <h2 className="mt-12 text-2xl font-black tracking-[0.5em] text-amber-900 dark:text-amber-100 uppercase animate-pulse text-3d-gold">SRMS Portal</h2>
  </div>
);

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/verify', label: 'Verify' },
    { to: '/courses', label: 'Courses' },
    { to: '/calendar', label: 'Timeline' },
    { to: '/announcements', label: 'Updates' },
    { to: '/about', label: 'About' },
  ];

  if (loading) return <SmoothLoader />;

  return (
    <div className={`min-h-screen font-sans selection:bg-emerald-200 selection:text-amber-900 flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 perspective-1000`}>
      {/* Advanced Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <div className="glass-card bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[2rem] px-6 py-4 border border-white/20 dark:border-slate-800 shadow-2xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-lg transform group-hover:rotate-12 transition duration-500">
              SR
            </div>
            <span className="font-black text-2xl tracking-tighter dark:text-white hidden sm:block">
              SRMS<span className="text-amber-500"></span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-2 px-6 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 ${currentPath === link.to ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-emerald-400 shadow-md' : 'text-slate-500 hover:text-amber-600 dark:hover:text-emerald-400'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xl hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors text-slate-700 dark:text-slate-300"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <div className="hidden md:flex gap-2">
              <Link to="/login" className="px-6 py-3 font-black text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors">Login</Link>
              <Link to="/register" className="px-6 py-3 bg-amber-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-700 shadow-lg shadow-amber-600/20 active:scale-95 transition-all">Register</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`h-1 w-full bg-slate-900 dark:bg-white rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-1 w-full bg-amber-500 rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-1 w-full bg-slate-900 dark:bg-white rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden absolute top-24 left-0 w-full glass-card bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-3xl transform transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="p-4 rounded-2xl font-black text-sm uppercase tracking-widest bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-amber-900/20 text-slate-900 dark:text-white"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-slate-100 dark:border-slate-800 my-2" />
            <div className="grid grid-cols-2 gap-4">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="p-4 rounded-2xl font-bold bg-slate-100 dark:bg-slate-800 text-center uppercase tracking-widest text-xs">Login</Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)} className="p-4 rounded-2xl font-bold bg-amber-600 text-white text-center uppercase tracking-widest text-xs">Register</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-8">
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/student" element={<StudentPortal />} />
            <Route path="/faculty" element={<FacultyPortal />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="/verify" element={<ResultVerification />} />
            <Route path="/courses" element={<CourseCatalog />} />
            <Route path="/calendar" element={<AcademicCalendar />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b132b] text-emerald-200 py-12 border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center font-black text-white text-lg shadow-neon-brown">SR</span>
              <span className="text-2xl font-black tracking-tighter text-white">SRMS<span className="text-amber-500"></span></span>
            </Link>
            <p className="text-sm font-medium text-emerald-200/60 max-w-xs">
              &copy; {new Date().getFullYear()} Student Result Management System.
              All institutions registered under Central University Board.
            </p>

            <Link to="https://mitsgwalior.ac.in/" className="flex items-center gap-2">
              <span className="w-25 h-10 rounded-xl bg-orange-600 flex items-center justify-center font-black text-white text-lg shadow-neon-brown">MITS</span>
              <span className="text-2xl font-black tracking-tighter text-white">Madhav Institute of Technology and Science <span className="text-amber-500"></span></span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-black uppercase tracking-widest">
            <Link to="/about" className="hover:text-orange-400 transition">About</Link>
            <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
            <a href="#" className="hover:text-orange-400 transition">Privacy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms</a>
          </div>

          <div className="text-center md:text-right perspective-1000">
            <p className="text-sm font-white text-emerald-200/40 uppercase tracking-widest mb-2 animate-pulse"> <b style={{ color: "white" }}>Developed By</b></p>
            <h4 className="text-3xl font-black text-white group cursor-default animate-float-3d">
              <span className="inline-block border-2 border-amber-700 text-white px-6 py-2 rounded-2xl shadow-[0_0_20px_rgba(120,53,15,0.6)]">Anurag Singh Jadoun <br /> Aditya Raj Sahu
              </span>
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
