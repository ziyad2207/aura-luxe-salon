import { motion } from 'framer-motion';
import { Gift, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const AMOUNTS = ['₹2,500', '₹5,000', '₹10,000', '₹25,000'];

export default function GiftCards() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="gift-cards" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 p-10 md:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-champagne/10 blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Gift className="h-6 w-6 text-gold" />
                  <p className="section-label">Gift Cards</p>
                </div>
                <h2 className="mt-5 heading-display text-4xl md:text-5xl">
                  The gift of <span className="gold-gradient-text italic">luxury</span>
                </h2>
                <p className="mt-5 max-w-md text-white/55">
                  Share the Aura Luxe experience with someone you love. Digital gift cards
                  delivered instantly, redeemable across all services and products.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {AMOUNTS.map((a) => (
                    <motion.button
                      key={a}
                      whileHover={{ y: -3 }}
                      onClick={() => go('#booking')}
                      className="rounded-full border border-gold/30 px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-ink-900"
                    >
                      {a}
                    </motion.button>
                  ))}
                </div>
                <button onClick={() => go('#booking')} className="btn-gold mt-8 inline-flex">
                  <span>Purchase Gift Card</span>
                </button>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ rotate: -8, y: 20 }}
                  whileInView={{ rotate: -8, y: 0 }}
                  viewport={{ once: true }}
                  className="relative mx-auto aspect-[1.6/1] w-full max-w-sm overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-gold-dark via-gold to-gold-light p-6 shadow-2xl"
                >
                  <div className="flex h-full flex-col justify-between text-ink-900">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xl">Aura Luxe</span>
                      <Gift className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest-2 opacity-70">Gift Card Value</p>
                      <p className="font-serif text-4xl">₹10,000</p>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest-2 opacity-60">Card No.</p>
                        <p className="font-mono text-xs">•••• 4321</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
