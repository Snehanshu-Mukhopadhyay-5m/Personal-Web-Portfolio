import React, { useState, useEffect } from 'react';
import { Cpu, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: "Overview", href: "#hero" },
        { label: "NLP Playground", href: "#attention-demo" },
        { label: "Projects", href: "#projects" },
        { label: "Neural Stack", href: "#skills" },
        { label: "Timeline", href: "#experience" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                <a href="#hero" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-all">
                        <Cpu className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-mono font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                            SM // AI_LAB
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Inference: Ready
                        </span>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <a
                        href={PERSONAL_INFO.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href={PERSONAL_INFO.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="#contact"
                        className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono transition-all"
                    >
                        Connect_
                    </a>
                </div>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm font-mono text-slate-300 hover:text-cyan-400 py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};