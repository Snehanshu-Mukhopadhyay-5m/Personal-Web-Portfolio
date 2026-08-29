import React from 'react';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AttentionPlayground } from './components/AttentionPlayground';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
            <NeuralBackground />
            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <AttentionPlayground />
                    <ProjectsSection />
                    <SkillsSection />
                    <ExperienceSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;