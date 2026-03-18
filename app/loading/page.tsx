'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useUserMemory } from '@/lib/useUserMemory';
import { Button } from '@/ui/button';

const MESSAGES = [
  'Reading your stars',
  'Sensing today\'s energy',
  'Finding your thread',
  'Almost there',
];

export default function LoadingPageWithSuspense() {
  return (
    <Suspense fallback={null}>
      <LoadingPage />
    </Suspense>
  );
}

function LoadingPage() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { userMemory, isLoaded } = useUserMemory();
  const category = searchParams?.get('category') || 'general';

  const categoryEmoji: Record<string, string> = {
    general: '✨', love: '❤️', job: '💼', interview: '🎤',
    exam: '📝', assignment: '📚', money: '💰', composure: '🧘',
    'mental-health': '🧠', golf: '⛳',
  };

  const emoji = categoryEmoji[category] || '🔮';

  useEffect(() => {
    if (!isLoaded) return;

    if (!userMemory || !userMemory.name || !userMemory.birthDate) {
      router.push('/start/step-1-personal-info');
      return;
    }

    let isMounted = true;

    // Cycle messages
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 2200);

    const generateFortune = async () => {
      try {
        const memoryToSend = { ...userMemory, category };
        const response = await fetch('/api/fortune', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(memoryToSend),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to generate fortune');
        }

        const data = await response.json();
        sessionStorage.setItem('fortune-result', JSON.stringify(data));

        // Brief pause for the transition to feel intentional
        setTimeout(() => {
          if (isMounted) router.push(`/result?category=${category}`);
        }, 600);
      } catch (err) {
        if (isMounted) setError((err as Error).message || 'Something went wrong');
      }
    };

    generateFortune();

    return () => {
      isMounted = false;
      clearInterval(msgInterval);
    };
  }, [isLoaded, userMemory, router, category]);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-sm text-center space-y-4">
          <div className="text-4xl">😕</div>
          <h1 className="text-xl font-bold text-foreground">Something went wrong</h1>
          <p className="text-sm text-muted-foreground">{error}</p>
          <Button
            onClick={() => router.push('/general')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Go back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Pulsing ambient glow behind the emoji */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/8 blur-[80px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4 + i * 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transformOrigin: `${40 + i * 15}px 0px`,
          }}
        />
      ))}

      {/* Central emoji */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', damping: 15 }}
        className="text-6xl mb-8 relative z-10"
      >
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          {emoji}
        </motion.span>
      </motion.div>

      {/* Rotating message */}
      <div className="h-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="text-base md:text-lg text-muted-foreground tracking-wide"
          >
            {MESSAGES[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Minimal pulsing dots at bottom */}
      <div className="flex gap-1.5 mt-8 relative z-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary/50"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}
