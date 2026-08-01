import { motion } from 'framer-motion';
import { Instagram, BadgeCheck, ArrowRight } from 'lucide-react';
import { STYLISTS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Experts() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="experts" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <Reveal><p className="section-label mb-5">Meet the Artists</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display mx-auto max-w-3xl text-4xl md:text-6xl">
              Master hands behind <span className="gold-gradient-text italic">your transformation</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STYLISTS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4 text-gold" />
                      <span className="text-[10px] uppercase tracking-widest-2 text-white/60">{s.experience}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl">{s.name}</h3>
                    <p className="text-xs text-gold/80">{s.role}</p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {s.specialties.map((sp) => (
                        <span key={sp} className="rounded-full border border-gold/20 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/60">
                          {sp}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <a
                        href={`https://instagram.com/${s.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-gold"
                      >
                        <Instagram className="h-4 w-4" /> {s.instagram}
                      </a>
                      <button
                        onClick={() => go('#booking')}
                        className="flex items-center gap-1 text-xs uppercase tracking-widest-2 text-gold"
                      >
                        Book <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
