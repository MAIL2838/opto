import { useEffect, useRef } from 'react';
import { Microscope, Cpu, Smile, TreePine, Zap } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    title: 'Advanced Eye Exams',
    body: 'Thorough, comprehensive examinations that go far beyond standard vision testing, covering retinal health, intraocular pressure, and more.',
  },
  {
    icon: Cpu,
    title: 'Precision Diagnostics',
    body: 'State-of-the-art imaging and diagnostic tools deliver detailed insights, enabling early detection and accurate clinical decisions.',
  },
  {
    icon: Smile,
    title: 'Comfortable Experience',
    body: 'Every touchpoint is designed with your ease in mind: calm surroundings, gentle techniques, and unhurried consultations.',
  },
  {
    icon: TreePine,
    title: 'Long-Term Eye Health',
    body: 'We build an ongoing understanding of your ocular history, supporting prevention and continuity of care over time.',
  },
  {
    icon: Zap,
    title: 'Modern Equipment',
    body: 'Our clinic is equipped with leading-edge optical technology, ensuring assessments that are both fast and highly accurate.',
  },
];

export default function Features() {
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
      id="features"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(180deg, #faf8f4 0%, #f5f0e8 100%)',
        position: 'relative',
      }}
    >
      {/* Background ornament */}
      <div style={{
        position: 'absolute', top: '10%', right: '2%', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,90,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8965a',
          }}>
            Why Choose Us
          </div>
          <h2 className="shiny-text" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 300, lineHeight: 1.15,
            marginBottom: 18,
          }}>
            Care Refined to<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Every Detail</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400,
            color: '#4a4a4a', maxWidth: 480, margin: '0 auto', lineHeight: 1.65,
          }}>
            A practice built on precision, patience, and genuine commitment to the people we care for.
          </p>
        </div>

        {/* Feature grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 28,
        }}>
          {features.map(({ icon: Icon, title, body }, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 2} card-lift`}
              style={{
                background: '#faf8f4',
                border: '1px solid rgba(184,150,90,0.15)',
                borderRadius: 4,
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* corner accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: 3, height: 48,
                background: 'linear-gradient(180deg, #b8965a, transparent)',
                borderRadius: '0 0 2px 0',
              }} />

              <div style={{
                width: 48, height: 48, borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(184,150,90,0.12), rgba(184,150,90,0.05))',
                border: '1px solid rgba(184,150,90,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22,
              }}>
                <Icon size={20} color="#b8965a" strokeWidth={1.5} />
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
