import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <div className="text-center">
          <Reveal><p className="section-label mb-5">Questions</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display text-4xl md:text-6xl">
              Everything you <span className="gold-gradient-text italic">need to know</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-gold/10 border-y border-gold/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-serif text-xl md:text-2xl">{f.q}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/30 text-gold">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-white/55 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
