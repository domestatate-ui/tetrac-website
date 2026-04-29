'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  AlertCircle, Clock, BookOpen, Smartphone, Brain, LayoutDashboard,
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: AlertCircle,
    title: "Know who hasn't paid instantly",
    description: 'See overdue tenants at a glance the moment you open the app. No hunting through spreadsheets.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
  },
  {
    icon: Clock,
    title: 'Track rent in seconds',
    description: 'Mark payments as paid, pending, or overdue in one tap. Built for speed.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: BookOpen,
    title: 'Tenant history at a glance',
    description: "Every tenant's full payment record is right there — no digging required.",
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
  },
  {
    icon: Smartphone,
    title: 'Works on your phone',
    description: 'Manage your properties from anywhere, on any device. No desktop required.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Brain,
    title: 'No training required',
    description: 'If you can use WhatsApp, you can use DOM. Zero learning curve, guaranteed.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: LayoutDashboard,
    title: 'Clean and simple UI',
    description: 'No bloat, no clutter. Just the information you need, displayed beautifully.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" ref={ref} className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4">
            Features
          </span>
          <h2 className="font-bold text-white mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Everything a landlord needs.{' '}
            <span className="gradient-text">Nothing they don't.</span>
          </h2>
          <p className="text-[#8892aa] text-base leading-relaxed mx-auto" style={{ maxWidth: '36rem' }}>
            DOM Maintenance is ruthlessly focused on what matters: knowing your rent status without any fuss.
          </p>
        </motion.div>

        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 0.08} inView={inView} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
