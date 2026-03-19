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

const CATEGORY_EMOJI: Record<string, string> = {
  general: '✨', love: '❤️', job: '💼', interview: '🎤',
  exam: '📝', assignment: '📚', money: '💰', composure: '🧘',
  'mental-health': '🧠', golf: '⛳',
};

export default function LoadingPageWithSuspense() {
  return (
    <Suspense fallback={null}>
      <LoadingPage />
    </Suspense>
  );
}

function LoadingPage() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [readyCount, setReadyCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { userMemory, isLoaded, isComplete } = useUserMemory();

  // Support both ?categories=a,b,c (multi) and ?category=x (single / backward compat)
  const categoriesParam = searchParams?.get('categories');
  const categoryParam = searchParams?.get('category') || 'general';
  const categories = categoriesParam
    ? categoriesParam.split(',').filter(Boolean)
    : [categoryParam];
  const isMulti = categories.length > 1;

  const emoji = CATEGORY_EMOJI[categories[emojiIndex % categories.length]] || '🔮';

  useEffect(() => {
    if (!isLoaded) return;
    if (!isComplete) {
      router.push('/start/step-1-personal-info');
      return;
    }

    let isMounted = true;

    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 2200);

    const emojiInterval = isMulti
      ? setInterval(() => setEmojiIndex((prev) => prev + 1), 1100)
      : null;

    const fetchWithRetry = async (cat: string, attempt = 0): Promise<{ category: string; fortune: unknown }> => {
      const memoryToSend = { ...userMemory, category: cat };
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memoryToSend),
      });
      if (response.status === 429 && attempt < 3) {
        // Exponential backoff: 3s, 6s, 12s
        await new Promise((r) => setTimeout(r, 3000 * Math.pow(2, attempt)));
        return fetchWithRetry(cat, attempt + 1);
      }
      if (!response.ok) {
        let msg = `Failed to generate fortune for ${cat}`;
        try { const e = await response.json(); msg = e.error || msg; } catch { /* ignore */ }
        throw new Error(msg);
      }
      const data = await response.json();
      return { category: cat, fortune: data };
    };

    const generateAll = async () => {
      try {
        const results = [];
        for (let i = 0; i < categories.length; i++) {
          const cat = categories[i];
          const result = await fetchWithRetry(cat);
          if (isMounted) setReadyCount((prev) => prev + 1);
          results.push(result);
          // 3s gap between requests to stay within rate limits
          if (i < categories.length - 1) {
            await new Promise((r) => setTimeout(r, 3000));
          }
        }

        sessionStorage.setItem('fortune-results', JSON.stringify(results));
        // Legacy key for single-result backward compat
        if (results.length === 1) {
          sessionStorage.setItem('fortune-result', JSON.stringify(results[0].fortune));
        }

        setTimeout(() => {
          if (!isMounted) return;
          if (isMulti) {
            router.push(`/result?categories=${categoriesParam}`);
          } else {
            router.push(`/result?category=${categoryParam}`);
          }
        }, 600);
      } catch (err) {
        if (isMounted) setError((err as Error).message || 'Something went wrong');
      }
    };

    generateAll();

    return () => {
      isMounted = false;
      clearInterval(msgInterval);
      if (emojiInterval) clearInterval(emojiInterval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, isComplete]);

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
      {/* Pulsing ambient glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/8 blur-[80px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 4 + i * 1.5, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: `${40 + i * 15}px 0px` }}
        />
      ))}

      {/* Central emoji — cycles through selected categories on multi */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', damping: 15 }}
        className="text-6xl mb-8 relative z-10"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={emoji}
            initial={{ opacity: 0, scale: 0.7, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            exit={{ opacity: 0, scale: 0.7, y: -8 }}
            transition={{ duration: 0.35 }}
            className="block"
          >
            {emoji}
          </motion.span>
        </AnimatePresence>
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

      {/* Multi-progress counter */}
      {isMulti && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs text-muted-foreground/50 mt-3 relative z-10 tabular-nums"
        >
          {readyCount} of {categories.length} ready…
        </motion.p>
      )}

      {/* Pulsing dots */}
      <div className="flex gap-1.5 mt-8 relative z-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary/50"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  );
}
