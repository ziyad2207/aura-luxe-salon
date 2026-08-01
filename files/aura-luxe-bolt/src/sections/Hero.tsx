import { motion } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';
import { useMagnetic } from '@/hooks/useMagnetic';
import HeroScene from '@/components/HeroScene';

const word = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const HEADLINE = ['Luxury', 'Beauty', 'Beyond', 'Expectations'];

export default function Hero() {
  const bookBtn = useMagnetic<HTMLAnchorElement>(0.3);
  const exploreBtn = useMagnetic<HTMLAnchorElement>(0.3);

  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Canvas background */}
      <HeroScene />

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/60 via-transparent to-ink-900" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,5,0.65)_100%)]" />

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="section-label mb-6"
        >
          Est. 2014 — Mumbai
        </motion.p>

        <h1 className="heading-display text-balance text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem]">
          {HEADLINE.map((w, i) => (
            <span key={w} className="mr-3 inline-block overflow-hidden align-bottom">
              <motion.span
                custom={i}
                variants={word}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {i === 2 ? <span className="gold-gradient-text italic">{w}</span> : w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 max-w-xl text-balance text-base text-white/60 md:text-lg"
        >
          An award-winning sanctuary where master artistry, rare ingredients, and
          quiet luxury converge to reveal the most beautiful version of you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); go('#booking'); }}
            ref={bookBtn.ref}
            onMouseMove={bookBtn.onMouseMove}
            onMouseLeave={bookBtn.onMouseLeave}
            className="btn-gold inline-flex"
          >
            <span>Book Appointment</span>
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); go('#services'); }}
            ref={exploreBtn.ref}
            onMouseMove={exploreBtn.onMouseMove}
            onMouseLeave={exploreBtn.onMouseLeave}
            className="btn-outline inline-flex"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          onClick={() => go('#about')}
          className="group mt-16 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-gold"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] uppercase tracking-widest-2">Watch Story</span>
          <Play className="h-3 w-3" />
          <ArrowDown className="mt-3 h-5 w-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
