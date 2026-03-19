'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/ui/button';
import { useUserMemory } from '@/lib/useUserMemory';
import { SimpleRandomImage } from '@/components/simple-random-image';
import TrueFocus from '@/components/TrueFocus';

export default function Home() {
  const { isLoaded, isComplete, updateUserMemory } = useUserMemory();
  const router = useRouter();

  const handleQuickFortune = () => {
    updateUserMemory({ onboardingSkipped: true });
    router.push('/general');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-lg md:max-w-xl w-full text-center space-y-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[280px] md:max-w-[320px]">
            <div className="absolute inset-0 bg-primary/8 rounded-2xl blur-xl" />
            <SimpleRandomImage />
          </div>
        </motion.div>

        {/* Title with TrueFocus */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-foreground">
            <TrueFocus
              sentence="Your Fortune"
              manualMode={false}
              blurAmount={3}
              borderColor="oklch(0.645 0.246 16.439)"
              glowColor="oklch(0.645 0.246 16.439 / 0.4)"
              animationDuration={0.6}
              pauseBetweenAnimations={1.5}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-muted-foreground mt-5 text-base md:text-lg"
          >
            What does today hold for you?
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-sm mx-auto space-y-3"
        >
          {isLoaded && isComplete ? (
            /* Returning user — single CTA */
            <Button
              asChild
              size="lg"
              className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
            >
              <Link href="/general">See Today&apos;s Fortune</Link>
            </Button>
          ) : (
            /* New user — two paths */
            <>
              <Button
                size="lg"
                onClick={handleQuickFortune}
                className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
              >
                Today&apos;s Fortune
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full text-base h-12"
              >
                <Link href="/start/step-1-personal-info">
                  Personalise My Fortune
                </Link>
              </Button>
              <p className="text-muted-foreground/60 text-xs pt-1">
                Personalised fortunes use your name, date of birth &amp; more for tailored guidance
              </p>
            </>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-muted-foreground/50 text-xs"
        >
          For entertainment. You create your own fortune.
        </motion.p>
      </div>
    </div>
  );
}
