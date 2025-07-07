'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useUserMemory } from '@/lib/useUserMemory';
import { Button } from '@/ui/button';

// Fortune generation messages
const LOADING_MESSAGES = [
  'Reading the stars ✨',
  'Consulting the cosmic energies 🌌',
  'Analyzing your zodiac patterns 🔮',
  'Interpreting celestial alignments 🌙',
  'Examining your fortune paths 🛤️',
  'Channeling mystical wisdom 💫',
  'Decoding your destiny threads 🧵',
  'Unveiling your cosmic blueprint 📜',
  'Calculating your fortune probability 📊',
  'Translating cosmic whispers 🌬️',
];

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { userMemory, isLoaded } = useUserMemory();
  const category = searchParams?.get('category') || 'general';

  useEffect(() => {
    if (!isLoaded) return;

    if (!userMemory || !userMemory.name || !userMemory.birthDate) {
      router.push('/start/step-1-personal-info');
      return;
    }

    let isMounted = true;

    // Start progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slow down progress at 90% if API call is still processing
        if (prev >= 90) {
          return prev + 0.2;
        }
        return prev + 2;
      });
    }, 100);

    // Message rotation
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) =>
        prev === LOADING_MESSAGES.length - 1 ? 0 : prev + 1,
      );
    }, 1500);

    // Call the API to generate the fortune
    const generateFortune = async () => {
      try {
        // Ensure the category is included in the user memory object sent to the API
        const memoryToSend = { ...userMemory, category };

        const response = await fetch('/api/fortune', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(memoryToSend),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to generate fortune');
        }

        const data = await response.json();

        // Store the fortune in sessionStorage for the result page
        sessionStorage.setItem('fortune-result', JSON.stringify(data));

        // Complete the progress bar
        setProgress(100);

        // Wait a moment to show 100% before redirecting
        setTimeout(() => {
          if (isMounted) {
            router.push(`/result?category=${category}`);
          }
        }, 500);
      } catch (err) {
        if (isMounted) {
          setError((err as Error).message || 'Failed to generate fortune');
          setProgress(100);
        }
      }
    };

    // Start generating fortune
    generateFortune();

    return () => {
      isMounted = false;
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [isLoaded, userMemory, router, category]);

  // If there's an error, show it
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-md mx-auto w-full text-center">
          <div className="mb-8 text-5xl">😕</div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent mb-4">
            Fortune Generation Error
          </h1>
          <p className="text-amber-200 mb-6">{error}</p>
          <Button
            onClick={() => router.push('/choice')}
            className="w-full h-full hover:cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded-md"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white flex flex-col items-center justify-center p-6">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto w-full text-center">
        {/* Crystal ball animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.05, 1],
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-300/30 via-purple-400/20 to-orange-300/30 backdrop-blur-sm flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(251, 146, 60, 0.3)',
                    '0 0 40px rgba(251, 146, 60, 0.6)',
                    '0 0 20px rgba(251, 146, 60, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="text-4xl"
                animate={{ rotateY: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                🔮
              </motion.div>
            </div>

            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl bg-orange-500/20"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent mb-4"
        >
          Generating Your Fortune
        </motion.h1>

        {/* Loading message */}
        <motion.div
          key={currentMessageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-8 mb-6 text-amber-200"
        >
          {LOADING_MESSAGES[currentMessageIndex]}
        </motion.div>

        {/* Progress bar */}
        <div className="w-full bg-white/10 rounded-full h-3 mb-10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <p className="text-sm text-orange-300">
          Please wait while we consult the cosmic forces...
        </p>
      </div>
    </div>
  );
}
