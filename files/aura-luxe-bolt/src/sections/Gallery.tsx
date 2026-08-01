import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MoveHorizontal } from 'lucide-react';
import { GALLERY_IMAGES } from '@/data';
import Reveal from '@/components/Reveal';

function Comparison({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div ref={ref} className="relative aspect-[4/3] overflow-hidden rounded-2xl select-none">
      <img src={after} alt={`${label} after`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt={`${label} before`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: 'none' }} />
      </div>
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-gold" />
        <div className="absolute top-1/2 -ml-5 h-10 w-10 -translate-y-1/2 rounded-full border border-gold bg-ink-900/80 backdrop-blur grid place-items-center text-gold">
          <MoveHorizontal className="h-4 w-4" />
        </div>
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-ink-900/70 px-3 py-1 text-[10px] uppercase tracking-widest-2 text-white/80 backdrop-blur">
        {label}
      </span>
      <div
        className="absolute inset-0 cursor-ew-resize"
        onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
        onMouseDown={(e) => onMove(e.clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchStart={(e) => onMove(e.touches[0].clientX)}
      />
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <Reveal><p className="section-label mb-5">Before / After</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display mx-auto max-w-3xl text-4xl md:text-6xl">
              The <span className="gold-gradient-text italic">transformation</span> speaks for itself
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-white/50">
              Drag the slider to reveal the artistry. Every result is the work of our master team.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {GALLERY_IMAGES.map((g, i) => (
            <Reveal key={g.label} delay={(i % 2) * 0.1}>
              <div onClick={() => setLightbox(g.after)} className="cursor-pointer">
                <Comparison {...g} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-ink-900/90 p-6 backdrop-blur"
          >
            <button className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery fullscreen"
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
