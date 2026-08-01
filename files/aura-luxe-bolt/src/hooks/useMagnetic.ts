import { useRef, type MouseEvent } from 'react';

export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(strength = 0.4) {
  const ref = useRef<T>(null);

  const onMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0,0)';
  };

  return { ref, onMouseMove, onMouseLeave };
}
