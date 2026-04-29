'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14] via-transparent to-[#080c14]" />
      </div>

      <div className="section-container py-12 lg:py-20 w-full">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Now Available — DOM Maintenance
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold text-white leading-[1.12] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.75rem)' }}
            >
              Simplify Property{' '}
              <span className="gradient-text">Management</span>{' '}
              for Modern Landlords
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-[#8892aa] leading-relaxed"
            >
              Track rent, manage tenants, and stay on top of your properties —
              all in one place. Know who's paid and who hasn't, instantly.
            </motion.p>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(99, 102, 241, 0.45)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all duration-200"
              >
                Start Managing Rent
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/[0.1] bg-white/[0.04] text-white font-semibold text-sm hover:bg-white/[0.08] transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={10} className="ml-0.5 fill-white text-white" />
                </div>
                View Demo
              </motion.a>
            </motion.div>

            <motion.div
              custom={0.45}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-8 pt-2"
            >
              {[
                { value: '500+', label: 'Units tracked' },
                { value: '100%', label: 'Free to start' },
                { value: '5 min', label: 'Setup time' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-white font-bold text-base">{stat.value}</span>
                  <span className="text-[#6b7280] text-xs">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <div className="flex justify-center items-center">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-[#4a5568] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-indigo-400/60" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
