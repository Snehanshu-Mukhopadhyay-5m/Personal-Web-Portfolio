import React, { useState } from 'react';
import { Mail, Send, Terminal, Github, Linkedin, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 4000);
    };

    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="bg-surface/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                        <div className="md:col-span-5 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                                <Terminal className="w-3.5 h-3.5" />
                                <span>Initialize Connection</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-white">
                                Let's Build & Collaborate
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Open to discussions on neural network architectures, NLP research, model optimization, and summer technical roles.
                            </p>

                            <div className="space-y-3 pt-4">
                                <a
                                    href={`mailto:${PERSONAL_INFO.socials.email}`}
                                    className="flex items-center gap-3 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors p-2.5 rounded-xl bg-white/5 border border-white/5"
                                >
                                    <Mail className="w-4 h-4 text-cyan-400" />
                                    <span>{PERSONAL_INFO.socials.email}</span>
                                </a>
                                <div className="flex items-center gap-3 pt-2">
                                    <a
                                        href={PERSONAL_INFO.socials.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={PERSONAL_INFO.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-7">
                            {submitted ? (
                                <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-3 font-mono">
                                    <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                                    <h3 className="text-base font-bold text-white">Transmission Received</h3>
                                    <p className="text-xs text-slate-300">
                                        Message payload logged successfully. Will reply shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-1.5 font-mono text-xs">
                                        <label className="text-slate-400">Identity (Name)</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Your Name"
                                            className="w-full bg-background border border-white/10 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-1.5 font-mono text-xs">
                                        <label className="text-slate-400">Endpoint (Email)</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="your.email@example.com"
                                            className="w-full bg-background border border-white/10 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-1.5 font-mono text-xs">
                                        <label className="text-slate-400">Payload (Message)</label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Discussing transformer quantization or model architecture..."
                                            className="w-full bg-background border border-white/10 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                                    >
                                        <span>Send Message</span>
                                        <Send className="w-3.5 h-3.5" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};