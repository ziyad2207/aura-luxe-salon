import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import Reveal from '@/components/Reveal';

const PLANS = [
  { id: 'monthly', label: 'Monthly', price: '₹4,999', period: '/month' },
  { id: 'yearly', label: 'Yearly', price: '₹49,999', period: '/year', save: 'Save 17%' },
];

const BENEFITS = [
  'Unlimited hair cuts & styling',
  '2 luxury facials every month',
  'Priority booking with senior artists',
  '15% off all products & services',
  'Complimentary birthday spa ritual',
  'Exclusive member-only events',
  'Dedicated concierge line',
  'Bring-a-friend pass (quarterly)',
];

export default function Membership() {
  const [plan, setPlan] = useState('yearly');
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="membership" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <div className="text-center">
          <Reveal>
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-gold/30 text-gold">
              <Crown className="h-6 w-6" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display text-4xl md:text-6xl">
              The <span className="gold-gradient-text italic">VIP</span> Membership
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-white/50">
              An invitation to make luxury a lifestyle. Members enjoy year-round artistry,
              priority access, and rare privileges reserved for our inner circle.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {PLANS.map((p) => (
            <button
              key={p.id}
              onClick={() => setPlan(p.id)}
              className={`relative rounded-full px-6 py-3 text-sm transition-all duration-300 ${
                plan === p.id ? 'bg-gold text-ink-900' : 'border border-gold/30 text-gold hover:border-gold'
              }`}
            >
              {p.label}
              {p.save && (
                <span className="ml-2 rounded-full bg-ink-900/20 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                  {p.save}
                </span>
              )}
            </button>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-b from-gold/5 to-transparent p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-serif text-5xl gold-gradient-text">
                  {PLANS.find((p) => p.id === plan)?.price}
                  <span className="text-lg text-white/40">{PLANS.find((p) => p.id === plan)?.period}</span>
                </p>
                <p className="mt-3 text-sm text-white/50">Billed {plan === 'monthly' ? 'monthly' : 'annually'}. Cancel anytime.</p>
                <button onClick={() => go('#booking')} className="btn-gold mt-8 inline-flex">
                  <span>Join the Circle</span>
                </button>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
