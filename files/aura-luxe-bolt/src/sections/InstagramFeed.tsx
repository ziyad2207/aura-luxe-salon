import { Instagram, Heart } from 'lucide-react';
import { INSTAGRAM_IMAGES } from '@/data';
import Reveal from '@/components/Reveal';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <Reveal><p className="section-label mb-5">@aura.luxe.salon</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display text-4xl md:text-6xl">
              Follow the <span className="gold-gradient-text italic">moment</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
          {INSTAGRAM_IMAGES.map((src, i) => (
            <Reveal key={i} delay={(i % 8) * 0.04}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <img src={src} alt="Instagram post" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 grid place-items-center bg-ink-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-gold" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Heart className="h-4 w-4" /> Follow Us
          </a>
        </div>
      </div>
    </section>
  );
}
