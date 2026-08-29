import React, { useState, useMemo } from 'react';
import { Layers, Zap, Sparkles, Terminal, Activity } from 'lucide-react';

const PRESETS = [
    "Transformers compute scaled dot product attention",
    "The neural network parsed the input sequence",
    "Attention mechanisms capture long range dependencies",
    "Language models predict next token probabilities"
];

export const AttentionPlayground: React.FC = () => {
    const [text, setText] = useState<string>(PRESETS[0]);
    const [selectedHead, setSelectedHead] = useState<number>(1);
    const [hoveredTokenIndex, setHoveredTokenIndex] = useState<number | null>(null);
    const [hoveredCell, setHoveredCell] = useState<{ q: number; k: number; val: number } | null>(null);

    const tokens = useMemo(() => {
        return text.trim().split(/\s+/).filter(Boolean);
    }, [text]);

    const attentionMatrix = useMemo(() => {
        const n = tokens.length;
        if (n === 0) return [];

        const matrix: number[][] = [];
        for (let i = 0; i < n; i++) {
            const row: number[] = [];
            let sum = 0;
            for (let j = 0; j < n; j++) {
                let score = 0;
                const diff = Math.abs(i - j);

                if (selectedHead === 1) {
                    score = Math.exp(-diff * 0.7) + (i === j ? 1.8 : 0.2);
                } else if (selectedHead === 2) {
                    score = (j === i - 1 || j === i + 1) ? 2.5 : 0.15;
                } else if (selectedHead === 3) {
                    score = (i === 0 || j === n - 1) ? 2.0 : Math.sin(i * 1.5 + j) * 0.8 + 1.2;
                } else {
                    score = (j <= i ? 1.5 : 0.05) + Math.cos(i - j) * 0.5;
                }

                const expVal = Math.exp(score);
                row.push(expVal);
                sum += expVal;
            }
            matrix.push(row.map(val => Number((val / sum).toFixed(3))));
        }
        return matrix;
    }, [tokens, selectedHead]);

    return (
        <section id="attention-demo" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Interactive NLP Visualizer</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
                            Multi-Head Self-Attention Matrix
                        </h2>
                        <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
                            Explore how transformer layers allocate contextual weight across sequence tokens via scaled dot-product attention: <span className="font-mono text-cyan-400 text-xs sm:text-sm">Attention(Q,K,V) = softmax(QKᵀ / √dₖ)V</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-2 bg-surface border border-white/10 rounded-xl p-1.5 self-start md:self-auto">
                        <span className="text-xs text-slate-400 px-2 font-mono flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-cyan-400" /> Head:
                        </span>
                        {[1, 2, 3, 4].map((h) => (
                            <button
                                key={h}
                                onClick={() => setSelectedHead(h)}
                                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${selectedHead === h
                                        ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                H_{h}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 shadow-2xl">
                    <div className="mb-6 space-y-3">
                        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                            <span className="flex items-center gap-2">
                                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                                Input Token Sequence
                            </span>
                            <span className="text-cyan-400 font-normal">Tokens: {tokens.length} | d_model: 512 | d_k: 64</span>
                        </label>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type any sentence to tokenize..."
                            className="w-full bg-background/90 border border-white/10 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                        />
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                            <span className="text-xs text-slate-500 font-mono">Sample Prompts:</span>
                            {PRESETS.map((preset, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setText(preset)}
                                    className="text-xs bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 px-2.5 py-1 rounded-md font-mono transition-colors"
                                >
                                    Prompt #{idx + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                            Token Attentive Arcs (Hover to focus dependency)
                        </h3>
                        <div className="flex flex-wrap gap-2 p-4 bg-background/60 rounded-xl border border-white/5">
                            {tokens.map((t, idx) => {
                                const isHovered = hoveredTokenIndex === idx;
                                let attentionFromHovered = 0;
                                if (hoveredTokenIndex !== null && attentionMatrix[hoveredTokenIndex]) {
                                    attentionFromHovered = attentionMatrix[hoveredTokenIndex][idx] || 0;
                                }

                                return (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setHoveredTokenIndex(idx)}
                                        onMouseLeave={() => setHoveredTokenIndex(null)}
                                        className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all cursor-pointer select-none flex items-center gap-1.5 ${isHovered
                                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 scale-105 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                                            : hoveredTokenIndex !== null && attentionFromHovered > 0.2
                                                ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300'
                                                : 'bg-surfaceLight/50 border-white/10 text-slate-300 hover:border-white/30'
                                            }`}
                                    >
                                        <span className="text-slate-500 text-[10px]">#{idx}</span>
                                        <span>{t}</span>
                                        {hoveredTokenIndex !== null && isHovered && (
                                            <span className="text-[10px] text-cyan-400 font-bold ml-1">Query</span>
                                        )}
                                        {hoveredTokenIndex !== null && !isHovered && attentionFromHovered > 0.1 && (
                                            <span className="text-[10px] text-emerald-400 font-bold ml-1">
                                                {(attentionFromHovered * 100).toFixed(0)}%
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        <div className="lg:col-span-2 overflow-x-auto pb-2">
                            <h3 className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider flex items-center justify-between">
                                <span>Attention Heatmap (Query [Rows] × Key [Columns])</span>
                            </h3>

                            <div className="inline-block min-w-full bg-background/80 p-4 rounded-xl border border-white/5">
                                <div className="grid gap-1" style={{ gridTemplateColumns: `auto repeat(${tokens.length}, minmax(40px, 1fr))` }}>
                                    <div className="h-8"></div>
                                    {tokens.map((token, j) => (
                                        <div
                                            key={`col-${j}`}
                                            className={`h-8 flex items-center justify-center text-[10px] font-mono truncate px-1 rounded ${hoveredCell?.k === j ? 'text-cyan-400 font-bold bg-cyan-500/10' : 'text-slate-400'
                                                }`}
                                            title={token}
                                        >
                                            {token.slice(0, 5)}
                                        </div>
                                    ))}

                                    {tokens.map((rowToken, i) => (
                                        <React.Fragment key={`row-${i}`}>
                                            <div
                                                className={`h-10 flex items-center text-[10px] font-mono pr-2 truncate rounded ${hoveredCell?.q === i ? 'text-cyan-400 font-bold bg-cyan-500/10' : 'text-slate-400'
                                                    }`}
                                                title={rowToken}
                                            >
                                                {rowToken.slice(0, 6)}
                                            </div>
                                            {tokens.map((_, j) => {
                                                const weight = attentionMatrix[i]?.[j] ?? 0;
                                                const isHovered = hoveredCell?.q === i && hoveredCell?.k === j;
                                                const opacity = Math.max(0.12, weight);

                                                return (
                                                    <div
                                                        key={`cell-${i}-${j}`}
                                                        onMouseEnter={() => setHoveredCell({ q: i, k: j, val: weight })}
                                                        onMouseLeave={() => setHoveredCell(null)}
                                                        style={{
                                                            backgroundColor: `rgba(0, 240, 255, ${opacity})`
                                                        }}
                                                        className={`h-10 rounded flex items-center justify-center text-[10px] font-mono cursor-pointer transition-all duration-150 ${isHovered
                                                            ? 'ring-2 ring-white scale-110 z-10 text-white font-bold bg-cyan-400'
                                                            : weight > 0.35
                                                                ? 'text-black font-semibold'
                                                                : 'text-slate-300'
                                                            }`}
                                                    >
                                                        {weight.toFixed(2)}
                                                    </div>
                                                );
                                            })}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-background/80 border border-white/10 rounded-xl p-4 space-y-4">
                            <h3 className="text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-white/5">
                                <Activity className="w-4 h-4 text-cyan-400" />
                                Live Tensor Inspection
                            </h3>

                            {hoveredCell ? (
                                <div className="space-y-3 font-mono text-xs">
                                    <div className="p-3 bg-surfaceLight/60 rounded-lg border border-cyan-500/20">
                                        <div className="text-slate-400 mb-1">Query Vector q_{hoveredCell.q}:</div>
                                        <div className="text-cyan-300 font-semibold truncate">"{tokens[hoveredCell.q]}"</div>
                                    </div>
                                    <div className="p-3 bg-surfaceLight/60 rounded-lg border border-emerald-500/20">
                                        <div className="text-slate-400 mb-1">Key Vector k_{hoveredCell.k}:</div>
                                        <div className="text-emerald-300 font-semibold truncate">"{tokens[hoveredCell.k]}"</div>
                                    </div>
                                    <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                                        <div className="text-slate-400 mb-1">Attention Weight α_{hoveredCell.q},{hoveredCell.k}:</div>
                                        <div className="text-xl font-bold text-cyan-400">{hoveredCell.val}</div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-xs font-mono text-slate-400 leading-relaxed py-6 text-center">
                                    <Zap className="w-6 h-6 text-cyan-400/50 mx-auto mb-2" />
                                    Hover over any matrix cell or token to inspect real-time tensor activations.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};