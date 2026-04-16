import React from 'react';

export default function Contact() {
  return (
    <div className="relative min-h-[90vh] px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute top-[-5%] right-[15%] w-80 h-80 bg-amber-400/15 rounded-full blur-[160px] animate-blob" />
      <div className="absolute bottom-[-5%] left-[15%] w-72 h-72 bg-orange-400/10 rounded-full blur-[140px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left info */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-300/40">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            SUPPORT AVAILABLE 24/7
          </div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Get in <span className="text-gold-shimmer">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed">
            Have questions or facing issues with the portal? Our specialized support team is here to help you 24/7.
          </p>

          <div className="space-y-6">
            {[
              { icon: '📍', label: 'Main Secretariat', desc: 'MITS-DU University Campus, Gwalior, India', color: 'amber' },
              { icon: '📧', label: 'Email Support', desc: 'Mits.support@srmsportal.com', color: 'orange' },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-5 p-5 glass rounded-2xl hover-lift transition-all duration-300 group cursor-default animate-fade-in-up`} style={{ animationDelay: `${i * 150}ms` }}>
                <div className={`w-14 h-14 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-amber-900 dark:text-amber-100 text-base">{item.label}</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="glass gradient-border p-10 rounded-[3rem] shadow-2xl animate-card-enter hover-lift">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              {['First Name', 'Last Name'].map((label) => (
                <div key={label}>
                  <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">{label}</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border-2 border-transparent focus:border-amber-400 outline-none transition-all duration-300 font-bold dark:text-white" placeholder={label} />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">Email</label>
              <input type="email" className="w-full px-5 py-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border-2 border-transparent focus:border-amber-400 outline-none transition-all duration-300 font-bold dark:text-white" placeholder="anurag@mitsuniversity.edu" />
            </div>
            <div>
              <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-2 uppercase tracking-widest">Message</label>
              <textarea className="w-full px-5 py-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border-2 border-transparent focus:border-amber-400 outline-none transition-all duration-300 h-32 font-bold dark:text-white resize-none" placeholder="How can we help?" />
            </div>
            <button className="btn-shimmer w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-black py-5 rounded-2xl hover-lift shadow-neon-amber text-sm uppercase tracking-widest transition-all duration-300">
              🚀 Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
