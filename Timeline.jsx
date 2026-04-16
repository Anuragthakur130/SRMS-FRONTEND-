import React from 'react';

export default function AcademicCalendar() {
  const events = [
    { date: 'Apr 10', month: '2026', title: 'Mid-Sem Results Declaration', type: 'EXAM', color: 'orange', icon: '📋' },
    { date: 'Apr 25', month: '2026', title: 'Annual Tech Fest "Innovate"', type: 'EVENT', color: 'emerald', icon: '🎯' },
    { date: 'May 05', month: '2026', title: 'Final Semester Registration', type: 'ACADEMIC', color: 'emerald', icon: '📚' },
    { date: 'May 15', month: '2026', title: 'Graduation Ceremony 2026', type: 'EVENT', color: 'orange', icon: '🎓' },
    { date: 'Jun 01', month: '2026', title: 'Summer Internship Program Start', type: 'PLACEMENTS', color: 'emerald', icon: '💼' },
  ];

  return (
    <div className="relative min-h-[90vh] px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute top-[10%] right-[5%] w-80 h-80 bg-amber-400/10 rounded-full blur-[160px] animate-blob" />
      <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-orange-400/10 rounded-full blur-[140px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 rounded-full border border-orange-300/40">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            {events.length} UPCOMING EVENTS
          </div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Academic <span className="text-gold-shimmer">Timeline</span>
          </h2>
          <p className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-sm">Stay Updated with the University Schedule</p>
          <div className="section-divider mt-6" />
        </div>

        {/* Timeline events */}
        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="flex gap-6 group animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Date bubble */}
              <div className="hidden md:flex flex-col items-center">
                <div className={`w-20 h-20 glass rounded-[1.5rem] shadow-xl flex flex-col items-center justify-center border-t-4 border-${event.color}-500 group-hover:scale-110 transition-all duration-500 group-hover:shadow-neon-amber`}>
                  <span className="text-xl font-black text-amber-900 dark:text-amber-100">{event.date.split(' ')[1]}</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{event.date.split(' ')[0]}</span>
                </div>
                {i < events.length - 1 && (
                  <div className="flex-1 w-0.5 bg-gradient-to-b from-amber-300/60 to-transparent mt-3 mb-3 min-h-[24px]" />
                )}
              </div>

              {/* Event card */}
              <div className={`flex-1 gradient-border glass p-6 md:p-8 rounded-[2rem] shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 hover-glow-${event.color}`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{event.icon}</span>
                    <span className={`px-3 py-1 bg-${event.color}-100 dark:bg-${event.color}-900/30 text-${event.color}-700 dark:text-${event.color}-400 rounded-full font-black text-[10px] tracking-widest uppercase border border-${event.color}-200/50`}>
                      {event.type}
                    </span>
                  </div>
                  <span className="md:hidden font-black text-orange-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300">{event.title}</h3>
                <div className="flex items-center text-slate-400 dark:text-slate-500 font-bold text-sm gap-2 mt-3">
                  <span>🕙</span>
                  <time>10:00 AM onwards</time>
                  <span>•</span>
                  <span>🏛️ Main Auditorium</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
