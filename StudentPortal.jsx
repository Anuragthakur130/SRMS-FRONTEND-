import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentPortal() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-[90vh] px-4 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-[160px] animate-blob" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400/8 rounded-full blur-[140px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-[10px] font-black tracking-widest text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 rounded-full border border-emerald-300/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE SESSION
            </div>
            <h2 className="text-3xl font-black text-amber-900 dark:text-amber-100 border-b-4 border-amber-500 pb-2">Student Dashboard</h2>
          </div>
          <button onClick={() => navigate('/login')} className="btn-shimmer px-8 py-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-black rounded-2xl hover-lift transition-all duration-300 border border-orange-200/50 text-sm uppercase tracking-widest shadow-sm w-full sm:w-auto">
            Logout →
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="glass gradient-border p-8 rounded-[2.5rem] shadow-xl h-max hover-lift animate-card-enter tilt-3d">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-emerald-200 dark:from-amber-800 dark:to-emerald-800 text-amber-700 rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-5 shadow-xl animate-float-3d">
              JD
            </div>
            <h3 className="text-2xl font-black text-center text-amber-900 dark:text-amber-100 mb-1">John Doe</h3>
            <p className="text-center text-slate-400 mb-6 font-bold text-sm tracking-wide">Roll No: 2024BTECS001</p>

            <div className="space-y-3 bg-slate-50/80 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              {[
                { label: 'Course', value: 'B.Tech CS' },
                { label: 'Semester', value: '6th Sem' },
                { label: 'Overall CGPA', value: '8.94', highlight: true },
              ].map((item, i) => (
                <div key={i} className={`flex justify-between items-center ${i < 2 ? 'border-b border-slate-200 dark:border-slate-700 pb-3' : 'pt-1'} group`}>
                  <span className="text-slate-500 dark:text-slate-400 font-bold text-sm">{item.label}</span>
                  <span className={`font-black text-sm ${item.highlight ? 'text-2xl text-gold-shimmer' : 'text-amber-900 dark:text-amber-100'}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results Table */}
          <div className="lg:col-span-2 glass rounded-[2.5rem] shadow-xl overflow-hidden animate-card-enter animation-delay-200 hover-lift">
            <div className="bg-gradient-to-r from-amber-800 to-amber-900 px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h3 className="text-xl font-black text-white">📊 Recent Results (6th Semester)</h3>
              <button className="btn-shimmer px-6 py-2.5 text-sm bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-black shadow-lg transition-all duration-300 w-full sm:w-auto">
                ⬇ Download Grade Card
              </button>
            </div>

            <div className="overflow-x-auto p-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-300">
                    <th className="p-4 font-black text-xs uppercase tracking-widest rounded-l-xl">Code</th>
                    <th className="p-4 font-black text-xs uppercase tracking-widest">Subject Name</th>
                    <th className="p-4 font-black text-xs uppercase tracking-widest text-center">Credits</th>
                    <th className="p-4 font-black text-xs uppercase tracking-widest text-center">Grade</th>
                    <th className="p-4 font-black text-xs uppercase tracking-widest text-center rounded-r-xl">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'CS301', subject: 'Operating Systems', credits: 4, grade: 'A+', points: 10, color: 'text-green-600 dark:text-green-400' },
                    { code: 'CS302', subject: 'Computer Networks', credits: 4, grade: 'A', points: 9, color: 'text-green-600 dark:text-green-400' },
                    { code: 'CS303', subject: 'Software Engineering', credits: 3, grade: 'B+', points: 8, color: 'text-amber-600 dark:text-amber-400' },
                    { code: 'CS304', subject: 'Web Technologies', credits: 3, grade: 'A+', points: 10, color: 'text-green-600 dark:text-green-400' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all duration-200 group">
                      <td className="p-4 font-black text-slate-500 dark:text-slate-400 text-sm">{row.code}</td>
                      <td className="p-4 font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">{row.subject}</td>
                      <td className="p-4 text-center font-bold text-slate-600 dark:text-slate-400">{row.credits}</td>
                      <td className={`p-4 text-center font-black text-lg ${row.color}`}>{row.grade}</td>
                      <td className="p-4 text-center font-bold text-slate-600 dark:text-slate-400">{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
