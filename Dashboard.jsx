import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 transition-colors duration-500">

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-amber-500/25 rounded-full blur-[180px] animate-blob" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-orange-500/25 rounded-full blur-[180px] animate-blob animation-delay-2000" />
          <div className="absolute top-[25%] right-[5%] w-[35%] h-[35%] bg-emerald-400/15 rounded-full blur-[150px] animate-blob animation-delay-4000" />
          <div className="absolute bottom-[20%] left-[5%] w-[25%] h-[25%] bg-amber-300/20 rounded-full blur-[120px] animate-blob animation-delay-200" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{ backgroundImage: 'linear-gradient(#78350f 1px,transparent 1px),linear-gradient(to right,#78350f 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="container mx-auto px-6 relative z-10 text-center perspective-1000">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-black tracking-widest text-amber-700 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/30 border border-amber-300/50 dark:border-amber-700/30 rounded-full backdrop-blur-sm animate-fade-in-up shadow-sm">
            <span className="glow-dot w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Platform for Academic Excellence
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9] animate-slide-up">
            Manage Results <br />
            <span className="text-gold-shimmer">With Intelligence</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto font-medium animate-fade-in animation-delay-400">
            The next generation of Student Result Management. Secure, fast, and completely automated for institutions of the future.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up animation-delay-400">
            <button
              onClick={() => navigate('/login')}
              className="btn-shimmer px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-2xl font-black hover-lift shadow-neon-amber transform active:scale-95 text-lg transition-all duration-300"
            >
              Get Started Now ✦
            </button>
            <button
              onClick={() => navigate('/verify')}
              className="btn-shimmer px-10 py-5 text-orange-600 dark:text-orange-400 border-2 border-orange-400/40 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl font-black hover-lift shadow-neon-brown transform active:scale-95 text-lg transition-all duration-300"
            >
              Verify Credentials →
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        {/* Top shimmer line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: '15k+', label: 'Total Students', color: 'emerald', icon: '🎓' },
              { val: '800+', label: 'Faculty Members', color: 'orange', icon: '👨‍🏫' },
              { val: '120+', label: 'Partner Schools', color: 'emerald', icon: '🏫' },
              { val: '99.9%', label: 'Uptime Reliability', color: 'orange', icon: '⚡' }
            ].map((stat, i) => (
              <div key={i}
                className="stat-card text-center group cursor-default animate-fade-in-up hover-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className={`text-5xl md:text-6xl font-black text-${stat.color}-600 dark:text-${stat.color}-400 mb-2 transition-all group-hover:scale-105 duration-500`}>
                  {stat.val}
                </div>
                <div className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            One Portal. <span className="text-amber-600 italic">Everything Integrated.</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
            Distinct modules designed specifically for every stakeholder in the ecosystem.
          </p>
          <div className="section-divider mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-1000">
          {[
            { title: "Student Access", desc: "View individual results, track performance history, and download official grade cards instantly.", icon: "🎓", color: "emerald", link: "/student" },
            { title: "Faculty Portal", desc: "Seamless marks entry system, evaluation tracking, and department-wise analytics for professors.", icon: "👨‍🏫", color: "orange", link: "/faculty" },
            { title: "Admin Center", desc: "Total system control, user management, audit logs, and institutional-wide result publishing.", icon: "⚙️", color: "emerald", link: "/admin" }
          ].map((feat, idx) => (
            <div key={idx}
              className="group cursor-pointer animate-card-enter"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className={`gradient-border h-full glass p-10 rounded-[3rem] shadow-2xl tilt-3d hover-glow-${feat.color} transition-all duration-500 relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-40 h-40 bg-${feat.color}-500/8 rounded-full -mr-20 -mt-20 transition-all duration-700 group-hover:scale-150 group-hover:bg-${feat.color}-400/15`} />
                <div className="text-7xl mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 origin-left animate-magnetic-float">{feat.icon}</div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight">{feat.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">{feat.desc}</p>
                <div className="flex items-center gap-2 text-amber-600 dark:text-emerald-400 font-black text-sm uppercase tracking-widest link-underline">
                  View Portal <span className="text-xl transform group-hover:translate-x-3 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Security Banner ── */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-amber-900/40 skew-x-12 transform translate-x-32" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(#f59e0b 1px,transparent 1px),linear-gradient(to right,#f59e0b 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
              Advanced Security Meets <span className="text-gold-shimmer">Institutional Integrity</span>
            </h2>
            <p className="text-xl text-emerald-200/80 mb-10 font-medium leading-relaxed">
              Our platform uses decentralized storage and end-to-end encryption to ensure student data remains immutable and tamper-proof. Trusted by over 500+ universities worldwide.
            </p>
            <div className="flex items-center gap-8">
              <div className="flex flex-col hover-lift cursor-default p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-4xl font-black text-orange-400 tracking-tighter">AES-256</span>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-300">Encryption Level</span>
              </div>
              <div className="w-px h-12 bg-emerald-800" />
              <div className="flex flex-col hover-lift cursor-default p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-4xl font-black text-emerald-400 tracking-tighter">SOC2</span>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-300">Compliance Ready</span>
              </div>
            </div>
          </div>

          <div className="glass-card bg-white/10 p-2 rounded-[2.5rem] shadow-2xl animate-fade-in-up animation-delay-200 hover-lift">
            <div className="bg-amber-900/50 backdrop-blur-2xl rounded-[2.3rem] p-12 border border-emerald-400/20">
              <div className="space-y-8">
                {[
                  { icon: '🚀', t: 'Auto-Scaling Infrastructure', d: 'Global load balancers ensure sub-second response times during peak result declarations.' },
                  { icon: '📱', t: 'Native Mobile Experience', d: 'Seamlessly transition between desktop and mobile with our high-fidelity responsive engines.' },
                  { icon: '🛡️', t: 'Data Privacy First', d: 'Fully compliant with international student data protection regulations (GDPR/FERPA).' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 group-hover:text-amber-300 transition-colors duration-300">{item.t}</h4>
                      <p className="text-emerald-200/60 font-medium text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-32 container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Common <span className="text-orange-500 underline decoration-8 underline-offset-4">Questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "How do I check my semester result?", a: "Navigate to the Student Portal module and log in using your Roll Number. Your latest results will be showcased on the dashboard main view." },
            { q: "Can faculty members edit results after publishing?", a: "No, once a result is finalized and signed digitally by the controller, it cannot be modified without higher administrative override." },
            { q: "Is the public verification link secure?", a: "Yes, our verification link uses unique cryptographic hashes to validate public records without exposing private student information." }
          ].map((item, i) => (
            <div key={i}
              className="gradient-border glass p-8 rounded-[2rem] hover:border-amber-500/30 transition-all duration-500 cursor-pointer group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 flex justify-between items-center">
                {item.q}
                <span className="text-amber-500 group-hover:rotate-45 transition-transform duration-300 text-2xl">+</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
