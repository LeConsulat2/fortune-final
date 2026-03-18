'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, BookOpen, ChevronRight } from 'lucide-react';

const options = [
  { name: 'Exam', icon: FileText, path: '/quiz/exam', description: 'Exam mindset, preparation, and performance' },
  { name: 'Assignment', icon: BookOpen, path: '/quiz/assignment', description: 'Assignment focus, productivity, and deadlines' },
];

export default function AssessmentSelector() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md mb-6"
      >
        <h2 className="text-xl font-semibold text-foreground">Which assessment fortune?</h2>
      </motion.div>
      <div className="w-full max-w-md space-y-3">
        {options.map((option, index) => {
          const Icon = option.icon;
          return (
            <motion.div
              key={option.path}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link href={option.path} className="block">
                <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-muted-foreground" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{option.name}</span>
                      <div className="text-xs text-muted-foreground">{option.description}</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
