'use client';

import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, color, bg, delay = 0, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
      className="group relative glass-card rounded-2xl p-6 border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Hover glow */}
      <div className={`absolute -inset-0.5 ${bg} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-300 pointer-events-none`} />

      <div className="relative">
        {/* Icon */}
        <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={20} className={color} />
        </div>

        {/* Content */}
        <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
        <p className="text-[#6b7280] text-xs leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
