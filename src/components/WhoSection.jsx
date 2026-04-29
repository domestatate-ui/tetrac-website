'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, User, Users } from 'lucide-react';

const audiences = [
  {
    icon: User,
    title: 'Independent Landlords',
    desc: 'You own 1–5 properties and manage everything yourself. DOM removes the spreadsheet chaos and gives you instant clarity on who has paid.',
    traits: ['Self-managed', 'Personal portfolio', '1–5 units'],
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: Building2,
    title: 'Small Apartment Owners',
    desc: "You manage a block of flats or a small apartment complex. DOM gives you the overview you need without the complexity you don't.",
    traits: ['Block of flats', 'Monthly collection', '5–15 units'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Users,
    title: 'Small Property Managers',
    desc: 'You manage properties on behalf of others. DOM helps you deliver professional rent tracking without expensive enterprise software.',
    traits: ['Multiple landlords', 'Portfolio-level view', '10–20 units'],
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
];

export default function WhoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="who" ref={ref} className="relative py-24 border-t border-white/[0.05]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4">
            Who this is for
          </span>
          <h2 className="font-bold text-white mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Built for people who collect rent,{' '}
            <span className="gradient-text">not accountants.</span>
          </h2>
          <p className="text-[#8892aa] text-base leading-relaxed mx-auto text-center" style={{ maxWidth: '36rem' }}>
            DOM is for the Nigerian landlord who is tired of calling tenants to confirm payment or tracking rent in a notebook.
          </p>
        </motion.div>

        <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-7 border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl ${audience.bg} flex items-center justify-center mb-5`}>
                <audience.icon size={22} className={audience.color} />
              </div>
              <h3 className="text-white font-bold text-base mb-3">{audience.title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-5">{audience.desc}</p>
              <div className="flex flex-wrap gap-2">
                {audience.traits.map((trait) => (
                  <span key={trait} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${audience.bg} ${audience.color} border border-white/[0.06]`}>
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center p-8 glass-card rounded-2xl border border-indigo-500/15 mx-auto"
          style={{ maxWidth: '42rem' }}
        >
          <p className="text-white text-lg font-medium leading-relaxed italic">
            "I used to call every tenant at the end of the month just to know who paid. DOM changed that."
          </p>
          <p className="text-[#4a5568] text-sm mt-3">— The landlord DOM was built for</p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .who-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
