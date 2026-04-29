import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
        }
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      style={{
        padding: '80px 32px',
        background: 'linear-gradient(135deg, #2c2c2c 0%, #3d3530 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,90,0.1) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(184,150,90,0.5), transparent)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(184,150,90,0.3), transparent)',
      }} />

      <div className="fade-in delay-1" style={{
        maxWidth: 640, margin: '0 auto', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 300, lineHeight: 1.15,
          color: '#f5f0e8', marginBottom: 20,
        }}>
          Ready to Take the<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Next Step?</em>
        </h2>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400,
          color: 'rgba(245,240,232,0.75)', maxWidth: 400, margin: '0 auto 36px', lineHeight: 1.65,
        }}>
          Book your consultation today and experience the difference thoughtful, patient-first eye care can make.
        </p>
        <button
          onClick={scrollToContact}
          style={{
            padding: '16px 48px',
            background: 'linear-gradient(135deg, #b8965a, #c9a96e)',
            color: '#faf8f4', border: 'none', borderRadius: 2, cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            boxShadow: '0 8px 32px rgba(184,150,90,0.35)',
            transition: 'transform 0.25s, box-shadow 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(184,150,90,0.45)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(184,150,90,0.35)'; }}
        >
          Book Consultation
        </button>
      </div>
    </section>
  );
}
