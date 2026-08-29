import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface GateRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const GateReveal: React.FC<GateRevealProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ x: '0%', opacity: 0.95 }}
        animate={isInView ? { x: '-102%', opacity: 0 } : { x: '0%', opacity: 0.95 }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#04060B]/95 border-r-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.5)] z-30 pointer-events-none flex items-center justify-end pr-4"
      >
        <div className="text-[10px] font-mono text-cyan-400/40 uppercase tracking-widest rotate-90">
          GATE_01 // LOCK
        </div>
      </motion.div>

      <motion.div
        initial={{ x: '0%', opacity: 0.95 }}
        animate={isInView ? { x: '102%', opacity: 0 } : { x: '0%', opacity: 0.95 }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#04060B]/95 border-l-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.5)] z-30 pointer-events-none flex items-center justify-start pl-4"
      >
        <div className="text-[10px] font-mono text-cyan-400/40 uppercase tracking-widest -rotate-90">
          GATE_02 // SYNC
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};
