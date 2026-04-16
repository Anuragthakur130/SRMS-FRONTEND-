import React from 'react';

export default function CourseCatalog() {
  const courses = [
    { id: 'CS', name: 'Computer Science', focus: 'AI & Data Science', icon: '💻', color: 'emerald', glow: 'hover-glow-emerald' },
    { id: 'ME', name: 'Mechanical Eng.', focus: 'Robotics & Thermo', icon: '⚙️', color: 'orange', glow: 'hover-glow-orange' },
    { id: 'AR', name: 'Architecture', focus: 'Designing & Building', icon: '🏗️', color: 'orange', glow: 'hover-glow-orange' },
    { id: 'EE', name: 'Electrical Eng.', focus: 'Power Systems', icon: '⚡', color: 'emerald', glow: 'hover-glow-emerald' },
    { id: 'CV', name: 'Civil Engineering', focus: 'Architecture', icon: '🏛️', color: 'emerald', glow: 'hover-glow-emerald' },
    { id: 'MT', name: 'Management', focus: 'Finance & HR', icon: '🏢', color: 'orange', glow: 'hover-glow-orange' },
  ];

  return (
    <div className="relative min-h-[90vh] px-4 py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-amber-400/10 rounded-full blur-[180px] animate-blob" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-orange-400/10 rounded-full blur-[150px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-300/40">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              {courses.length} PROGRAMS AVAILABLE
            </div>
            <h2 className="text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
              Academic <span className="text-gold-shimmer">Catalog</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-xl">
              Explore our diverse range of engineering and management programs designed for the future.
            </p>
          </div>
          <div className="relative w-full md:w-96 animate-fade-in">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-amber-400 outline-none font-bold dark:text-white transition-all duration-300 dark:placeholder:text-slate-500"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl">🔍</span>
          </div>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {courses.map((course, i) => (
            <div key={i}
              className={`group cursor-pointer animate-card-enter`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`gradient-border relative overflow-hidden rounded-[2.5rem] glass p-10 transition-all duration-500 tilt-3d ${course.glow}`}>
                {/* BG orb */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-${course.color}-100 dark:bg-${course.color}-900/20 rounded-full -mr-18 -mt-18 transition-all duration-700 group-hover:scale-[1.8] group-hover:opacity-70`} />

                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 origin-left animate-magnetic-float">
                    {course.icon}
                  </div>

                  <div className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest text-${course.color}-700 dark:text-${course.color}-400 bg-${course.color}-100 dark:bg-${course.color}-900/30 rounded-full mb-4 border border-${course.color}-200/50`}>
                    {course.id}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{course.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-bold mb-8 uppercase text-xs tracking-widest">{course.focus}</p>

                  <button className={`flex items-center gap-2 text-${course.color}-600 dark:text-${course.color}-400 font-black text-sm group/btn link-underline`}>
                    Explore Details
                    <span className="transform transition-transform duration-300 group-hover/btn:translate-x-3">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
