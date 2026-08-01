import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[75] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="glass-dark w-64 rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <p className="font-serif text-lg">Chat with us</p>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-4 w-4 text-white/50" /></button>
            </div>
            <p className="mt-2 text-sm text-white/55">Our concierge typically replies within minutes during working hours.</p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-medium text-white"
            >
              <MessageCircle className="h-4 w-4" /> Open WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        aria-label="WhatsApp chat"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-gold ring-2 ring-ink-900" />
      </motion.button>
    </div>
  );
}
