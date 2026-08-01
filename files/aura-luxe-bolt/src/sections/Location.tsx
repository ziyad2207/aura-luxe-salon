import { MapPin, Clock, Car, Navigation } from 'lucide-react';
import Reveal from '@/components/Reveal';

const HOURS = [
  { day: 'Monday — Friday', time: '10:00 AM — 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM — 9:00 PM' },
  { day: 'Sunday', time: '10:00 AM — 6:00 PM' },
];

export default function Location() {
  return (
    <section id="location" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <p className="section-label mb-5">Find Us</p>
              <h2 className="heading-display text-4xl md:text-5xl">
                Visit our <span className="gold-gradient-text italic">atelier</span>
              </h2>
              <p className="mt-5 text-white/55">
                Nestled in a heritage townhouse in the heart of South Mumbai, our salon is a
                serene escape from the city — yet steps from everything you need.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-white/55">14 Marine Drive, Nariman Point, Mumbai 400021</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Car className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-medium">Parking & Access</p>
                    <p className="text-sm text-white/55">Complimentary valet · 2 min walk from Churchgate Metro</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div className="w-full">
                    <p className="text-sm font-medium">Working Hours</p>
                    <ul className="mt-2 space-y-1">
                      {HOURS.map((h) => (
                        <li key={h.day} className="flex justify-between text-sm text-white/55">
                          <span>{h.day}</span>
                          <span className="text-white/75">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Marine+Drive+Mumbai"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl border border-gold/20">
              <iframe
                title="Aura Luxe Salon Location"
                src="https://www.google.com/maps?q=Marine+Drive+Mumbai&output=embed"
                className="h-full w-full grayscale invert-[0.92] hue-rotate-180"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
