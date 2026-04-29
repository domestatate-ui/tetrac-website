'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle, TrendingUp, Users, Home } from 'lucide-react';

const tenants = [
  { name: 'James Okafor', unit: 'Apt 2A', amount: '₦85,000', status: 'paid', avatar: 'JO' },
  { name: 'Amina Yusuf', unit: 'Apt 3B', amount: '₦95,000', status: 'paid', avatar: 'AY' },
  { name: 'Chidi Eze', unit: 'Apt 1C', amount: '₦75,000', status: 'pending', avatar: 'CE' },
  { name: 'Ngozi Adaeze', unit: 'Apt 4A', amount: '₦110,000', status: 'overdue', avatar: 'NA' },
];

const statusConfig = {
  paid: {
    icon: CheckCircle,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    label: 'Paid',
    dot: 'bg-emerald-400',
  },
  pending: {
    icon: Clock,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    label: 'Pending',
    dot: 'bg-amber-400',
  },
  overdue: {
    icon: AlertCircle,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    label: 'Overdue',
    dot: 'bg-red-400',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Glow behind */}
      <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-3xl pointer-events-none" />
      <div className="absolute -inset-2 bg-purple-500/10 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Card */}
      <div className="relative glass-card rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/60">
        {/* Header Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-amber-500/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
          <span className="ml-3 text-[11px] text-[#4a5568] font-mono">DOM Maintenance — April 2025</span>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 p-4">
          {[
            { icon: TrendingUp, label: 'Collected', value: '₦365K', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
            { icon: Users, label: 'Tenants', value: '8', color: 'text-purple-400', bg: 'bg-purple-500/10' },
            { icon: Home, label: 'Units', value: '4', color: 'text-sky-400', bg: 'bg-sky-500/10' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`${stat.bg} rounded-xl p-3 flex flex-col gap-1`}
            >
              <stat.icon size={14} className={stat.color} />
              <div className={`text-base font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] text-[#6b7280]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Section Title */}
        <div className="px-4 pb-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#8892aa] uppercase tracking-wider">
            Rent Tracking
          </span>
          <span className="text-[10px] text-indigo-400 font-medium">April 2025</span>
        </div>

        {/* Tenant List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-4 pb-4 space-y-2"
        >
          {tenants.map((tenant) => {
            const cfg = statusConfig[tenant.status];
            const StatusIcon = cfg.icon;
            return (
              <motion.div
                key={tenant.name}
                variants={itemVariants}
                whileHover={{ x: 2 }}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] transition-colors duration-200 cursor-pointer"
              >
                {/* Avatar */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600/60 to-purple-600/60 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-white">{tenant.avatar}</span>
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-white truncate">{tenant.name}</div>
                  <div className="text-[10px] text-[#6b7280]">{tenant.unit}</div>
                </div>
                {/* Amount */}
                <div className="text-xs font-bold text-white">{tenant.amount}</div>
                {/* Status */}
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${cfg.bg}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                  <span className={`text-[10px] font-semibold ${cfg.color}`}>{cfg.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Bar */}
        <div className="px-4 py-3 bg-white/[0.02] border-t border-white/[0.05] flex items-center justify-between">
          <span className="text-[10px] text-[#4a5568]">2 paid · 1 pending · 1 overdue</span>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="text-[10px] font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Mark All →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
