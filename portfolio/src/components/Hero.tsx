import React from 'react';
import { ArrowRight, Brain, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen pt-32 pb-20 flex items-center relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                            <span>{PERSONAL_INFO.status}</span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                Engineering <br />
                                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                                    Neural Intelligence
                                </span> <br />
                                & NLP Architectures.
                            </h1>
                            <p className="text-slate-300 font-mono text-sm sm:text-base pt-2">
                                {PERSONAL_INFO.specialization}
                            </p>
                        </div>

                        <p className="text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
                            {PERSONAL_INFO.bio}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs sm:text-sm font-mono flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                            >
                                <span>Inspect Models</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#attention-demo"
                                className="px-6 py-3 rounded-xl bg-surfaceLight/80 hover:bg-surfaceLight border border-white/10 hover:border-cyan-500/50 text-slate-200 text-xs sm:text-sm font-mono flex items-center gap-2 transition-all"
                            >
                                <Brain className="w-4 h-4 text-cyan-400" />
                                <span>Attention Playground</span>
                            </a>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                            {PERSONAL_INFO.metricsSummary.map((item, idx) => (
                                <div key={idx} className="p-3 bg-surface/60 border border-white/5 rounded-xl">
                                    <div className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">{item.label}</div>
                                    <div className="text-lg font-bold text-white font-mono mt-0.5">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="bg-surfaceLight/80 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    <span className="text-xs font-mono text-slate-400 ml-2">torch_runtime.py</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                                    <Activity className="w-3 h-3 animate-spin" />
                                    <span>CUDA:0</span>
                                </div>
                            </div>

                            <div className="p-5 font-mono text-xs space-y-2.5 text-slate-300">
                                <div className="text-slate-500"># Model Architecture Specification</div>
                                <div>
                                    <span className="text-purple-400">class</span> <span className="text-yellow-300">TransformerBlock</span>(<span className="text-cyan-400">nn.Module</span>):
                                </div>
                                <div className="pl-4 space-y-1 text-slate-400">
                                    <div>
                                        <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self, d_model=512, heads=12):
                                    </div>
                                    <div className="pl-4">
                                        self.mha = <span className="text-cyan-400">MultiHeadAttention</span>(d_model, heads)
                                    </div>
                                    <div className="pl-4">
                                        self.norm1 = <span className="text-cyan-400">LayerNorm</span>(d_model)
                                    </div>
                                    <div className="pl-4">
                                        self.mlp = <span className="text-cyan-400">FeedForwardGELU</span>(d_model, 2048)
                                    </div>
                                </div>

                                <div className="pt-2 text-slate-500"># Forward Pass Pipeline</div>
                                <div className="pl-4 space-y-1 text-slate-400">
                                    <div>
                                        <span className="text-purple-400">def</span> <span className="text-blue-400">forward</span>(self, x, mask=None):
                                    </div>
                                    <div className="pl-4">
                                        attn, weights = self.mha(x, x, x, mask)
                                    </div>
                                    <div className="pl-4">
                                        x = self.norm1(x + attn)
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-purple-400">return</span> x + self.mlp(x)
                                    </div>
                                </div>

                                <div className="p-3 bg-background/80 rounded-lg border border-emerald-500/20 mt-4 text-[11px] space-y-1 text-emerald-400">
                                    <div className="flex items-center justify-between">
                                        <span>Loss: 0.0124</span>
                                        <span>Validation Acc: 98.6%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                                        <div className="bg-emerald-400 h-full w-[98.6%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};