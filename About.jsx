import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-[90vh] px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/10" />
      <div className="absolute top-[5%] left-[10%] w-80 h-80 bg-amber-400/15 rounded-full blur-[160px] animate-blob" />
      <div className="absolute bottom-[5%] right-[10%] w-72 h-72 bg-orange-400/10 rounded-full blur-[140px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-300/40">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            OUR STORY
          </div>
          <h2 className="text-6xl font-black mb-8 tracking-tight">
            About <span className="text-gold-shimmer">SRMS</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-3xl mx-auto">
            The Student Result Management System (SRMS) is a modern, automated platform designed to bridge the gap between students, faculty, and administration. Our mission is to provide transparent, real-time access to academic performance while simplifying the evaluation process.
          </p>
          <div className="section-divider mt-10" />
        </div>

        {/* Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {[
            { icon: '🎯', title: 'Our Vision', color: 'emerald', desc: 'To empower every student with data-driven insights into their academic journey, fostering a culture of excellence and continuous improvement through transparency.' },
            { icon: '🚀', title: 'Modern Tech', color: 'orange', desc: 'Built using React, Tailwind CSS, and cutting-edge web technologies to ensure speed, security, and a seamless user experience across all devices.' },
          ].map((card, i) => (
            <div
              key={i}
              className={`gradient-border glass p-10 rounded-[2.5rem] tilt-3d hover-glow-${card.color} animate-card-enter`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="text-5xl mb-6 animate-magnetic-float">{card.icon}</div>
              <h3 className={`text-2xl font-black text-${card.color}-800 dark:text-${card.color}-400 mb-4`}>{card.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: '2019', label: 'Founded', icon: '📅' },
            { val: '15k+', label: 'Students', icon: '🎓' },
            { val: '500+', label: 'Universities', icon: '🏫' },
            { val: '99.9%', label: 'Uptime', icon: '⚡' },
          ].map((s, i) => (
            <div key={i} className="stat-card text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl font-black text-amber-600 dark:text-amber-400">{s.val}</div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Developer Section */}
        <div className="mt-20 animate-fade-in-up">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 rounded-full border border-orange-300/40">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              DEVELOPERS
            </div>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white">
              Meet the <span className="text-gold-shimmer">Creators</span>
            </h3>
          </div>

        {/*DEVELOPER SECTION*/}

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {[
    {
      name: 'Anurag Singh Jadoun',
      role: 'Full Stack Web Developer',
      desc: 'Passionate developer focused on building modern, secure and user-friendly web applications. Played a key role in designing and developing the SRMS platform.'
    },
    {
      name: 'Aditya Raj Sahu',
      role: 'Frontend Developer',
      desc: 'Creative frontend developer specializing in responsive UI/UX design using React and Tailwind CSS, contributing to the visual excellence of SRMS.'
    }
  ].map((dev, i) => (
    <div
      key={i}
      className="gradient-border glass p-8 rounded-[2rem] hover-lift animate-card-enter"
      style={{ animationDelay: `${i * 200}ms` }}
    >

      {/* IMAGE SECTION */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
        <div
          style={{
            width: '207px',
            height: '207px',
            borderRadius: '50%',
            padding: '4px',
            background: 'conic-gradient(from 180deg, #f59e0b, #f97316, #fb923c, #f59e0b)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.25), 0 0 25px rgba(251,191,36,0.5)',
            transition: '0.4s ease'
          }}
        >
          <img
            src={
              dev.name === 'Anurag Singh Jadoun'
                ? "./pages/image/Anurag1.jpeg"
                : '/pages/image/Aditya.jpeg'
            }
            alt={dev.name}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid rgba(255,255,255,0.7)',
              transition: '0.4s ease',
              filter: 'contrast(1.05) saturate(1.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.filter = 'brightness(1.1) saturate(1.2)';
              e.currentTarget.parentElement.style.boxShadow =
                '0 20px 45px rgba(0,0,0,0.35), 0 0 35px rgba(251,191,36,0.7)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'contrast(1.05) saturate(1.1)';
              e.currentTarget.parentElement.style.boxShadow =
                '0 15px 35px rgba(0,0,0,0.25), 0 0 25px rgba(251,191,36,0.5)';
            }}
          />
        </div>
      </div>

      <h4 className="text-2xl font-black text-amber-800 dark:text-amber-400 mb-2">
        {dev.name}
      </h4>
      <p className="text-sm font-bold text-orange-500 mb-4 tracking-widest uppercase">
        {dev.role}
      </p>
      <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
        {dev.desc}
      </p>
    </div>
  ))}
</div>


          
        </div>

      </div>
    </div>
  );
}
