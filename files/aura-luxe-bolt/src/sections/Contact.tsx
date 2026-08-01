import { useState } from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    if (!supabase) {
      setStatus('error');
      return;
    }
    try {
      const { error } = await supabase.from('newsletter').insert({ email });
      if (error) {
        if (error.code === '23505') {
          setStatus('done');
        } else {
          throw error;
        }
      } else {
        setStatus('done');
      }
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="section-label mb-5">Get in Touch</p>
              <h2 className="heading-display text-4xl md:text-6xl">
                Let's <span className="gold-gradient-text italic">connect</span>
              </h2>
              <p className="mt-5 max-w-md text-white/55">
                Whether you have a question, a special request, or simply want to say hello,
                our team is here for you.
              </p>

              <div className="mt-10 space-y-4">
                <a href="tel:+912266001234" className="group flex items-center gap-4 text-white/70 transition-colors hover:text-gold">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 text-gold transition-colors group-hover:bg-gold group-hover:text-ink-900">
                    <Phone className="h-4 w-4" />
                  </span>
                  +91 22 6600 1234
                </a>
                <a href="mailto:hello@auraluxe.com" className="group flex items-center gap-4 text-white/70 transition-colors hover:text-gold">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 text-gold transition-colors group-hover:bg-gold group-hover:text-ink-900">
                    <Mail className="h-4 w-4" />
                  </span>
                  hello@auraluxe.com
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-white/70 transition-colors hover:text-gold">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 text-gold transition-colors group-hover:bg-gold group-hover:text-ink-900">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-10 flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social media"
                    className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 text-white/60 transition-all hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl">Join the inner circle</h3>
              <p className="mt-3 text-sm text-white/55">
                Subscribe for exclusive offers, beauty rituals, and early access to new services.
              </p>
              <form onSubmit={subscribe} className="mt-6">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="lux-input flex-1"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-gold inline-flex shrink-0 items-center gap-2 disabled:opacity-60"
                  >
                    <span>{status === 'loading' ? '...' : 'Subscribe'}</span>
                    {status !== 'loading' && <Send className="h-3.5 w-3.5" />}
                  </button>
                </div>
                {status === 'done' && (
                  <p className="mt-3 text-sm text-gold">Welcome to the circle. Check your inbox.</p>
                )}
                {status === 'error' && (
                  <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>
                )}
              </form>

              <div className="mt-8 border-t border-gold/10 pt-6">
                <p className="text-xs uppercase tracking-widest-2 text-white/40">Concierge Hours</p>
                <p className="mt-2 text-sm text-white/60">Mon–Sun · 9 AM – 9 PM IST</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
