import React from 'react';
import { Cpu, Binary, CheckCircle2 } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
            <Binary className="w-3.5 h-3.5" />
            <span>Core Competencies & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Neural & Computational Toolchain
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Systemic expertise across deep learning frameworks, algorithmic complexity, NLP pipelines, and cloud environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white font-mono">
                  {group.category}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                {group.description}
              </p>

              <div className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          {skill.highlight}
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-surfaceLight rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
