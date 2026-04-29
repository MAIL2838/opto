import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.fade-in');
    const timer = setTimeout(() => {
      items.forEach(item => item.classList.add('visible'));
    }, 100);
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
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,176,122,0.18) 0%, transparent 70%),
          radial-gradient(ellipse 60% 50% at 80% 80%, rgba(122,140,110,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 10% 70%, rgba(184,150,90,0.1) 0%, transparent 55%),
          linear-gradient(170deg, #f5f0e8 0%, #faf8f4 40%, #ede7d9 100%)
        `,
        padding: '120px 32px 80px',
      }}
    >
      {/* Decorative rings */}
      <div style={{
        position: 'absolute', top: '10%', right: '6%',
        width: 320, height: 320, borderRadius: '50%',
        border: '1px solid rgba(184,150,90,0.15)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '8%', right: '4%',
        width: 440, height: 440, borderRadius: '50%',
        border: '1px solid rgba(184,150,90,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '12%', left: '4%',
        width: 240, height: 240, borderRadius: '50%',
        border: '1px solid rgba(122,140,110,0.15)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 820, width: '100%', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {/* Eyebrow */}
        <div
          className="fade-in delay-1"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginBottom: 28, padding: '8px 20px',
            background: 'rgba(184,150,90,0.1)',
            border: '1px solid rgba(184,150,90,0.25)',
            borderRadius: 40,
          }}
        >
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#b8965a' }} />
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b8965a',
          }}>
            Premium Eye Care Clinic
          </span>
        </div>

        {/* Headline */}
        <h1
          className="fade-in delay-2 shiny-text"
          style={{
            fontSize: 'clamp(42px, 7vw, 82px)',
            fontWeight: 300,
            lineHeight: 1.12,
            letterSpacing: '-0.01em',
            marginBottom: 28,
          }}
        >
          Clear Vision Starts<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>With Expert Care</em>
        </h1>

        {/* Subtext */}
        <p
          className="fade-in delay-3"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(15px, 2vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: '#6b6b6b',
            maxWidth: 560,
            margin: '0 auto 44px',
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
              padding: '15px 38px',
              background: 'linear-gradient(135deg, #b8965a 0%, #c9a96e 100%)',
              color: '#faf8f4', border: 'none', borderRadius: 2, cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              boxShadow: '0 8px 32px rgba(184,150,90,0.3)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(184,150,90,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(184,150,90,0.3)'; }}
          >
            Book Consultation
          </button>
          <a
            href="#services"
            style={{
              padding: '15px 38px',
              background: 'transparent',
              color: '#4a4a4a', border: '1px solid rgba(44,44,44,0.2)', borderRadius: 2,
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 400,
              letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'border-color 0.25s, color 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#b8965a'; e.currentTarget.style.color = '#b8965a'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(44,44,44,0.2)'; e.currentTarget.style.color = '#4a4a4a'; }}
          >
            Our Services
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="fade-in delay-5"
          style={{
            marginTop: 60,
            display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap',
          }}
        >
          {['Precision Diagnostics', 'Comfortable Experience', 'Long-Term Care'].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#b8965a', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8e8275', letterSpacing: '0.05em' }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="fade-in delay-6"
        style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b5aea5' }}>
          Discover
        </span>
        <ChevronDown size={16} color="#b8965a" style={{ animation: 'bounce 2s infinite' }} />
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(5px); }
          }
        `}</style>
      </div>
    </section>
  );
}
