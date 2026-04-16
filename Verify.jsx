import React, { useState } from 'react';

export default function ResultVerification() {
  const [rollNo, setRollNo] = useState('');
  const [result, setResult] = useState(null);

  const handleVerify = (e) => {
  e.preventDefault();

  if (rollNo === 'BTET24O1030') {
    setResult({
      name: 'Anurag Singh Jadoun',
      roll: 'BTET24O1030',
      course: 'B.Tech ECE',
      sem: '5th',
      cgpa: '8.94',
      status: 'AUTHENTICATED'
    });
  } 
  else if (rollNo === 'BTET24O1006') {
    setResult({
      name: 'Aditya Raj Sahu',
      roll: 'BTET24O1006',
      course: 'B.Tech ECE',
      sem: '5th',
      cgpa: '8.7',
      status: 'AUTHENTICATED'
    });
  } 
  else {
    alert('Invalid Roll Number. Please try: BTET24O1030 or BTET24O1006');
  }
};

  
  return (
    <div className="relative min-h-[90vh] px-4 py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50/30 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/20" />
      <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-amber-400/15 rounded-full blur-[160px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-emerald-400/10 rounded-full blur-[140px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-300/40">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            BLOCKCHAIN-VERIFIED RECORDS
          </div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Official <span className="text-gold-shimmer">Verification</span> Portal
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl">
            Validate academic credentials instantly through our secure blockchain-style lookup system.
          </p>
        </div>

        {/* Search card */}
        <div className="w-full max-w-xl glass gradient-border p-10 rounded-[3rem] shadow-2xl mb-12 animate-card-enter hover-lift">
          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label className="block text-xs font-black text-amber-800 dark:text-amber-300 mb-3 uppercase tracking-widest">Student Roll Number / PRN</label>
              <div className="relative group">
                <input
                  type="text"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  className="w-full px-6 py-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 border-2 border-amber-200/50 dark:border-slate-700 focus:border-amber-400 outline-none transition-all duration-300 font-black text-lg tracking-widest dark:text-white"
                  placeholder="E.g. BTXY2XO10XX"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 to-amber-600/5 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>
            <button
              type="submit"
              className="btn-shimmer w-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white font-black py-5 rounded-2xl hover-lift shadow-neon-amber text-lg flex items-center justify-center gap-3 transform active:scale-95 uppercase tracking-widest transition-all duration-300"
            >
              <span>🚀</span> Verify Academic Record
            </button>
          </form>
        </div>

        {/* Result card */}
        {result && (
          <div className="w-full glass-card p-8 rounded-[2.5rem] border-2 border-green-300/60 dark:border-green-800/60 shadow-2xl animate-card-enter relative overflow-hidden">
            {/* Green glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
            <div className="absolute top-0 right-0 p-5">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-black text-xs tracking-widest border border-green-300/50 animate-pulse-ring">✓ VERIFIED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-4">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/40 rounded-[1.5rem] flex items-center justify-center text-3xl font-black text-amber-700 shadow-xl animate-float-3d">
                  JD
                </div>
                <div>
                  <h3 className="text-2xl font-black text-amber-900 dark:text-amber-100">{result.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-sm tracking-widest">{result.roll}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Course', value: result.course },
                  { label: 'Semester', value: result.sem + ' Sem' },
                  { label: 'Overall CGPA', value: result.cgpa, highlight: true },
                  { label: 'Status', value: result.status, green: true }
                ].map((item, i) => (
                  <div key={i} className="stat-card text-center hover-lift">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className={`font-black text-sm ${item.highlight ? 'text-2xl text-green-600 dark:text-green-400' : item.green ? 'text-green-600 dark:text-green-400' : 'text-amber-900 dark:text-amber-100'}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
