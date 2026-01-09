
import React from 'react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass rounded-[3rem] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-20 bg-white/5 border-r border-white/5">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                    Let's build <br/> something <span className="gradient-text">great</span>.
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-md">
                    I'm currently seeking internship opportunities where I can apply my Python and Web development skills to real-world problems.
                </p>
                
                <div className="space-y-6">
                    <a href={`mailto:${RESUME_DATA.email}`} className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase">Email Me</p>
                            <p className="text-xl font-bold">{RESUME_DATA.email}</p>
                        </div>
                    </a>
                    <a href={`tel:${RESUME_DATA.phone}`} className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase">Call Me</p>
                            <p className="text-xl font-bold">{RESUME_DATA.phone}</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="p-10 md:p-20 flex flex-col justify-center bg-indigo-600/[0.03]">
                <h3 className="text-2xl font-bold mb-10">Social Connections</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a href={`https://${RESUME_DATA.github}`} target="_blank" className="p-8 glass rounded-3xl text-center hover:scale-105 transition-all">
                        <i className="fa-brands fa-github text-4xl mb-4 text-white"></i>
                        <p className="font-bold">GitHub</p>
                        <p className="text-xs text-slate-500 mt-2">Check my repos</p>
                    </a>
                    <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" className="p-8 glass rounded-3xl text-center hover:scale-105 transition-all">
                        <i className="fa-brands fa-linkedin text-4xl mb-4 text-indigo-400"></i>
                        <p className="font-bold">LinkedIn</p>
                        <p className="text-xs text-slate-500 mt-2">Connect professionaly</p>
                    </a>
                </div>
                
                <div className="mt-12 p-8 glass rounded-3xl border-dashed border-white/20 text-center">
                    <p className="text-slate-400 italic">"Technology is best when it brings people together."</p>
                </div>
            </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. Built with React, Tailwind, and Gemini AI.</p>
      </footer>
    </section>
  );
};

export default Contact;
