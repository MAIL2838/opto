import { useEffect, useRef } from 'react';

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type Particle = { x: number; y: number; r: number; vx: number; vy: number; opacity: number; phase: number };
    const particles: Particle[] = [];
    for (let i = 0; i < 38; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 4 + Math.random() * 24,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.14,
        opacity: 0.04 + Math.random() * 0.09,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const rings = [
      { cx: 0.75, cy: 0.28, maxR: 300, speed: 0.0035, phase: 0 },
      { cx: 0.18, cy: 0.72, maxR: 220, speed: 0.003, phase: Math.PI },
    ];

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Warm radial base
      const grad = ctx.createRadialGradient(w * 0.5, h * 0.38, 0, w * 0.5, h * 0.38, w * 0.75);
      grad.addColorStop(0, 'rgba(212,176,122,0.13)');
      grad.addColorStop(0.5, 'rgba(184,150,90,0.05)');
      grad.addColorStop(1, 'rgba(237,231,217,0.03)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Expanding eye rings
      rings.forEach(ring => {
        for (let i = 0; i < 5; i++) {
          const pct = ((t * ring.speed + ring.phase / (Math.PI * 2) + i / 5) % 1);
          const r = pct * ring.maxR;
          const alpha = (1 - pct) * 0.07;
          ctx.beginPath();
          ctx.arc(w * ring.cx, h * ring.cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(184,150,90,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Bokeh particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.r) p.x = w + p.r;
        if (p.x > w + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = h + p.r;
        if (p.y > h + p.r) p.y = -p.r;

        const pulse = p.opacity * (0.65 + 0.35 * Math.sin(t * 0.025 + p.phase));
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, `rgba(184,150,90,${pulse})`);
        g.addColorStop(1, 'rgba(184,150,90,0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Horizontal scan line
      const scanY = h * (0.3 + 0.38 * ((Math.sin(t * 0.007) + 1) / 2));
      const scanGrad = ctx.createLinearGradient(0, scanY - 8, 0, scanY + 8);
      scanGrad.addColorStop(0, 'rgba(184,150,90,0)');
      scanGrad.addColorStop(0.5, 'rgba(184,150,90,0.035)');
      scanGrad.addColorStop(1, 'rgba(184,150,90,0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 8, w, 16);

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        background: 'linear-gradient(175deg, #f5f0e8 0%, #faf8f4 40%, #f2ece0 70%, #ede7d9 100%)',
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.fade-in');
    const timer = setTimeout(() => {
      items.forEach(item => item.classList.add('visible'));
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 32px 80px',
      }}
    >
      <HeroCanvas />

      {/* Gradient overlay for text legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 55% at 50% 0%, rgba(245,240,232,0.88) 0%, transparent 70%),
          radial-gradient(ellipse 100% 70% at 50% 100%, rgba(237,231,217,0.7) 0%, transparent 55%),
          linear-gradient(175deg, rgba(245,240,232,0.78) 0%, rgba(250,248,244,0.65) 40%, rgba(237,231,217,0.72) 100%)
        `,
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Decorative rings */}
      <div style={{
        position: 'absolute', top: '10%', right: '6%',
        width: 320, height: 320, borderRadius: '50%',
        border: '1px solid rgba(184,150,90,0.18)',
        pointerEvents: 'none', zIndex: 2,
        animation: 'ringPulse 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '8%', right: '4%',
        width: 440, height: 440, borderRadius: '50%',
        border: '1px solid rgba(184,150,90,0.09)',
        pointerEvents: 'none', zIndex: 2,
        animation: 'ringPulse 8s ease-in-out infinite 1.5s',
      }} />
      <div style={{
        position: 'absolute', bottom: '12%', left: '4%',
        width: 240, height: 240, borderRadius: '50%',
        border: '1px solid rgba(122,140,110,0.18)',
        pointerEvents: 'none', zIndex: 2,
        animation: 'ringPulse 8s ease-in-out infinite 3s',
      }} />

      <div style={{ maxWidth: 820, width: '100%', textAlign: 'center', position: 'relative', zIndex: 3 }}>
        {/* Eyebrow */}
        <div
          className="fade-in delay-1"
          style={{
            display: 'inline-block', marginBottom: 20,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b8965a',
          }}
        >
          Premium Optometry · London
        </div>

        {/* Headline */}
        <h1
          className="fade-in delay-2 shiny-text"
          style={{
            fontSize: 'clamp(44px, 7vw, 86px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: 28,
          }}
        >
          Clear Vision Starts<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>With Expert Care</em>
        </h1>

        {/* Subtext */}
        <p
          className="fade-in delay-3"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(16px, 2vw, 19px)',
            fontWeight: 400,
            lineHeight: 1.72,
            color: '#3a3a3a',
            maxWidth: 560,
            margin: '0 auto 52px',
          }}
        >
          Comprehensive eye health, precision diagnostics, and a calm experience
          designed around your comfort and long-term wellbeing.
        </p>

        {/* CTAs */}
        <div
          className="fade-in delay-4"
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            onClick={scrollToContact}
            style={{
              padding: '17px 48px',
              background: 'linear-gradient(135deg, #b8965a 0%, #c9a96e 100%)',
              color: '#faf8f4', border: 'none', borderRadius: 2, cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              boxShadow: '0 8px 32px rgba(184,150,90,0.35)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 44px rgba(184,150,90,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(184,150,90,0.35)'; }}
          >
            Book Consultation
          </button>
          <a
            href="#services"
            style={{
              padding: '17px 38px',
              background: 'transparent',
              color: '#3a3a3a', border: '1px solid rgba(44,44,44,0.25)', borderRadius: 2,
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 400,
              letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'border-color 0.25s, color 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#b8965a'; e.currentTarget.style.color = '#b8965a'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(44,44,44,0.25)'; e.currentTarget.style.color = '#3a3a3a'; }}
          >
            Explore Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="fade-in delay-5" style={{ marginTop: 60, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 1, height: 44,
            background: 'linear-gradient(180deg, #b8965a 0%, transparent 100%)',
            animation: 'scrollPulse 2.2s ease-in-out infinite',
            opacity: 0.55,
          }} />
        </div>
      </div>

      <style>{`
        @keyframes ringPulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.025); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.2; transform: scaleY(0.5); }
          50% { opacity: 0.6; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
