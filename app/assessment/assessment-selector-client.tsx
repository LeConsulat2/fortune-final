'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, BookOpen, ChevronRight } from 'lucide-react';

const options = [
  { name: 'Exam', icon: FileText, path: '/quiz/exam', description: 'Exam mindset, preparation, and performance' },
  { name: 'Assignment', icon: BookOpen, path: '/quiz/assignment', description: 'Assignment focus, productivity, and deadlines' },
];

export function AssessmentSelectorClient() {
  return (
    <div className="w-full space-y-3">
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
  );
}
