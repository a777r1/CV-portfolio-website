
import React from 'react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic <span className="text-indigo-400">Journey</span></h2>
            <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>
          
          <div className="space-y-8 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="relative pl-12 group">
                <div className="absolute left-[11px] top-1.5 w-[10px] h-[10px] rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 group-hover:scale-125 transition-transform"></div>
                <span className="text-xs font-bold text-indigo-400 mb-2 block">{edu.period}</span>
                <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                <p className="text-slate-300 font-medium">{edu.institution}</p>
                <p className="text-slate-500 text-sm mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Core <span className="text-indigo-400">Strengths</span></h2>
            <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESUME_DATA.strengths.map((strength, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl flex items-start gap-4 hover:bg-white/[0.05] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <i className="fa-solid fa-check"></i>
                </div>
                <p className="text-sm font-medium leading-relaxed">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
