import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useMagnetic } from '@/hooks/useMagnetic';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experts', href: '#experts' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const bookBtn = useMagnetic<HTMLAnchorElement>(0.25);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className={`fixed left-0 top-0 z-[70] w-full transition-all duration-500 ${
          scrolled ? 'glass-dark py-3' : 'py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#home" onClick={(e) => { e.preventDefault(); go('#home'); }} className="group flex items-center gap-3">
            <svg viewBox="0 0 64 64" className="h-8 w-8 transition-transform duration-700 group-hover:rotate-180" fill="none">
              <circle cx="32" cy="32" r="30" stroke="#D4AF37" strokeWidth="2" />
              <path d="M20 44 L32 16 L44 44" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="32" cy="34" r="3" fill="#D4AF37" />
            </svg>
            <span className="font-serif text-xl tracking-wide">Aura Luxe</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="group relative text-xs uppercase tracking-widest-2 text-white/70 transition-colors hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); go('#booking'); }}
              ref={bookBtn.ref}
              onMouseMove={bookBtn.onMouseMove}
              onMouseLeave={bookBtn.onMouseLeave}
              className="btn-gold hidden md:inline-flex"
            >
              <span>Book Now</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-gold lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] glass-dark flex flex-col px-6 py-6 lg:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-16 flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-gold/10 py-4 font-serif text-3xl text-white/90"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#booking"
                onClick={(e) => { e.preventDefault(); go('#booking'); }}
                className="btn-gold mt-8 w-full justify-center inline-flex"
              >
                <span>Book Appointment</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
