'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PlusCircle, BarChart3, CheckSquare } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: PlusCircle,
    title: 'Add your units and tenants',
    description: 'Set up your properties and add tenants in minutes. Enter names, units, and monthly rent amounts. No spreadsheet needed.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    step: '02',
    icon: BarChart3,
    title: 'Track monthly rent automatically',
    description: 'DOM creates a new rent cycle each month. Every tenant starts as "pending" so you always know your current collection status.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    step: '03',
    icon: CheckSquare,
    title: 'Mark payments in seconds',
    description: 'Tenant paid? Tap once to mark as paid. Overdue? It shows instantly. No typing, no formulas — just one tap.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how" ref={ref} className="relative py-14 lg:py-24 border-t border-white/[0.05]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-bold text-white mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Up and running in{' '}
            <span className="gradient-text">under 5 minutes</span>
          </h2>
          <p className="text-[#8892aa] text-base leading-relaxed mx-auto text-center" style={{ maxWidth: '36rem' }}>
            Three simple steps. No setup complexity, no onboarding calls.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="step-item"
              style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', paddingBottom: i < steps.length - 1 ? '2.5rem' : 0 }}
            >
              {/* Icon */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center shadow-lg`}
                >
                  <step.icon size={22} className={step.color} />
                </motion.div>
                {i < steps.length - 1 && (
                  <div style={{ width: '1px', flex: 1, minHeight: '2rem', marginTop: '0.75rem', background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }} />
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <span className={`text-xs font-bold font-mono ${step.color} opacity-60 block mb-2`}>STEP {step.step}</span>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a href="#cta" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
            Start in under 5 minutes →
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .step-item { gap: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}
