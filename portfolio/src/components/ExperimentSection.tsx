import React from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Academic & Development Pathway</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        Research & Experience Timeline
                    </h2>
                </div>

                <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
                    {EXPERIENCES.map((exp, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>

                            <div className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all shadow-xl">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                    <h3 className="text-lg font-bold text-white">
                                        {exp.role}
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                                        <Calendar className="w-3 h-3" />
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                                    <span className="text-slate-300 font-semibold">{exp.organization}</span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3 text-slate-500" />
                                        {exp.location}
                                    </span>
                                </div>

                                <ul className="space-y-2 mb-4 text-sm text-slate-300">
                                    {exp.description.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▹</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                                    {exp.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-surfaceLight text-slate-400 border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};