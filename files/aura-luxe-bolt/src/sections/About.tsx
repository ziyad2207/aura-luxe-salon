import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { useCounter } from '@/hooks/useCounter';

const TIMELINE = [
  { year: '2014', title: 'The Beginning', text: 'Aura Luxe opens its doors in a heritage Mumbai townhouse with a single chair and a vision.' },
  { year: '2017', title: 'Award-Winning', text: 'Recognized as India\'s Best Luxury Salon at the Style Awards, our reputation spreads.' },
  { year: '2020', title: 'Atelier Expansion', text: 'A second floor dedicated to bridal suites and a private skincare atelier is unveiled.' },
  { year: '2024', title: 'A Decade of Aura', text: '10 years on, we serve over 12,000 guests a year with a team of 30 master artists.' },
];

function Stat({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const n = useCounter(value, 2200, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl md:text-5xl gold-gradient-text">
        {n}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest-2 text-white/40">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-6 text-center"
        >
          Our Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="heading-display mx-auto max-w-4xl text-balance text-center text-4xl md:text-6xl"
        >
          Where <span className="gold-gradient-text italic">artistry</span> becomes a ritual,
          and beauty becomes <span className="gold-gradient-text italic">legacy</span>.
        </motion.h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Aura Luxe salon interior"
                loading="lazy"
                className="h-[520px] w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="glass-dark absolute -bottom-6 -right-6 hidden rounded-xl p-5 md:block">
              <p className="font-serif text-2xl gold-gradient-text">10+</p>
              <p className="text-xs uppercase tracking-widest-2 text-white/50">Years of Mastery</p>
            </div>
          </motion.div>

          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-3xl md:text-4xl">A founder's promise</h3>
              <p className="mt-6 text-white/60 leading-relaxed">
                Aura Luxe was born from a belief that beauty is not a service — it is a feeling.
                A feeling of being seen, understood, and transformed. Our founder, Aria Malhotra,
                set out to create a space where every guest is treated as the most important person
                in the room, because to us, you are.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                We blend the precision of European ateliers with the warmth of Indian hospitality,
                using only the world's finest products and a team trained across Paris, Milan, and Tokyo.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gold/10 pt-10 sm:grid-cols-4">
                <Stat value={12} label="Years" suffix="+" />
                <Stat value={30} label="Artists" />
                <Stat value={12} label="K Clients" suffix="K" />
                <Stat value={48} label="Awards" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          {[
            { tag: 'Mission', title: 'To redefine luxury beauty', text: 'Through uncompromising artistry, rare ingredients, and deeply personal care that honors every individual who walks through our doors.' },
            { tag: 'Vision', title: 'A world where beauty feels like home', text: 'To be Asia\'s most beloved luxury beauty house — a sanctuary where confidence is crafted and every visit becomes a cherished memory.' },
          ].map((b, i) => (
            <motion.div
              key={b.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 md:p-10"
            >
              <p className="section-label">{b.tag}</p>
              <h4 className="mt-4 font-serif text-2xl md:text-3xl">{b.title}</h4>
              <p className="mt-4 text-white/55 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-serif text-3xl md:text-4xl"
          >
            A decade of <span className="gold-gradient-text italic">defining moments</span>
          </motion.h3>
          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block" />
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-ink-900 font-serif text-sm text-gold">
                  {i + 1}
                </div>
                <p className="font-serif text-2xl gold-gradient-text">{t.year}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest-2 text-white/80">{t.title}</p>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
