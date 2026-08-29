import React from 'react';
import { Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
    return (
        <footer className="py-10 border-t border-white/10 relative z-10 bg-background/90 text-slate-400 text-xs font-mono">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-200">{PERSONAL_INFO.name}</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-slate-500">© 2026</span>
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Zero-Latency Static Edge Build</span>
                </div>
            </div>
        </footer>
    );
};