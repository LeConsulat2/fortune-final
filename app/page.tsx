'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/ui/button';
import { useUserMemory } from '@/lib/useUserMemory';
import TrueFocus from '@/components/TrueFocus';
import TiltedCard from '@/components/TiltedCard';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';

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
  'youth.png',
];

export default function Home() {
  const { isLoaded, isComplete, isPersonalised, updateUserMemory } = useUserMemory();
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState('/images/akiharu-theme-6.png');
  const [showIntercept, setShowIntercept] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * IMAGE_FILES.length);
    setImageSrc(`/images/${IMAGE_FILES[randomIndex]}`);
  }, []);

  const handleQuickFortune = () => {
    updateUserMemory({ onboardingSkipped: true });
    router.push('/general?mode=quick');
  };

  const handlePersonalised = () => {
    if (isPersonalised) {
      router.push('/general?mode=personalised');
    } else {
      router.push('/start/step-1-personal-info');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 md:pt-15 relative overflow-hidden">
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
            containerHeight="min(500px, 75vw)"
            imageWidth="min(320px, 75vw)"
            imageHeight="min(500px, 75vw)"
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
          <Button
            size="lg"
            onClick={() => setShowIntercept(true)}
            className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 cursor-pointer transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            {isLoaded && isComplete ? 'See Today\'s Fortune' : 'Start'}
          </Button>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-left max-w-sm mx-auto space-y-4"
        >
          <h2 className="text-sm font-medium text-muted-foreground/60 uppercase tracking-[0.15em] text-center">
            How It Works
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-sm mt-0.5">1</span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Choose a category that matters today — love, career, money, wellness, or more
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-sm mt-0.5">2</span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Answer a short, thoughtful quiz that captures your current mindset
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-sm mt-0.5">3</span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Receive a personalised AI reading with specific insights, cautions, and opportunities
              </p>
            </div>
          </div>
        </motion.div>

        {/* Categories Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-2 max-w-sm mx-auto"
        >
          {['Love', 'Career', 'Money', 'Mental Health', 'Composure', 'Exams', 'Interview', 'Golf'].map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 text-xs text-muted-foreground/70 bg-muted/20 rounded-full border border-border/50"
            >
              {cat}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-muted-foreground/50 text-sm"
        >
          For entertainment. You create your own fortune.
        </motion.p>
      </div>

      {/* Intercept overlay */}
      <AnimatePresence>
        {showIntercept && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
              onClick={() => setShowIntercept(false)}
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30, delay: 0.1 }}
              className="relative z-10 w-full max-w-lg mx-4"
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-center text-muted-foreground text-sm mb-6"
              >
                How would you like your fortune?
              </motion.p>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {/* Quick option */}
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.2 }}
                  onClick={handleQuickFortune}
                  className="group relative flex flex-col items-center gap-3 p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer active:scale-[0.97]"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Zap size={26} className="text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">Quick</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-snug">
                      Instant fortune,<br />no details needed
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                </motion.button>

                {/* Personalised option */}
                <motion.button
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.3 }}
                  onClick={handlePersonalised}
                  className="group relative flex flex-col items-center gap-3 p-6 md:p-8 rounded-2xl border border-primary/30 bg-primary/5 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 cursor-pointer active:scale-[0.97]"
                >
                  <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-semibold rounded-full uppercase tracking-wider">
                    Better
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <Sparkles size={26} className="text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">Personalised</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-snug">
                      Tailored to your<br />name, birth &amp; more
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                </motion.button>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setShowIntercept(false)}
                className="mt-5 w-full text-center text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-pointer"
              >
                Go back
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
