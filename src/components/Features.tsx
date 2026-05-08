import { useEffect, useRef } from 'react';
import { Microscope, Cpu, Smile, TreePine, Zap } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    title: 'Advanced Eye Exams',
    body: 'Thorough, comprehensive examinations that go far beyond standard vision testing, covering retinal health, intraocular pressure, and more.',
    image: 'https://images.pexels.com/photos/5752310/pexels-photo-5752310.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    imageAlt: 'Eye examination equipment',
  },
  {
    icon: Cpu,
    title: 'Precision Diagnostics',
    body: 'State-of-the-art imaging and diagnostic tools deliver detailed insights, enabling early detection and accurate clinical decisions.',
    image: 'https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    imageAlt: 'Advanced optical diagnostic technology',
  },
  {
    icon: Smile,
    title: 'Comfortable Experience',
    body: 'Every touchpoint is designed with your ease in mind: calm surroundings, gentle techniques, and unhurried consultations.',
    image: 'https://images.pexels.com/photos/5765874/pexels-photo-5765874.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    imageAlt: 'Patient consultation in clinic',
  },
  {
    icon: TreePine,
    title: 'Long-Term Eye Health',
    body: 'We build an ongoing understanding of your ocular history, supporting prevention and continuity of care over time.',
    image: 'https://images.pexels.com/photos/5752309/pexels-photo-5752309.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    imageAlt: 'Optometrist reviewing patient records',
  },
  {
    icon: Zap,
    title: 'Modern Equipment',
    body: 'Our clinic is equipped with leading-edge optical technology, ensuring assessments that are both fast and highly accurate.',
    image: 'https://images.pexels.com/photos/5765829/pexels-photo-5765829.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    imageAlt: 'Modern optometry equipment',
  },
];

type Feature = typeof features[0];

function FeatureRow({ icon: Icon, title, body, image, imageAlt, reverse, index }: Feature & { reverse: boolean; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          el.querySelectorAll('.slide-left, .slide-right').forEach(n => n.classList.add('visible'));
          observer.disconnect();
        }
      }),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 56,
        alignItems: 'center',
        padding: '64px 0',
        borderBottom: index < features.length - 1 ? '1px solid rgba(184,150,90,0.1)' : 'none',
      }}
    >
      {/* Text block */}
      <div
        className={reverse ? 'slide-right' : 'slide-left'}
        style={{ order: reverse ? 2 : 1 }}
      >
        <div style={{
          width: 48, height: 48, borderRadius: 4,
          background: 'linear-gradient(135deg, rgba(184,150,90,0.14), rgba(184,150,90,0.06))',
          border: '1px solid rgba(184,150,90,0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24,
        }}>
          <Icon size={20} color="#b8965a" strokeWidth={1.5} />
        </div>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(26px, 3vw, 34px)',
          fontWeight: 500, color: '#2c2c2c',
          lineHeight: 1.15, marginBottom: 16,
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 17, fontWeight: 400,
          color: '#3a3a3a', lineHeight: 1.72,
        }}>
          {body}
        </p>
      </div>

      {/* Image block */}
      <div
        className={reverse ? 'slide-left' : 'slide-right'}
        style={{ order: reverse ? 1 : 2, position: 'relative' }}
      >
        <div style={{
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          aspectRatio: '4/3',
          boxShadow: '0 24px 64px rgba(0,0,0,0.1)',
        }}>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.6s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
          />
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: 48, height: 3,
            background: 'linear-gradient(90deg, #b8965a, transparent)',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: 3, height: 48,
            background: 'linear-gradient(180deg, #b8965a, transparent)',
          }} />
        </div>
      </div>
    </div>
  );
}

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
      <div style={{
        position: 'absolute', top: '10%', right: '2%', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,90,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8965a',
          }}>
            Why Choose Us
          </div>
          <h2 className="shiny-text" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 54px)',
            fontWeight: 400, lineHeight: 1.12,
            marginBottom: 18,
          }}>
            Care Refined to<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Every Detail</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400,
            color: '#3a3a3a', maxWidth: 480, margin: '0 auto', lineHeight: 1.68,
          }}>
            A practice built on precision, patience, and genuine commitment to the people we care for.
          </p>
        </div>

        {/* Feature rows */}
        <div>
          {features.map((feature, i) => (
            <FeatureRow key={i} {...feature} reverse={i % 2 !== 0} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
