import React, { useState } from 'react';
import { ArrowRight, Brain, Activity, FileCode } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Add your custom Python files here:
const CODE_SNIPPETS = [
    {
        filename: "transformer_model.py",
        device: "CUDA:0",
        status: "Loss: 0.0124 | Acc: 98.6%",
        code: (
            <>
                <div className="text-slate-500"># Custom Transformer Block</div>
                <div>
                    <span className="text-purple-400">import</span> <span className="text-cyan-400">torch</span>
                    <br />
                    <span className="text-purple-400">import</span> <span className="text-cyan-400">torch.nn</span> <span className="text-purple-400">as</span> <span className="text-slate-300">nn</span>
                </div>
                <div className="pt-2">
                    <span className="text-purple-400">class</span> <span className="text-yellow-300">AttentionBlock</span>(<span className="text-cyan-400">nn.Module</span>):
                </div>
                <div className="pl-4 space-y-1 text-slate-400">
                    <div>
                        <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self, d_model=512, n_heads=8):
                    </div>
                    <div className="pl-4">super().__init__()</div>
                    <div className="pl-4">self.qkv_proj = <span className="text-cyan-400">nn.Linear</span>(d_model, d_model * 3)</div>
                    <div className="pl-4">self.out_proj = <span className="text-cyan-400">nn.Linear</span>(d_model, d_model)</div>
                </div>
                <div className="pl-4 pt-2 space-y-1 text-slate-400">
                    <div>
                        <span className="text-purple-400">def</span> <span className="text-blue-400">forward</span>(self, x):
                    </div>
                    <div className="pl-4">q, k, v = self.qkv_proj(x).chunk(3, dim=-1)</div>
                    <div className="pl-4">scores = (q @ k.transpose(-2, -1)) / (x.size(-1) ** 0.5)</div>
                    <div className="pl-4"><span className="text-purple-400">return</span> self.out_proj(torch.softmax(scores, dim=-1) @ v)</div>
                </div>
            </>
        )
    },
    {
        filename: "train_pipeline.py",
        device: "RTX 4090",
        status: "Epoch 42/100 | LR: 1e-4",
        code: (
            <>
                <div className="text-slate-500"># Model Training & Optimization Loop</div>
                <div>
                    <span className="text-purple-400">optimizer</span> = <span className="text-cyan-400">torch.optim.AdamW</span>(model.parameters(), lr=1e-4)
                </div>
                <div className="pt-2">
                    <span className="text-purple-400">for</span> epoch <span className="text-purple-400">in</span> range(epochs):
                </div>
                <div className="pl-4 space-y-1 text-slate-400">
                    <div>optimizer.zero_grad()</div>
                    <div>loss = criterion(model(inputs), targets)</div>
                    <div>loss.backward()</div>
                    <div>torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)</div>
                    <div>optimizer.step()</div>
                </div>
            </>
        )
    }
];

export const Hero: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const currentSnippet = CODE_SNIPPETS[activeTab];

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
                            {/* Window Header with Clickable Tabs */}
                            <div className="bg-surfaceLight/80 px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>

                                    <div className="flex items-center gap-1 ml-2">
                                        {CODE_SNIPPETS.map((snippet, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveTab(idx)}
                                                className={`text-xs font-mono px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors ${activeTab === idx
                                                        ? 'bg-white/10 text-cyan-300 font-semibold'
                                                        : 'text-slate-500 hover:text-slate-300'
                                                    }`}
                                            >
                                                <FileCode className="w-3 h-3" />
                                                <span>{snippet.filename}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                                    <Activity className="w-3 h-3 animate-spin" />
                                    <span>{currentSnippet.device}</span>
                                </div>
                            </div>

                            {/* Code Display */}
                            <div className="p-5 font-mono text-xs space-y-2 text-slate-300 min-h-[260px]">
                                {currentSnippet.code}
                            </div>

                            {/* Live Status Footer */}
                            <div className="px-5 py-3 bg-surfaceLight/50 border-t border-white/5 text-[11px] font-mono flex items-center justify-between text-emerald-400">
                                <span>{currentSnippet.status}</span>
                                <span className="text-slate-500">Python 3.11</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};