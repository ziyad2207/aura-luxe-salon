import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    setEnabled(true);
    document.body.classList.add('cursor-active');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor], input, textarea, select, label');
      setHovering(!!interactive);
    };

    const raf = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('cursor-active');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-1 -mt-1 h-2 w-2 rounded-full bg-gold"
        style={{ transition: 'opacity 0.2s' }}
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-gold/60 transition-[width,height,margin,opacity] duration-300 ${
          hovering ? '-ml-5 -mt-5 h-10 w-10 bg-gold/10' : '-ml-3 -mt-3 h-6 w-6'
        }`}
      />
    </>
  );
}
