import React from 'react';

export default function Announcements() {
  const news = [
    { title: 'New Research Grant of $2M Awarded to CS Dept', category: 'RESEARCH', date: '2 hours ago', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80', tag: '🔬' },
    { title: 'Campus to Transition to 100% Green Energy by 2027', category: 'CAMPUS', date: '5 hours ago', img: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&w=600&q=80', tag: '🌿' },
    { title: 'International Student Exchange Program Open', category: 'ADMISSION', date: '1 day ago', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80', tag: '🌍' },
  ];

  return (
    <div className="relative min-h-[90vh] px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-96 bg-amber-400/8 rounded-full blur-[160px] animate-blob" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-300/40">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              LIVE UPDATES
            </div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter underline decoration-amber-500 decoration-8 underline-offset-8">
              Latest Updates
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 font-black text-amber-600 dark:text-amber-400 hover:text-orange-600 transition-all duration-300 hover-lift px-6 py-3 glass rounded-2xl">
            View Archive <span className="text-lg">↗</span>
          </button>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {news.map((item, i) => (
            <div
              key={i}
              className="group animate-card-enter cursor-pointer"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="gradient-border glass rounded-[2.5rem] overflow-hidden shadow-xl hover-lift transition-all duration-500 group-hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Category pill */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2">
                    <span className="text-lg">{item.tag}</span>
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-black font-black text-[10px] rounded-full tracking-widest uppercase shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-1">
                    <span>🕐</span> {item.date}
                  </p>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300 leading-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 text-sm">
                    Stay informed with the latest happenings across the campus and beyond. Our institution continues to lead in academic excellence...
                  </p>
                  <button className="flex items-center gap-2 font-black text-amber-700 dark:text-amber-400 border-b-2 border-amber-300/40 hover:border-orange-500 transition-all duration-300 text-sm link-underline">
                    Read Full Story <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
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
