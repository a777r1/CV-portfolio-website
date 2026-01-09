
import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-4xl w-full text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10 text-indigo-300 text-xs font-semibold tracking-wider uppercase animate-bounce">
          Open to Internships 2025
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
          Hi, I'm <span className="gradient-text">{RESUME_DATA.name.split(' ')[0]}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          {RESUME_DATA.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all transform hover:-translate-y-1">
            View My Work
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/5 transition-all transform hover:-translate-y-1">
            Get In Touch
          </a>
        </div>

        <div className="mt-20 flex justify-center gap-8">
            <a href={`https://${RESUME_DATA.github}`} target="_blank" className="text-2xl text-slate-500 hover:text-white transition-colors">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" className="text-2xl text-slate-500 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={`mailto:${RESUME_DATA.email}`} className="text-2xl text-slate-500 hover:text-white transition-colors">
                <i className="fa-solid fa-envelope"></i>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
