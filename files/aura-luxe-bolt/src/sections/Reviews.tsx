import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const r = REVIEWS[index];

  return (
    <section id="reviews" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <div className="text-center">
          <Reveal><p className="section-label mb-5">Guest Stories</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display mx-auto max-w-3xl text-4xl md:text-6xl">
              Loved by <span className="gold-gradient-text italic">12,000+</span> guests
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-white/50">4.9 / 5 · 2,400+ Google reviews</span>
            </div>
          </Reveal>
        </div>

        <div
          className="relative mt-16 min-h-[280px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 md:p-12 text-center"
            >
              <Quote className="mx-auto h-10 w-10 text-gold/40" />
              <p className="mt-6 font-serif text-xl md:text-2xl leading-relaxed text-white/85">
                "{r.text}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img src={r.avatar} alt={r.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div className="text-left">
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-white/40">{r.service} · {r.date}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {REVIEWS.map((rev, i) => (
            <button
              key={rev.id}
              onClick={() => setIndex(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-gold' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
