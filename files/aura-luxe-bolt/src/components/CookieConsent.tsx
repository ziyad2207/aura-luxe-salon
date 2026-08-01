import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('aura-cookies');
    if (!accepted) {
      const t = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('aura-cookies', 'accepted');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          className="fixed bottom-6 left-6 z-[78] max-w-sm glass-dark rounded-2xl p-5"
        >
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="text-sm text-white/80">We use cookies to enhance your experience.</p>
              <p className="mt-1 text-xs text-white/40">By continuing, you agree to our cookie policy.</p>
              <div className="mt-3 flex gap-2">
                <button onClick={accept} className="btn-gold inline-flex px-5 py-2 text-[10px]">
                  <span>Accept</span>
                </button>
                <button onClick={accept} className="rounded-full border border-gold/30 px-5 py-2 text-[10px] uppercase tracking-widest-2 text-white/60 hover:text-gold">
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
