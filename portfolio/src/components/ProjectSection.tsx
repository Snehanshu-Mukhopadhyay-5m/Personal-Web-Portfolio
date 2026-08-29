import React, { useState } from 'react';
import { ExternalLink, Github, Network, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

export const ProjectsSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const categories = ['All', 'NLP', 'Deep Learning', 'Computer Vision', 'MLOps & Systems'];

    const filteredProjects = selectedCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
                            <Network className="w-3.5 h-3.5" />
                            <span>Architectures & Implementations</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                            Featured Neural & ML Projects
                        </h2>
                        <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
                            Custom neural networks, NLP pipelines, and data systems engineered for performance and scalability.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 bg-surface border border-white/10 rounded-xl p-1.5 self-start md:self-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${selectedCategory === cat
                                        ? 'bg-emerald-500 text-black font-semibold shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project: Project) => (
                        <div
                            key={project.id}
                            className="bg-surface/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400">
                                        {project.category}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                                                aria-label="GitHub Repository"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                className="p-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-mono text-slate-400 mt-1">
                                        {project.tagline}
                                    </p>
                                </div>

                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="p-3 bg-background/80 rounded-xl border border-white/5 font-mono text-xs text-slate-400 space-y-1">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <Layers className="w-3 h-3 text-cyan-400" />
                                        <span>Computation Graph</span>
                                    </div>
                                    <div className="text-slate-300 text-[11px] leading-tight">
                                        {project.architecture}
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    {project.metrics.map((m, idx) => (
                                        <div key={idx} className="p-2.5 bg-surfaceLight/50 rounded-lg border border-white/5 text-center">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase">{m.label}</div>
                                            <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">{m.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-white/5">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};