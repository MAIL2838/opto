import { useEffect, useRef } from 'react';
import { ShieldCheck, Crosshair, HeartHandshake } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Patient-First Care',
    body: 'Your wellbeing drives every decision. We never rush consultations, never upsell unnecessary services, and always prioritise what is right for your eyes.',
  },
  {
    icon: Crosshair,
    title: 'Accurate Diagnosis',
    body: 'We use proven clinical methods and advanced technology to ensure our assessments are thorough and precise. If something needs attention, we find it. If everything is healthy, we confirm it.',
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing Support',
    body: 'Your care does not end when you leave the clinic. We provide clear follow-up plans, recall reminders, and are available to answer questions between visits.',
  },
];

export default function Guarantee() {
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
      id="guarantee"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(180deg, #faf8f4 0%, #f5f0e8 100%)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', top: '10%', left: '-3%', width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,140,110,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a8c6e',
          }}>
            Our Promise
          </div>
          <h2 className="shiny-text" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 300, lineHeight: 1.15,
            marginBottom: 18,
          }}>
            Care You Can<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Count On</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400,
            color: '#4a4a4a', maxWidth: 480, margin: '0 auto', lineHeight: 1.65,
          }}>
            Three commitments that define how we practise, and what every patient can expect from us.
          </p>
        </div>

        {/* Guarantee cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {guarantees.map(({ icon: Icon, title, body }, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 2} card-lift`}
              style={{
                background: '#faf8f4',
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
                background: 'linear-gradient(180deg, #7a8c6e, transparent)',
                borderRadius: '0 0 2px 0',
              }} />

              <div style={{
                width: 48, height: 48, borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(122,140,110,0.12), rgba(122,140,110,0.05))',
                border: '1px solid rgba(122,140,110,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22,
              }}>
                <Icon size={20} color="#7a8c6e" strokeWidth={1.5} />
              </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 500,
                color: '#2c2c2c', marginBottom: 12, lineHeight: 1.2,
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400,
                color: '#4a4a4a', lineHeight: 1.65,
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
