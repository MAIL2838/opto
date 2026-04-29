import { useEffect, useRef } from 'react';
import { Shield, Award, Heart, Clock } from 'lucide-react';

const pillars = [
  { icon: Shield, label: 'Evidence-Based Care', desc: 'Every recommendation grounded in clinical best practice' },
  { icon: Award, label: 'Certified Specialists', desc: 'Highly trained optometrists dedicated to your eye health' },
  { icon: Heart, label: 'Patient-Centred', desc: 'Your comfort and wellbeing guide every consultation' },
  { icon: Clock, label: 'Unhurried Appointments', desc: 'Time dedicated to fully understanding your vision needs' },
];

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
        }
      }),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #2c2c2c 0%, #3d3530 100%)',
        padding: '56px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtle texture line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(184,150,90,0.5), transparent)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(184,150,90,0.3), transparent)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px 40px',
        }}>
          {pillars.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 1}`}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 16,
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                background: 'rgba(184,150,90,0.15)',
                border: '1px solid rgba(184,150,90,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={17} color="#d4b07a" strokeWidth={1.5} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 500,
                  color: '#f5f0e8', marginBottom: 5, lineHeight: 1.2,
                }}>
                  {label}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 300,
                  color: 'rgba(245,240,232,0.55)', lineHeight: 1.55,
                }}>
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
