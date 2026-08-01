import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Eye, X, Star } from 'lucide-react';
import { PRODUCTS } from '@/data';
import { useCart } from '@/contexts/CartContext';
import Reveal from '@/components/Reveal';

export default function Products() {
  const { add, toggleWishlist, wishlist } = useCart();
  const [quick, setQuick] = useState<string | null>(null);
  const product = PRODUCTS.find((p) => p.id === quick);

  return (
    <section id="products" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><p className="section-label mb-5">Beauty Boutique</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-display max-w-2xl text-4xl md:text-6xl">
                Take the <span className="gold-gradient-text italic">ritual</span> home
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-white/50">
              A curated edit of the luxury products our artists swear by, delivered to your door.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <div className="group overflow-hidden rounded-2xl glass">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute right-3 top-3 flex flex-col gap-2">
                    <button
                      onClick={() => toggleWishlist(p.id)}
                      aria-label="Wishlist"
                      className="grid h-9 w-9 place-items-center rounded-full bg-ink-900/70 backdrop-blur transition-colors"
                    >
                      <Heart className={`h-4 w-4 ${wishlist.includes(p.id) ? 'fill-gold text-gold' : 'text-white/70'}`} />
                    </button>
                    <button
                      onClick={() => setQuick(p.id)}
                      aria-label="Quick view"
                      className="grid h-9 w-9 place-items-center rounded-full bg-ink-900/70 backdrop-blur text-white/70 transition-colors hover:text-gold"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-ink-900/70 px-3 py-1 text-[10px] uppercase tracking-widest-2 text-gold backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl">{p.name}</h3>
                  <div className="mt-1 flex items-center gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-serif text-lg gold-gradient-text">₹{p.price.toLocaleString('en-IN')}</span>
                    <button
                      onClick={() => add(p)}
                      className="flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs uppercase tracking-widest-2 text-gold transition-all hover:bg-gold hover:text-ink-900"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" /> Add
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {product && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuick(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-ink-900/90 p-6 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="grid w-full max-w-3xl gap-6 overflow-hidden rounded-2xl glass-dark p-6 md:grid-cols-2 md:p-8"
            >
              <div className="aspect-square overflow-hidden rounded-xl">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <button onClick={() => setQuick(null)} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-gold" aria-label="Close">
                  <X className="h-4 w-4" />
                </button>
                <span className="text-xs uppercase tracking-widest-2 text-gold">{product.category}</span>
                <h3 className="mt-2 font-serif text-3xl">{product.name}</h3>
                <div className="mt-1 flex items-center gap-1">
                  {[...Array(5)].map((_, s) => <Star key={s} className="h-3 w-3 fill-gold text-gold" />)}
                </div>
                <p className="mt-4 text-white/60 leading-relaxed">{product.description}</p>
                <span className="mt-6 font-serif text-3xl gold-gradient-text">₹{product.price.toLocaleString('en-IN')}</span>
                <button
                  onClick={() => { add(product); setQuick(null); }}
                  className="btn-gold mt-6 inline-flex w-full justify-center"
                >
                  <span>Add to Cart</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
