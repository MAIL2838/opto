import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.hero-fade');
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('hero-visible'), 200 + i * 160);
    });
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
      {/* Video background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'linear-gradient(175deg, #f5f0e8 0%, #faf8f4 40%, #f2ece0 70%, #ede7d9 100%)',
        overflow: 'hidden',
      }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="https://videos.pexels.com/video-files/5765209/5765209-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlay for legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 55% at 50% 0%, rgba(245,240,232,0.55) 0%, transparent 70%),
          radial-gradient(ellipse 100% 70% at 50% 100%, rgba(237,231,217,0.40) 0%, transparent 55%),
          linear-gradient(175deg, rgba(245,240,232,0.35) 0%, rgba(250,248,244,0.25) 40%, rgba(237,231,217,0.30) 100%)
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
        {/* Headline */}
        <h1
          className="hero-fade shiny-text"
          style={{
            fontSize: 'clamp(44px, 7vw, 86px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: 28,
            opacity: 0, transform: 'translateY(28px)',
            transition: 'opacity 0.85s ease, transform 0.85s ease',
          }}
        >
          Clear Vision Starts<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>With Expert Care</em>
        </h1>

        {/* Subtext */}
        <p
          className="hero-fade"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(16px, 2vw, 19px)',
            fontWeight: 400,
            lineHeight: 1.72,
            color: '#3a3a3a',
            maxWidth: 560,
            margin: '0 auto 52px',
            opacity: 0, transform: 'translateY(22px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          Comprehensive eye health, precision diagnostics, and a calm experience
          designed around your comfort and long-term wellbeing.
        </p>

        {/* CTAs */}
        <div
          className="hero-fade"
          style={{
            display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
            opacity: 0, transform: 'translateY(18px)',
            transition: 'opacity 0.75s ease, transform 0.75s ease',
          }}
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
        <div
          className="hero-fade"
          style={{
            marginTop: 60, display: 'flex', justifyContent: 'center',
            opacity: 0, transition: 'opacity 0.75s ease',
          }}
        >
          <div style={{
            width: 1, height: 44,
            background: 'linear-gradient(180deg, #b8965a 0%, transparent 100%)',
            animation: 'scrollPulse 2.2s ease-in-out infinite',
            opacity: 0.55,
          }} />
        </div>
      </div>

      <style>{`
        .hero-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes heroVideoZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }
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
