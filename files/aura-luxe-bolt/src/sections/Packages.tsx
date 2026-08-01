import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import { PACKAGES } from '@/data';
import Reveal from '@/components/Reveal';

export default function Packages() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="packages" className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <Reveal><p className="section-label mb-5">Premium Packages</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display mx-auto max-w-3xl text-4xl md:text-6xl">
              Curated <span className="gold-gradient-text italic">experiences</span>, priced for indulgence
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-all duration-500 ${
                  p.popular
                    ? 'border border-gold bg-gradient-to-b from-gold/10 to-transparent'
                    : 'glass'
                }`}
              >
                {p.badge && (
                  <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] font-medium uppercase tracking-widest-2 text-ink-900">
                    {p.popular && <Crown className="h-3 w-3" />}
                    {p.badge}
                  </div>
                )}

                <h3 className="font-serif text-3xl">{p.name}</h3>
                <p className="mt-2 text-sm text-white/50">{p.description}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-4xl gold-gradient-text">{p.price}</span>
                  <span className="text-xs text-white/40">{p.period}</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => go('#booking')}
                  className={`mt-8 w-full rounded-full py-3.5 text-xs font-medium uppercase tracking-widest-2 transition-all duration-500 ${
                    p.popular
                      ? 'btn-gold'
                      : 'border border-gold/30 text-gold hover:border-gold hover:bg-gold/5'
                  }`}
                >
                  Choose {p.name}
                </button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
