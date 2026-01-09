
import React from 'react';
import { RESUME_DATA } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-indigo-600/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning & <span className="text-indigo-400">Certs</span></h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <div key={idx} className="glass p-6 rounded-[1.5rem] flex flex-col justify-between group hover:border-white/20 transition-all">
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xl text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <h3 className="font-bold text-lg mb-2 leading-tight">{cert.title}</h3>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-4">
                Achieved: {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
