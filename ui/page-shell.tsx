'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageShellProps {
  children: ReactNode;
  particleCount?: number;
}

export default function PageShell({
  children,
  particleCount = 20,
}: PageShellProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white overflow-hidden px-4 py-6">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Page content */}
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </div>
  );
}
