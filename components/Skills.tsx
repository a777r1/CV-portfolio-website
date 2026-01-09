
import React from 'react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-indigo-400">Toolkit</span></h2>
        <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.skills.map((category, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl hover:border-white/20 transition-colors group">
            <h3 className="text-lg font-bold text-slate-400 mb-6 group-hover:text-white transition-colors">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-4 py-2 bg-indigo-500/10 text-indigo-300 text-sm font-medium rounded-xl border border-indigo-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
