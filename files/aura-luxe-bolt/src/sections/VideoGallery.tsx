import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import Reveal from '@/components/Reveal';

const VIDEOS = [
  { id: 'salon', title: 'Inside Aura Luxe', thumb: 'https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', embed: 'https://www.youtube.com/embed/ScMzIvxBSi4' },
  { id: 'bridal', title: 'Bridal Couture Film', thumb: 'https://images.pexels.com/photos/15507425/pexels-photo-15507425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', embed: 'https://www.youtube.com/embed/9bZkp7q19f0' },
  { id: 'color', title: 'The Art of Color', thumb: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

export default function VideoGallery() {
  const [active, setActive] = useState<string | null>(null);
  const current = VIDEOS.find((v) => v.id === active);

  return (
    <section id="videos" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <Reveal><p className="section-label mb-5">Video Gallery</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display mx-auto max-w-3xl text-4xl md:text-6xl">
              Step <span className="gold-gradient-text italic">inside</span> the experience
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={(i % 3) * 0.1}>
              <button
                onClick={() => setActive(v.id)}
                className="group relative block aspect-video w-full overflow-hidden rounded-2xl"
              >
                <img src={v.thumb} alt={v.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink-900/40 transition-opacity duration-500 group-hover:bg-ink-900/20" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/50 bg-ink-900/60 text-gold backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink-900">
                    <Play className="h-5 w-5 translate-x-0.5" />
                  </span>
                </div>
                <span className="absolute bottom-4 left-4 font-serif text-lg">{v.title}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-ink-900/90 p-6 backdrop-blur"
          >
            <button className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-video w-full max-w-4xl overflow-hidden rounded-xl"
            >
              <iframe
                src={current.embed}
                title={current.title}
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
