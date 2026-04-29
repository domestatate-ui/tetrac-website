'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

export default function ProductCard({
  title,
  tag,
  description,
  cta,
  ctaHref = '#cta',
  isPrimary = false,
  features = [],
  isComingSoon = false,
}) {
  return (
    <motion.div
      whileHover={{
        y: isPrimary ? -6 : -3,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      className={`relative rounded-2xl p-px overflow-hidden group ${
        isPrimary
          ? 'shadow-2xl shadow-indigo-500/20'
          : 'shadow-xl shadow-black/40'
      }`}
    >
      {/* Gradient border for primary */}
      {isPrimary && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-indigo-500/20 rounded-2xl" />
      )}
      {!isPrimary && (
        <div className="absolute inset-0 bg-white/[0.06] rounded-2xl" />
      )}

      {/* Inner card */}
      <div
        className={`relative rounded-2xl p-7 h-full flex flex-col gap-6 ${
          isPrimary
            ? 'bg-gradient-to-br from-[#0d1124] to-[#0a0e1c]'
            : 'bg-[#0c1020]/90'
        }`}
      >
        {/* Glow for primary */}
        {isPrimary && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
        )}
        {isPrimary && (
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-32 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        )}

        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {/* Tag */}
              {isPrimary ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 text-[11px] font-semibold">
                  <Sparkles size={9} />
                  {tag}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[#8892aa] text-[11px] font-semibold">
                  <Clock size={9} />
                  {tag}
                </span>
              )}
            </div>
            <h3
              className={`text-xl font-bold ${
                isPrimary ? 'text-white' : 'text-[#9ca3af]'
              }`}
            >
              {title}
            </h3>
          </div>

          {/* Logo icon */}
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              isPrimary
                ? 'bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30'
                : 'bg-white/[0.05] border border-white/[0.08]'
            }`}
          >
            <span
              className={`text-sm font-black ${
                isPrimary ? 'text-white' : 'text-[#6b7280]'
              }`}
            >
              D
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed ${
            isPrimary ? 'text-[#9ca3af]' : 'text-[#6b7280]'
          }`}
        >
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="flex flex-col gap-2">
            {features.map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-xs">
                <div
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    isPrimary ? 'bg-indigo-400' : 'bg-[#4a5568]'
                  }`}
                />
                <span className={isPrimary ? 'text-[#9ca3af]' : 'text-[#6b7280]'}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-auto pt-2">
          {isComingSoon ? (
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] text-[#8892aa] text-sm font-semibold hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-200"
            >
              {cta}
            </motion.a>
          ) : (
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 group/btn overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                {cta}
                <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
              </span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
