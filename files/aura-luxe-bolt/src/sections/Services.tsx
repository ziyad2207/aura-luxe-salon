import { motion } from 'framer-motion';
import {
  Scissors, Wind, Palette, Sparkles, Droplet, Sun,
  Crown, Hand, Leaf, Heart, Shield, Eye, ArrowUpRight,
} from 'lucide-react';
import { SERVICES } from '@/data';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';

const ICONS: Record<string, typeof Scissors> = {
  scissors: Scissors, wind: Wind, palette: Palette, sparkles: Sparkles,
  droplet: Droplet, sun: Sun, crown: Crown, hand: Hand,
  leaf: Leaf, heart: Heart, shield: Shield, eye: Eye,
};

export default function Services() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><p className="section-label mb-5">Our Services</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-display max-w-2xl text-4xl md:text-6xl">
                Crafted <span className="gold-gradient-text italic">artistry</span> for every ritual
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-white/50">
              Twelve signature services, each performed by a master artist using the world's
              finest products and time-honored techniques.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Scissors;
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.08}>
                <TiltCard className="group relative h-full overflow-hidden rounded-2xl glass p-8 transition-colors duration-500 hover:border-gold/40">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

                  <div className="relative flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-xl border border-gold/20 bg-ink-900 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink-900">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/20 transition-all duration-500 group-hover:text-gold group-hover:rotate-45" />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl">{s.name}</h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{s.description}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-gold/10 pt-5">
                    <div>
                      <span className="font-serif text-xl gold-gradient-text">{s.price}</span>
                      <span className="ml-2 text-xs text-white/40">· {s.duration}</span>
                    </div>
                    <button
                      onClick={() => go('#booking')}
                      className="text-xs uppercase tracking-widest-2 text-gold/70 transition-colors hover:text-gold"
                    >
                      Book
                    </button>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <a href="#booking" onClick={(e) => { e.preventDefault(); go('#booking'); }} className="btn-outline inline-flex">
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
