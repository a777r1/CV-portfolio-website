
import React from 'react';
import { RESUME_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Featured <span className="text-indigo-400">Projects</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Selected works that showcase my programming fundamentals and passion for building functional tools.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {RESUME_DATA.projects.map((project, idx) => (
                <div key={idx} className="glass overflow-hidden rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-all group flex flex-col h-full">
                    <div className="p-8 md:p-12 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-2">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-[10px] font-bold tracking-widest uppercase text-indigo-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {project.link && (
                                <a href={project.link} target="_blank" className="text-xl hover:text-indigo-400 transition-colors">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            )}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-indigo-300 transition-colors">
                            {project.title}
                        </h3>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {project.description.map((point, pIdx) => (
                                <li key={pIdx} className="text-slate-400 flex items-start gap-3 text-sm md:text-base">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <a href={project.link} className="inline-flex items-center text-sm font-bold text-white group-hover:gap-3 gap-2 transition-all">
                            View Project Repo <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
