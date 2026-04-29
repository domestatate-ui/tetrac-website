'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, Heart } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'Built for independent landlords',
    desc: 'Designed around the real-world needs of private property owners, not corporations.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: Zap,
    title: 'Designed for simplicity',
    desc: 'No training, no manual, no complexity. Open it and it works.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: Heart,
    title: 'Loved by property managers',
    desc: 'Early users say DOM feels like it was "built exactly for how I work".',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
];

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 border-t border-b border-white/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-transparent to-purple-600/5 pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest text-[#4a5568] uppercase mb-4">
            Trusted principles behind every feature
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mx-auto" />
        </motion.div>

        {/* 3-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="trust-grid">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass-card rounded-2xl p-6 border ${item.border} group cursor-default`}
            >
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                <item.icon size={20} className={item.color} />
              </div>
              <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-6 glass-card rounded-2xl border border-white/[0.06] flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="flex flex-shrink-0" style={{ display: 'flex' }}>
            {['JO', 'AY', 'CE'].map((initials, i) => (
              <div
                key={i}
                style={{ marginLeft: i === 0 ? 0 : '-0.5rem' }}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 border-2 border-[#080c14] flex items-center justify-center"
              >
                <span className="text-[10px] font-bold text-white">{initials}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-white text-sm font-medium italic">
              "Finally, something simple that actually works for my rentals."
            </p>
            <p className="text-[#6b7280] text-xs mt-1">— Early access users · Testimonials coming soon</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
