import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 12 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 500);
      }
      setProgress(Math.min(p, 100));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center"
          >
            <p className="section-label mb-6">Aura Luxe Salon</p>
            <h1 className="heading-display text-5xl md:text-7xl">
              <span className="shimmer-text">Aura Luxe</span>
            </h1>
            <p className="mt-3 text-xs uppercase tracking-widest-2 text-white/40">Luxury Beauty Beyond Expectations</p>
          </motion.div>

          <div className="mt-12 w-56">
            <div className="h-px w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-[10px] tracking-widest-2 text-white/40">
              <span>LOADING</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
