// app/job/page.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { jobOptions } from './job-constants';
import { seededRandom } from '@/lib/seeded-random';

export default function JobSelector() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-gradient-to-br from-amber-950 via-red-950 to-red-900 py-6 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-2 text-orange-100">
          Which job-related fortune do you want?
        </h2>
      </motion.div>
      <div className="w-full max-w-md flex flex-col gap-3">
        {jobOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <motion.div
              key={option.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="stream-down"
            >
              <Link href={option.path} className="block w-full">
                <div className="flex items-center justify-between bg-black/20 border border-orange-500/30 rounded-xl p-4 hover:bg-black/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-orange-400">
                      <Icon size={24} />
                    </span>
                    <div>
                      <span className="text-lg font-medium text-orange-100">
                        {option.name}
                      </span>
                      <div className="text-sm text-orange-200">
                        {option.description}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="text-orange-400" size={20} />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
      {/* Floating particles animation for consistency */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${seededRandom(i) * 100}%`,
              top: `${seededRandom(i) * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
