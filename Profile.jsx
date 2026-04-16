import React from 'react';

export default function Profile() {
  return (
    <div className="relative min-h-[90vh] px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-amber-400/12 rounded-full blur-[160px] animate-blob" />
      <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-orange-400/8 rounded-full blur-[140px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <div className="glass rounded-[3rem] overflow-hidden shadow-2xl shadow-amber-200/20 dark:shadow-amber-900/20 hover-lift">
          {/* Cover */}
          <div className="h-56 bg-gradient-to-r from-amber-700 via-amber-800 to-emerald-900 relative overflow-hidden">
            {/* Animated shimmer overlay */}
            <div className="absolute inset-0 opacity-20 animate-gradient-sweep bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_100%]" />
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(to right,rgba(255,255,255,0.3) 1px,transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Avatar */}
            <div className="absolute -bottom-16 left-12">
              <div className="w-40 h-40 rounded-[2.5rem] bg-white dark:bg-slate-900 p-3 shadow-2xl shadow-black/30">
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-emerald-200 dark:from-amber-800 dark:to-emerald-800 rounded-[2rem] flex items-center justify-center text-5xl font-black text-amber-800 dark:text-amber-200 animate-float-3d shadow-inner">
                  JD
                </div>
              </div>
            </div>
          </div>

          <div className="pt-24 pb-16 px-8 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
              <div>
                <h2 className="text-5xl font-black text-amber-900 dark:text-amber-100 mb-3 text-3d-gold">Enter Name</h2>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-4 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full font-black text-xs tracking-widest uppercase border border-amber-200/50 dark:border-amber-700/30">
                    🎓 STUDENT
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-xs">Roll No: BTET24O1030</span>
                </div>
              </div>
              <button className="btn-shimmer px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-2xl font-black hover-lift shadow-neon-amber text-sm uppercase tracking-widest transition-all duration-300">
                ✏️ Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 glass p-10 rounded-[2.5rem] border border-white/60 dark:border-slate-700/40">
              {[
                {
                  title: 'Academic Roadmap', color: 'amber',
                  items: [
                    { label: 'Department', value: 'Computer Science' },
                    { label: 'Batch', value: '2021–2025' },
                    { label: 'Current Sem', value: '6th Semester' },
                  ]
                },
                {
                  title: 'Communication Details', color: 'orange',
                  items: [
                    { label: 'Email', value: 'Enter Email @edu.com' },
                    { label: 'Phone', value: '+91 99001 10022' },
                    { label: 'Location', value: 'Mumbai, MH' },
                  ]
                }
              ].map((section, si) => (
                <div key={si} className="space-y-5">
                  <h4 className={`text-xs font-black text-${section.color}-600 dark:text-${section.color}-400 uppercase tracking-[0.2em]`}>
                    {section.title}
                  </h4>
                  <div className="space-y-4">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="flex justify-between items-center group py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                        <span className="text-slate-500 dark:text-slate-400 font-bold text-sm">{item.label}</span>
                        <span className="font-black text-amber-900 dark:text-amber-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200 text-sm">{item.value}</span>
                      </div>
                    ))}
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
