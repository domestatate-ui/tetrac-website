'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cta" ref={ref} className="relative py-14 lg:py-24 border-t border-white/[0.05]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-600/12 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Limited Early Access
          </div>

          {/* Headline */}
          <h2 className="font-bold text-white mb-6 tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Start managing your properties{' '}
            <span className="gradient-text">without the hassle</span>
          </h2>

          <p className="text-[#8892aa] text-base leading-relaxed mb-10 mx-auto" style={{ maxWidth: '32rem' }}>
            Join landlords who have already ditched spreadsheets and WhatsApp groups for DOM Maintenance.
            Free to get started, no credit card required.
          </p>

          {/* CTAs */}
          <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="mailto:hello@dom.ng?subject=Early Access Request"
              whileHover={{ scale: 1.03, boxShadow: '0 0 50px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="cta-btn flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold text-base shadow-2xl shadow-indigo-500/30 transition-all duration-300"
            >
              Get Early Access
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="mailto:hello@dom.ng?subject=Demo Request"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cta-btn flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/[0.12] bg-white/[0.04] text-white font-semibold text-base hover:bg-white/[0.08] transition-all duration-200"
            >
              <Calendar size={16} className="text-[#8892aa]" />
              Book a Demo
            </motion.a>
          </div>

          <style jsx>{`
            @media (max-width: 480px) {
              .cta-buttons { flex-direction: column !important; }
              .cta-btn { width: 100% !important; }
            }
          `}</style>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-8 text-[#4a5568] text-xs"
          >
            No credit card required · Free to start · Setup in 5 minutes
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
