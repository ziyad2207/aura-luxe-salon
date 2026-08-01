import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const LINKS = {
  Services: ['Hair Cut', 'Hair Coloring', 'Bridal Makeup', 'Spa & Facial', 'Keratin'],
  Company: ['About Us', 'Meet the Experts', 'Packages', 'Gift Cards', 'Membership'],
  Support: ['Book Appointment', 'FAQ', 'Contact', 'Careers', 'Privacy Policy'],
};

export default function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-gold/10 bg-ink-800">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); go('#home'); }} className="flex items-center gap-3">
              <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none">
                <circle cx="32" cy="32" r="30" stroke="#D4AF37" strokeWidth="2" />
                <path d="M20 44 L32 16 L44 44" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="32" cy="34" r="3" fill="#D4AF37" />
              </svg>
              <span className="font-serif text-2xl">Aura Luxe</span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-white/50 leading-relaxed">
              An award-winning luxury beauty sanctuary where master artistry and quiet
              indulgence reveal the most beautiful version of you.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-white/60 transition-all hover:border-gold hover:text-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <p className="text-xs uppercase tracking-widest-2 text-gold">{title}</p>
              <ul className="mt-5 space-y-3">
                {items.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/55 transition-colors hover:text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gold/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Aura Luxe Salon. Crafted with devotion.</p>
          <div className="flex flex-wrap gap-5">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Mumbai, India</span>
            <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +91 22 6600 1234</span>
            <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> hello@auraluxe.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
