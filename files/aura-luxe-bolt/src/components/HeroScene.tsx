import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
};

type FloatingShape = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  size: number;
  type: 'scissors' | 'diamond' | 'circle' | 'ring';
  opacity: number;
};

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    const particles: Particle[] = [];
    const shapes: FloatingShape[] = [];

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Init particles
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    // Init floating shapes
    const shapeTypes: FloatingShape['type'][] = ['scissors', 'diamond', 'circle', 'ring', 'scissors', 'diamond', 'circle', 'ring'];
    for (let i = 0; i < 8; i++) {
      shapes.push({
        x: 100 + (i * 110) % 700,
        y: 80 + (i * 95) % 500,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        size: 24 + Math.random() * 20,
        type: shapeTypes[i],
        opacity: 0.4 + Math.random() * 0.3,
      });
    }

    const gold = (a: number) => `rgba(212,175,55,${a})`;
    const champagne = (a: number) => `rgba(200,169,106,${a})`;

    const drawScissors = (ctx: CanvasRenderingContext2D, size: number) => {
      // Top blade
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(size * 0.6, -size * 0.8);
      ctx.lineWidth = size * 0.08;
      ctx.stroke();
      // Bottom blade
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-size * 0.6, -size * 0.8);
      ctx.stroke();
      // Ring handle top
      ctx.beginPath();
      ctx.arc(size * 0.55, size * 0.5, size * 0.22, 0, Math.PI * 2);
      ctx.lineWidth = size * 0.07;
      ctx.stroke();
      // Ring handle bottom
      ctx.beginPath();
      ctx.arc(-size * 0.55, size * 0.5, size * 0.22, 0, Math.PI * 2);
      ctx.stroke();
      // Center pivot
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawDiamond = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.6, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.6, 0);
      ctx.closePath();
      ctx.stroke();
      // Inner facet lines
      ctx.beginPath();
      ctx.moveTo(-size * 0.6, 0);
      ctx.lineTo(0, -size * 0.4);
      ctx.lineTo(size * 0.6, 0);
      ctx.lineWidth = size * 0.04;
      ctx.stroke();
    };

    const drawCircle = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.lineWidth = size * 0.08;
      ctx.stroke();
      // Inner dot
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawRing = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.lineWidth = size * 0.12;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.65, 0, Math.PI * 2);
      ctx.lineWidth = size * 0.04;
      ctx.stroke();
    };

    let t = 0;
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, W, H);

      // Radial glow from center
      const grd = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.7);
      grd.addColorStop(0, 'rgba(212,175,55,0.04)');
      grd.addColorStop(0.5, 'rgba(200,169,106,0.02)');
      grd.addColorStop(1, 'rgba(5,5,5,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // Mouse parallax offset
      const mx = ((mouse.current.x || W / 2) / W - 0.5) * 30;
      const my = ((mouse.current.y || H / 2) / H - 0.5) * 20;

      // Particles
      for (const p of particles) {
        p.x = ((p.x + p.vx + W) % W);
        p.y = ((p.y + p.vy + H) % H);
        p.pulse += p.pulseSpeed;
        const a = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        const px = p.x + mx * p.size * 0.3;
        const py = p.y + my * p.size * 0.3;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.5 ? gold(a) : champagne(a * 0.8);
        ctx.fill();
      }

      // Floating shapes
      for (const s of shapes) {
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;

        // Bounce off edges
        if (s.x < s.size || s.x > W - s.size) s.vx *= -1;
        if (s.y < s.size || s.y > H - s.size) s.vy *= -1;
        s.x = Math.max(s.size, Math.min(W - s.size, s.x));
        s.y = Math.max(s.size, Math.min(H - s.size, s.y));

        const sx = s.x + mx * 0.6;
        const sy = s.y + my * 0.6;
        const pulse = 0.7 + 0.3 * Math.sin(t * 1.2 + s.x);

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(s.rotation);
        ctx.globalAlpha = s.opacity * pulse;
        ctx.strokeStyle = gold(1);
        ctx.fillStyle = gold(1);

        switch (s.type) {
          case 'scissors': drawScissors(ctx, s.size); break;
          case 'diamond': drawDiamond(ctx, s.size); break;
          case 'circle': drawCircle(ctx, s.size); break;
          case 'ring': drawRing(ctx, s.size); break;
        }

        ctx.restore();
      }

      // Scan line effect
      for (let y = 0; y < H; y += 4) {
        ctx.fillStyle = 'rgba(5,5,5,0.015)';
        ctx.fillRect(0, y, W, 1);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ display: 'block' }}
    />
  );
}
