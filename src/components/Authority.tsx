import { useEffect, useRef } from 'react';
import { Stethoscope, Target, Users } from 'lucide-react';

const pillars = [
  {
    icon: Stethoscope,
    title: 'Clinical Experience',
    body: 'Our optometrists bring deep expertise across a full range of ocular conditions, from routine care to complex cases requiring ongoing management.',
  },
  {
    icon: Target,
    title: 'Diagnostic Precision',
    body: 'Every assessment is conducted with meticulous attention to detail. We use advanced imaging and proven clinical methods to ensure nothing is overlooked.',
  },
  {
    icon: Users,
    title: 'Patient-First Approach',
    body: 'Your concerns lead the consultation. We listen first, examine thoroughly, and communicate findings in clear, straightforward language.',
  },
];

export default function Authority() {
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

  return (
    <section
      id="authority"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(135deg, #2c2c2c 0%, #3d3530 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: '-8%', right: '-4%', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,90,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-8%', left: '-4%', width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,140,110,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(184,150,90,0.4), transparent)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d4b07a',
          }}>
            Our Expertise
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 300, lineHeight: 1.15,
            color: '#f5f0e8', marginBottom: 18,
          }}>
            Expert Care<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>You Can Trust</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400,
            color: 'rgba(245,240,232,0.75)', maxWidth: 480, margin: '0 auto', lineHeight: 1.65,
          }}>
            Our practice is built on a foundation of clinical rigour, genuine care, and a commitment to getting it right for every patient.
          </p>
        </div>

        {/* Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 2}`}
              style={{
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(184,150,90,0.15)',
                borderRadius: 4,
                padding: '40px 32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: 3, height: 48,
                background: 'linear-gradient(180deg, #b8965a, transparent)',
                borderRadius: '0 0 2px 0',
              }} />

              <div style={{
                width: 48, height: 48, borderRadius: 4,
                background: 'rgba(184,150,90,0.12)',
                border: '1px solid rgba(184,150,90,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
              }}>
                <Icon size={20} color="#d4b07a" strokeWidth={1.5} />
              </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 500,
                color: '#f5f0e8', marginBottom: 14, lineHeight: 1.2,
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400,
                color: 'rgba(245,240,232,0.8)', lineHeight: 1.65,
              }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
