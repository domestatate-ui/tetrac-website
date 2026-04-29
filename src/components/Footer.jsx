'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe, Mail } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'DOM Maintenance', href: '#products' },
    { label: 'DOM Estate', href: '#products', tag: 'Soon' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#cta' },
    { label: 'Early Access', href: '#cta' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socials = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: ExternalLink, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@dom.ng' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-10 lg:pt-16 pb-8 lg:pb-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="section-container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <span className="text-white font-black text-sm">T</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Tetrac</span>
            </a>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-6" style={{ maxWidth: '18rem' }}>
              Simplifying property management for independent landlords. Track rent, manage tenants, and
              know who has paid — all in one place.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg glass-card border border-white/[0.08] flex items-center justify-center text-[#6b7280] hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <social.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">{category}</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="flex items-center gap-2 text-[#6b7280] text-sm hover:text-white transition-colors duration-200">
                      {link.label}
                      {link.tag && (
                        <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/20">
                          {link.tag}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t border-white/[0.05]"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
        >
          <p className="text-[#4a5568] text-xs">
            © {new Date().getFullYear()} Tetrac. All rights reserved. Built for Nigerian landlords.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#4a5568] text-xs">DOM Maintenance is live</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
