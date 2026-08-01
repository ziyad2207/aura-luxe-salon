import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, RefreshCw, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';

const QUESTIONS = [
  {
    id: 'face',
    q: 'What is your face shape?',
    options: ['Oval', 'Round', 'Square', 'Heart', 'Long'],
  },
  {
    id: 'hair',
    q: 'What is your hair type?',
    options: ['Straight', 'Wavy', 'Curly', 'Coily'],
  },
  {
    id: 'vibe',
    q: 'Which vibe speaks to you?',
    options: ['Classic & timeless', 'Bold & edgy', 'Soft & romantic', 'Effortless & natural'],
  },
];

const RECOMMENDATIONS: Record<string, { style: string; service: string; note: string }[]> = {
  Oval: [
    { style: 'Sculpted Long Layers', service: 'Hair Cut + Styling', note: 'Your balanced proportions suit almost any cut. Long layers add movement and dimension.' },
    { style: 'Sleek Blunt Bob', service: 'Hair Cut + Keratin', note: 'A sharp blunt line frames your jaw beautifully and reads modern and confident.' },
  ],
  Round: [
    { style: 'Face-Framing Layers', service: 'Hair Cut + Styling', note: 'Layers starting below the chin elongate your face and add elegant angles.' },
    { style: 'Textured Lob', service: 'Hair Cut + Color', note: 'A long bob with texture creates the illusion of length and structure.' },
  ],
  Square: [
    { style: 'Soft Curtain Bangs', service: 'Hair Cut + Styling', note: 'Soft bangs soften a strong jawline and bring a romantic, modern feel.' },
    { style: 'Wispy Shag', service: 'Hair Cut + Color', note: 'A layered shag diffuses angular features with effortless movement.' },
  ],
  Heart: [
    { style: 'Chin-Length Bob', service: 'Hair Cut + Styling', note: 'A chin-length bob balances a wider forehead and draws attention to your eyes.' },
    { style: 'Side-Swept Bangs', service: 'Hair Cut + Color', note: 'Side-swept fringe softens the forehead while highlighting cheekbones.' },
  ],
  Long: [
    { style: 'Volume Bob', service: 'Hair Cut + Styling', note: 'A bob with volume at the sides adds width and balances face length.' },
    { style: 'Layered Mid-Length', service: 'Hair Cut + Color', note: 'Mid-length layers with waves create fullness and beautiful proportion.' },
  ],
};

export default function AiRecommendation() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState(false);

  const pick = (qid: string, value: string) => {
    const next = { ...answers, [qid]: value };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setResult(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(false);
  };

  const recs = RECOMMENDATIONS[answers.face] ?? RECOMMENDATIONS.Oval;
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="ai-recommendation" className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-5 md:px-10">
        <div className="text-center">
          <Reveal>
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-gold/30 text-gold">
              <Wand2 className="h-6 w-6" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display text-4xl md:text-6xl">
              AI <span className="gold-gradient-text italic">hairstyle</span> consultation
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-white/50">
              Answer three quick questions and our stylist AI will craft a personalized
              recommendation tailored to your features and style.
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                className="glass rounded-2xl p-8 md:p-12"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest-2 text-gold">
                    Question {step + 1} of {QUESTIONS.length}
                  </span>
                  <div className="flex gap-1.5">
                    {QUESTIONS.map((_, i) => (
                      <span key={i} className={`h-1.5 w-6 rounded-full ${i <= step ? 'bg-gold' : 'bg-white/15'}`} />
                    ))}
                  </div>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl">{QUESTIONS[step].q}</h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {QUESTIONS[step].options.map((opt) => (
                    <motion.button
                      key={opt}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => pick(QUESTIONS[step].id, opt)}
                      className="group rounded-xl border border-gold/15 bg-ink-900/40 p-5 text-left transition-colors hover:border-gold hover:bg-gold/5"
                    >
                      <span className="flex items-center justify-between">
                        <span className="text-sm">{opt}</span>
                        <Check className="h-4 w-4 text-transparent transition-colors group-hover:text-gold" />
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 md:p-12"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span className="text-xs uppercase tracking-widest-2 text-gold">Your Personalized Picks</span>
                </div>
                <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                  Curated for your <span className="gold-gradient-text italic">{answers.face?.toLowerCase() ?? 'oval'}</span> face
                </h3>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {recs.map((r) => (
                    <div key={r.style} className="rounded-xl border border-gold/15 bg-ink-900/40 p-6">
                      <p className="font-serif text-xl gold-gradient-text">{r.style}</p>
                      <p className="mt-1 text-xs uppercase tracking-widest-2 text-white/40">{r.service}</p>
                      <p className="mt-3 text-sm text-white/60 leading-relaxed">{r.note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button onClick={() => go('#booking')} className="btn-gold inline-flex">
                    <span>Book This Look</span>
                  </button>
                  <button onClick={reset} className="btn-outline inline-flex items-center gap-2">
                    <RefreshCw className="h-3.5 w-3.5" /> Try Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
