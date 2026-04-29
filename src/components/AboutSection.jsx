'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative py-14 lg:py-24 border-t border-white/[0.05]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4">
              About Tetrac
            </span>
            <h2 className="font-bold text-white mb-6 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Property management{' '}
              <span className="gradient-text">should be simple.</span>
            </h2>
            <p className="text-[#8892aa] text-base leading-relaxed mb-6">
              We built Tetrac because we saw how many landlords were still managing rent through WhatsApp messages,
              Excel sheets, and notebooks. There had to be a better way — one that didn't require training or a tech background.
            </p>
            <p className="text-[#8892aa] text-base leading-relaxed">
              Tetrac is our answer. Clean, focused, and built specifically for the independent landlord.
            </p>
          </motion.div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                icon: Compass,
                label: 'Our Vision',
                text: 'To build a simple digital infrastructure for property management in Nigeria and beyond.',
                color: 'text-indigo-400',
                bg: 'bg-indigo-500/10',
                border: 'border-indigo-500/20',
                delay: 0.1,
              },
              {
                icon: Target,
                label: 'Our Mission',
                text: 'Simplify how landlords manage rent and tenants — one tap at a time.',
                color: 'text-violet-400',
                bg: 'bg-violet-500/10',
                border: 'border-violet-500/20',
                delay: 0.2,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className={`glass-card rounded-2xl p-6 border ${item.border}`}
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${item.color} mb-2 block`}>{item.label}</span>
                  <p className="text-white text-sm font-medium leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
