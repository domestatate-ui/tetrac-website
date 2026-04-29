'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProductCard from './ProductCard';

const products = [
  {
    title: 'DOM Maintenance',
    tag: 'Available Now',
    description:
      "Track rent, manage tenants, and instantly know who has paid and who hasn't. The complete rent management tool built for independent landlords.",
    cta: 'Explore DOM Maintenance',
    ctaHref: '#cta',
    isPrimary: true,
    features: [
      'Real-time payment status for all tenants',
      'Rent history and tenant records',
      'Instant overdue alerts',
      'Works on any device',
    ],
  },
  {
    title: 'DOM Estate',
    tag: 'Coming Soon',
    description:
      'List properties and discover rental opportunities across Nigeria. A marketplace built for landlords and renters.',
    cta: 'Join Waitlist',
    ctaHref: '#cta',
    isPrimary: false,
    isComingSoon: true,
    features: [
      'Property listing & discovery',
      'Renter verification tools',
      'Integrated with DOM Maintenance',
      'Nationwide rental market',
    ],
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="products" ref={ref} className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4">
            Our Products
          </span>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Everything you need to manage properties
          </h2>
          <p className="text-[#8892aa] text-base leading-relaxed mx-auto" style={{ maxWidth: '36rem' }}>
            Start with DOM Maintenance today. DOM Estate is coming soon to complete your property toolkit.
          </p>
        </motion.div>

        {/* Cards — 2 col */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto' }}
          className="products-grid"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-[#4a5568]">
            Start with DOM Maintenance for free →{' '}
            <a href="#cta" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Get early access
            </a>
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 720px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
