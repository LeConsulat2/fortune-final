'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/ui/button';
import { useUserMemory } from '@/lib/useUserMemory';
import TrueFocus from '@/components/TrueFocus';
import TiltedCard from '@/components/TiltedCard';

const IMAGE_FILES = [
  'first-one.png',
  'life-fortune.png',
  'life-fortune-2.png',
  'fortune.png',
  'fortune-theme-1.png',
  'fortune-theme-2.png',
  'sadness-theme-3.png.png',
  'beauty-theme-4.png.png',
  'maybemust-theme-5.png',
  'akiharu-theme-6.png',
  'misfortune-theme-7.png',
  'noexperience-theme-8.png',
  'youtellmusic-theme-9.png',
  'lifemoments-theme.png',
  'timeerase-theme.png',
  'somelater-theme.png',
  'answerstime-theme.png',
  'slowdown-theme.png',
];

export default function Home() {
  const { isLoaded, isComplete, updateUserMemory } = useUserMemory();
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState('/images/akiharu-theme-6.png');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * IMAGE_FILES.length);
    setImageSrc(`/images/${IMAGE_FILES[randomIndex]}`);
  }, []);

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
          <TiltedCard
            imageSrc={imageSrc}
            altText="Fortune image"
            containerWidth="min(320px, 75vw)"
            containerHeight="min(480px, 75vw)"
            imageWidth="min(320px, 75vw)"
            imageHeight="min(480px, 75vw)"
            scaleOnHover={1.05}
            rotateAmplitude={12}
            showMobileWarning={false}
            showTooltip={false}
          />
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
            className="text-muted-foreground mt-5 text-base md:text-lg italic float-gentle"
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
              className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 cursor-pointer transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Link href="/general">See Today&apos;s Fortune</Link>
            </Button>
          ) : (
            /* New user — two paths */
            <>
              <Button
                size="lg"
                onClick={handleQuickFortune}
                className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 cursor-pointer transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Today&apos;s Fortune
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full text-base h-12 cursor-pointer transition-transform hover:scale-[1.03] active:scale-[0.98]"
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
